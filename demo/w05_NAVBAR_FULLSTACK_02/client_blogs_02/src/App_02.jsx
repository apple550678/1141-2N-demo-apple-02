import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayoutPage_02,
  HomePage_02,
  BlogStaticPage_02,
  BlogLocalJsonPage_02,
  BlogNodePage_02,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_02 />,
    children: [
      {
        index: true,
        element: <HomePage_02 />,
      },
      {
        path: 'static_02',
        element: <BlogStaticPage_02 />,
      },
      {
        path: 'localjson_02',
        element: <BlogLocalJsonPage_02 />,
      },
      {
        path: 'node_02',
        element: <BlogNodePage_02 />,
      },
    ],
  },
])

const App_02 = () => {
  return <RouterProvider router={router} />
}

export default App_02
