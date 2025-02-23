import Typography from '@mui/material/Typography'

import Main from '../layouts/main.tsx'

export default function Publication() {
    return (
        <Main title="Posts">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h1">
                Posts
            </Typography>
            <Typography variant="subtitle1">
                Sharing my posts on philosophy of mind, cognitive science, and
                artificial intelligence.
            </Typography>
        </Main>
    )
}
