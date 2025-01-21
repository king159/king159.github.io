import { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { styled } from '@mui/material/styles'
import Navigation from '../components/Template/navigation.tsx'
import SideBar from '../components/Template/sidebar.tsx'
import UpdateBubble from '../components/Template/update-bubble.tsx'

// Styled component with CSS reset
const OverallLayout = styled('body')({
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    '&.is-loading': {
        '*': {
            animation: 'none !important',
            transition: 'none !important',
        },
        '*::before, *::after': {
            animation: 'none !important',
            transition: 'none !important',
        },
    },
})

// Styled layout for each page
const EachPageLayout = styled('div')({
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: '0 auto',
    padding: '4.5em',
    width: '90em',
    maxWidth: '100%',
})

interface MainProps {
    title?: string
    children: ReactNode
    fullPage?: boolean
}

const Main = ({ title, children, fullPage }: MainProps) => (
    <OverallLayout>
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | Wang Jinghao（王靖淏）"
                defaultTitle="Wang Jinghao（王靖淏）"
                defer={false}
            >
                {title && <title>{title}</title>}
            </Helmet>
            <EachPageLayout>
                <Navigation />
                <div style={{ width: '100%' }}>{children}</div>
                {!fullPage && <SideBar />}
            </EachPageLayout>
            <UpdateBubble />
        </HelmetProvider>
    </OverallLayout>
)

export default Main
