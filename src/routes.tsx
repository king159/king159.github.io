import About from './pages/about-page'
import Publication from './pages/publication-page'
import Post from './pages/posts-page'

const routes = [
    {
        path: '/',
        element: <About />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/publication',
        element: <Publication />,
    },
    {
        path: '/posts',
        element: <Post />,
    },
]

export default routes
