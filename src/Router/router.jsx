import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import BlogDetail from '../Pages/NewsDetail/NewsDetail'
import BlogPage from '../Pages/BlogPage/BlogPage'

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/news/:id',
        element: <BlogDetail />,
      },
      {
        path: '/blog/',
        element: <BlogPage />,
      },
    ],
  },
])

export default myRouter
