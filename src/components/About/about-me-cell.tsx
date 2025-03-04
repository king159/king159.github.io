import {
    Card,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import aboutMeData from 'data/about/bio'
import newsData from 'data/about/news'

const BioTypography = styled(Typography)({
    padding: '1em',
    boxShadow: '0 0 2px #0000001a',
    '& a': {
        textDecoration: 'none',
        borderBottom: '2px dotted #a0a0a0cc',
        color: 'inherit',
        '&:hover': {
            borderBottomColor: 'transparent',
            color: '#005E54',
            '$:before': {
                color: 'blue',
            },
        },
    },
    '& del': {
        fontWeight: 'bold',
    },
})

export default function AboutMeCell() {
    return (
        <Box>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4">
                Biography
            </Typography>
            <Card>
                <BioTypography>{aboutMeData}</BioTypography>
            </Card>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4">
                Updates
            </Typography>
            <Card>
                <List>
                    {newsData.map((item) => (
                        <ListItem
                            sx={{ backgroundColor: 'white' }}
                            key={item.link}
                        >
                            <ListItemButton
                                onClick={() => window.open(item.link)}
                            >
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.firstLine}
                                    secondary={item.secondLine || null}
                                    sx={{ color: 'black' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </Box>
    )
}
