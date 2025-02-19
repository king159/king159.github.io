import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function UpdateBubble() {
    return (
        <Box sx={{ position: 'fixed', bottom: 10, left: 10, right: 0 }}>
            <Button variant="text" sx={{ textTransform: 'none' }} disabled>
                <PriorityHighIcon sx={{ color: '#ffb39a', marginLeft: -1 }} />
                <Typography sx={{ fontSize: '12pt', color: 'black' }}>
                    Latest update: 2025-02
                </Typography>
            </Button>
        </Box>
    )
}
