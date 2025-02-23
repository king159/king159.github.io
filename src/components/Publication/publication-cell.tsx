import { useEffect, useMemo, useState } from 'react'

import {
    ExpandMore as ExpandMoreIcon,
    FormatListBulleted as FormatListBulletedIcon,
    GitHub as GitHubIcon,
    Send as SendIcon,
    StarRate as StarRateIcon,
} from '@mui/icons-material'
import {
    Badge,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Collapse,
    Dialog,
    DialogActions,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import ColorArray from '../../data/color'
import { PublicationData } from 'types'

async function retrieveGithubStars(githubLink: string) {
    const url = githubLink.split('/').slice(-2).join('/')
    try {
        const res = await fetch(`https://img.shields.io/github/stars/${url}`)
        const text = await res.text()
        // Updated regex to capture decimals with an optional "k" suffix:
        const match = text.match(/>([\d.]+k?)<\/text>/)
        return match ? match[1] : '0'
    } catch {
        return '0'
    }
}

const BibTeXTypography = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '15px',
    borderRadius: '5px',
    whiteSpace: 'pre-wrap',
})

const MeAsAuthorStrong = styled('strong')({
    color: '#1a1a1a',
    fontWeight: 700,
})

const MyCardMedia = styled(CardMedia)({
    flexShrink: 0,
    width: '20%',
    marginLeft: 'auto',
})

const MySup = styled('sup')({
    fontSize: '0.8em',
    position: 'relative',
    top: '-0.2em',
})

const HighlightAuthor = (item: string, index: number, arr: string[]) => {
    const trimmed = item.trim()
    const isHighlighted =
        trimmed === 'Jinghao Wang' || trimmed === 'Jinghao Wang*'
    const hasConversion = trimmed.includes('#')
    return (
        <span key={index}>
            {isHighlighted ? (
                <MeAsAuthorStrong>{trimmed}</MeAsAuthorStrong>
            ) : hasConversion ? (
                <>
                    {trimmed.replace('#', '')}
                    <MySup>&#x2709;</MySup>
                </>
            ) : (
                trimmed
            )}
            {index < arr.length - 1 && ',\u00A0\u00A0'}
        </span>
    )
}

interface PublicationCellProps {
    data: PublicationData
    expandAllAbstract: boolean
}

export default function PublicationCell({
    data,
    expandAllAbstract,
}: PublicationCellProps) {
    const [showAbstract, setShowAbstract] = useState(false)
    const [githubStars, setGithubStars] = useState('0')
    const [showBibTeX, setShowBibTeX] = useState(false)

    useEffect(() => {
        if (data.link.github) {
            retrieveGithubStars(data.link.github).then(setGithubStars)
        }
    }, [data.link.github])

    useEffect(() => {
        setShowAbstract(expandAllAbstract)
    }, [expandAllAbstract])

    const toggleAbstract = () => setShowAbstract((prev) => !prev)
    const toggleBibTeX = () => setShowBibTeX((prev) => !prev)
    const authorList = useMemo(
        () => data.author.split(',').map(HighlightAuthor),
        [data.author]
    )

    return (
        <Card
            sx={{
                display: 'flex',
                mb: '1.5em',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.6em',
                    flex: 1,
                }}
            >
                <CardContent>
                    <Typography
                        sx={{
                            width: '100%',
                            textAlign: 'center',
                            mb: '1em',
                            fontWeight: 700,
                        }}
                        variant="h5"
                    >
                        {data.title}
                    </Typography>
                    <Box
                        sx={{
                            ml: '2em',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h6">{authorList}</Typography>
                        <Typography sx={{ fontStyle: 'italic' }} variant="h6">
                            {data.venue}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#707070cc' }}>
                            TL;DR: {data.tldr}
                        </Typography>
                        <Typography variant="h6">{data.time}</Typography>
                        <Box sx={{ '& button': { mr: '1em', p: 0 } }}>
                            {data.bibtex && (
                                <Button
                                    size="small"
                                    endIcon={<SendIcon />}
                                    onClick={() => window.open(data.link.paper)}
                                    sx={{
                                        color: ColorArray[0],
                                        textTransform: 'none',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: ColorArray[0],
                                            textTransform: 'none',
                                        }}
                                        variant="h6"
                                    >
                                        Paper
                                    </Typography>
                                </Button>
                            )}
                            {data.link.github && (
                                <>
                                    <Button
                                        size="small"
                                        endIcon={<GitHubIcon />}
                                        onClick={() =>
                                            window.open(data.link.github)
                                        }
                                        sx={{
                                            color: ColorArray[1],
                                            textTransform: 'none',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: ColorArray[1],
                                                textTransform: 'none',
                                            }}
                                            variant="h6"
                                        >
                                            Code
                                        </Typography>
                                    </Button>
                                    <Badge
                                        badgeContent={githubStars}
                                        sx={{ mr: '1em' }}
                                        max={99999}
                                    >
                                        <StarRateIcon
                                            sx={{ color: ColorArray[2] }}
                                        />
                                    </Badge>
                                </>
                            )}
                            {data.bibtex && (
                                <Button
                                    size="medium"
                                    endIcon={<FormatListBulletedIcon />}
                                    onClick={toggleBibTeX}
                                    sx={{
                                        color: ColorArray[3],
                                        textTransform: 'none',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: ColorArray[3],
                                            textTransform: 'none',
                                        }}
                                        variant="h6"
                                    >
                                        BibTeX
                                    </Typography>
                                </Button>
                            )}
                            <Dialog open={showBibTeX} onClose={toggleBibTeX}>
                                <BibTeXTypography>
                                    {data.bibtex}
                                </BibTeXTypography>
                                <DialogActions>
                                    <Button
                                        autoFocus
                                        onClick={toggleBibTeX}
                                        sx={{ color: '#a0a0a0cc' }}
                                    >
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Button
                                onClick={toggleAbstract}
                                sx={{
                                    color: ColorArray[4],
                                    textTransform: 'none',
                                }}
                                endIcon={<ExpandMoreIcon />}
                            >
                                {' '}
                                <Typography
                                    sx={{
                                        color: ColorArray[4],
                                        textTransform: 'none',
                                    }}
                                    variant="h6"
                                >
                                    Abstract
                                </Typography>
                            </Button>
                            <Collapse
                                in={showAbstract}
                                timeout="auto"
                                unmountOnExit
                            >
                                <Typography variant="h6">
                                    {data.abstract}
                                </Typography>
                            </Collapse>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            <MyCardMedia image={`painting/${data.image_path}`} />
        </Card>
    )
}
