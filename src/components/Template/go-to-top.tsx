import { IconButton } from '@mui/material'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'

export default function GoToTopButton() {
    const scrollToTop = () => {
        const container = document.getElementById('scroll-container')
        container?.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <IconButton
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                backgroundColor: 'white',
                borderRadius: '50%',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                    backgroundColor: 'lightgray',
                },
            }}
        >
            <VerticalAlignTopIcon sx={{ fontSize: 50, color: 'black' }} />
        </IconButton>
    )
}
