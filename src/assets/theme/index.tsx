import { createTheme } from '@mui/material/styles'
import card from './components/card'
import typography from './base/typography'

const theme = createTheme({
    typography: {
        ...typography,
    },
    components: {
        MuiCard: card as any,
    },
})

export default theme
