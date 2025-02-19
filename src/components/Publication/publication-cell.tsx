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
        // Extract star count using a regular expression for clarity:
        const match = text.match(/>(\d+)<\/text>/)
        return match ? match[1] : '0'
    } catch {
        return '0'
    }
}

const PublicationTypography = styled(Typography)({
    fontSize: '28px',
    margin: '0.5em 0 0.25em',
    lineHeight: '160%',
    fontWeight: 400,
    letterSpacing: '-0.02em',
    fontFamily: 'Söhne, sans-serif',
    color: '#080808',
})

const BibTeXTypography = styled(Typography)({
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '15px',
    borderRadius: '5px',
    whiteSpace: 'pre-wrap',
})

const MeAsAuthorStrong = styled('strong')({
    color: '#1a1a1a',
    fontSize: '21px',
    fontWeight: 700,
})

const MyCardMedia = styled(CardMedia)({
    flexShrink: 0,
    width: '40%',
    margin: '0 auto',
    height: 'auto',
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
        <Card sx={{ display: 'flex', mb: '1.5em' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <PublicationTypography
                        sx={{
                            textAlign: 'center',
                            fontSize: '26px',
                            px: '1em',
                            mb: '1em',
                        }}
                    >
                        {data.title}
                    </PublicationTypography>
                    <Box
                        sx={{
                            ml: '2em',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <PublicationTypography sx={{ fontSize: '18px' }}>
                            {authorList}
                        </PublicationTypography>
                        <PublicationTypography
                            sx={{ fontSize: '18px', fontStyle: 'italic' }}
                        >
                            {data.venue}
                        </PublicationTypography>
                        <PublicationTypography
                            variant="body2"
                            sx={{ color: '#707070cc', fontSize: '18px' }}
                        >
                            TL;DR: {data.tldr}
                        </PublicationTypography>
                        <PublicationTypography sx={{ fontSize: '16px' }}>
                            {data.time}
                        </PublicationTypography>
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
                                    Paper
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
                                        Code
                                    </Button>
                                    <Badge
                                        badgeContent={githubStars}
                                        sx={{ mr: '1em' }}
                                    >
                                        <StarRateIcon
                                            sx={{ color: ColorArray[2] }}
                                        />
                                    </Badge>
                                </>
                            )}
                            {data.bibtex && (
                                <Button
                                    size="small"
                                    endIcon={<FormatListBulletedIcon />}
                                    onClick={toggleBibTeX}
                                    sx={{
                                        color: ColorArray[3],
                                        textTransform: 'none',
                                    }}
                                >
                                    BibTeX
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
                                Abstract
                            </Button>
                            <Collapse
                                in={showAbstract}
                                timeout="auto"
                                unmountOnExit
                            >
                                <PublicationTypography
                                    sx={{ fontSize: '16px' }}
                                >
                                    {data.abstract}
                                </PublicationTypography>
                            </Collapse>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            <MyCardMedia image={`painting/${data.image_path}`} />
        </Card>
    )
}
