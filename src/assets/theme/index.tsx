import { createTheme } from '@mui/material/styles'
import card from './components/card'

const theme = createTheme({
    components: {
        MuiCard: card as any,
    },
})

export default theme