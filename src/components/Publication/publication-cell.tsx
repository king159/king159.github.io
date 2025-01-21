import { useEffect, useMemo, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'
import StarRateIcon from '@mui/icons-material/StarRate'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Collapse from '@mui/material/Collapse'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import ColorArray from '../../data/color.tsx'

async function retrieveGithubStars(githubLink: string) {
    const url = githubLink.split('/').slice(-2).join('/')
    try {
        const githubRepoData = await fetch(
            `https://img.shields.io/github/stars/${url}`
        )
        const githubRepoDataText = await githubRepoData.text()
        const githubStars = githubRepoDataText
            .split('</text></a></g></svg>')[0]
            .split('>')[31]
        return githubStars
    } catch {
        return '0'
    }
}

const PublicationTypography = styled(Typography)(() => ({
    fontSize: '28px',
    margin: '0.5em 0em 0.25em 0em',
    lineHeight: '160%',
    fontWeight: '400',
    letterSpacing: '-0.02em',
    fontFamily: 'Söhne, sans-serif',
    color: '#080808',
}))

const BibTeXTypography = styled(Typography)(() => ({
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '15px',
    borderRadius: '5px',
    whiteSpace: 'pre-wrap',
}))

const MeAsAuthorStrong = styled('strong')({
    color: '#1a1a1a',
    fontSize: '21px',
    fontWeight: '700',
})

const MyCardMedia = styled(CardMedia)(() => ({
    flexShrink: 0,
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
}))

const MySup = styled('sup')({
    fontSize: '0.8em',
    position: 'relative',
    top: '-0.2em',
})

const HighlightAuthor = (item: string, index: number, arr: string[]) => {
    const trimmedItem: string = item.trim()
    const isHighlighted: boolean =
        trimmedItem === 'Jinghao Wang' || trimmedItem === 'Jinghao Wang*'
    const convertedItem: boolean = trimmedItem.includes('#')
    return (
        <span key={index}>
            {isHighlighted ? (
                <MeAsAuthorStrong>{trimmedItem}</MeAsAuthorStrong>
            ) : convertedItem ? (
                <>
                    {trimmedItem.replace('#', '')}
                    <MySup>&#x2709;</MySup>
                </>
            ) : (
                trimmedItem
            )}
            {arr.length === index + 1 ? '' : ',\u00A0\u00A0'}
        </span>
    )
}

interface PublicationData {
    link: {
        github?: string
        paper?: string
    }
    author: string
    title: string
    conference: string
    tldr: string
    time: string
    bibtex?: string
    abstract?: string
    image_path: string
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
    const [showGithubStars, setGithubStars] = useState('0')
    const [showBibTeX, setShowBibTeX] = useState(false)

    useEffect(() => {
        if (data.link.github) {
            retrieveGithubStars(data.link.github).then(setGithubStars)
        }
    }, [data.link.github])

    useEffect(() => {
        setShowAbstract(expandAllAbstract)
    }, [expandAllAbstract])

    const handleExpandClick = () => setShowAbstract((prev) => !prev)
    const handleBibTeXClick = () => setShowBibTeX((prev) => !prev)

    const authorList = useMemo(
        () => data.author.split(',').map(HighlightAuthor),
        [data.author]
    )

    return (
        <Card sx={{ display: 'flex', marginBottom: '1.5em' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <PublicationTypography
                        sx={{
                            textAlign: 'center',
                            fontSize: '26px',
                            paddingX: '1em',
                            marginBottom: '1em',
                        }}
                    >
                        {data.title}
                    </PublicationTypography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '2em',
                        }}
                    >
                        <PublicationTypography sx={{ fontSize: '18px' }}>
                            {authorList}
                        </PublicationTypography>
                        <PublicationTypography
                            sx={{ fontSize: '18px', fontStyle: 'italic' }}
                        >
                            {data.conference}
                        </PublicationTypography>
                        <PublicationTypography
                            variant="body2"
                            sx={{ color: '#a0a0a0cc', fontSize: '18px' }}
                        >
                            TL;DR: {data.tldr}
                        </PublicationTypography>
                        <PublicationTypography sx={{ fontSize: '16px' }}>
                            {data.time}
                        </PublicationTypography>

                        <Box
                            sx={{
                                '& button': {
                                    marginRight: '1em',
                                    padding: '0',
                                },
                            }}
                        >
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
                                    {'Paper'}
                                </Button>
                            )}

                            {data.link.github && (
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
                                    {'Code'}
                                </Button>
                            )}

                            {data.link.github && (
                                <Badge
                                    badgeContent={showGithubStars}
                                    sx={{ marginRight: '1em' }}
                                >
                                    <StarRateIcon
                                        sx={{ color: ColorArray[2] }}
                                    />
                                </Badge>
                            )}

                            {data.bibtex && (
                                <Button
                                    size="small"
                                    endIcon={<FormatListBulletedIcon />}
                                    onClick={handleBibTeXClick}
                                    sx={{
                                        color: ColorArray[3],
                                        textTransform: 'none',
                                    }}
                                >
                                    {'BibTeX'}
                                </Button>
                            )}

                            <Dialog
                                open={showBibTeX}
                                onClose={handleBibTeXClick}
                            >
                                <BibTeXTypography>
                                    {data.bibtex}
                                </BibTeXTypography>
                                <DialogActions>
                                    <Button
                                        autoFocus
                                        onClick={handleBibTeXClick}
                                        sx={{ color: '#a0a0a0cc' }}
                                    >
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            <Button
                                onClick={handleExpandClick}
                                sx={{
                                    color: ColorArray[4],
                                    textTransform: 'none',
                                }}
                                endIcon={<ExpandMoreIcon />}
                            >
                                {'Abstract'}
                            </Button>
                            <Collapse
                                in={showAbstract}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <PublicationTypography
                                        sx={{ fontSize: '16px' }}
                                    >
                                        {data.abstract}
                                    </PublicationTypography>
                                </CardContent>
                            </Collapse>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            <MyCardMedia image={`painting/${data.image_path}`} />
        </Card>
    )
}
