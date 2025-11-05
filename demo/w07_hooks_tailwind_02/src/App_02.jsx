import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayoutPage_02,
  HomePage_02,
  BlogStaticPage_02,
  BlogLocalJsonPage_02,
  BlogLocalJsonPage2_02,
  BlogNodePage_02,
  BlogSupaPage_02,
  T11_ErrorExamplePage_02,
  T12_UseStateBasicsPage_02,
  BookListPage_02,
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
        path: 'localjson2_02',
        element: <BlogLocalJsonPage2_02 />,
      },
      {
        path: 'node_02',
        element: <BlogNodePage_02 />,
      },
      {
        path: 'supa_02',
        element: <BlogSupaPage_02 />,
      },
      {
        path: 'booklist_02',
        element: <BookListPage_02 />,
      },
      {
        path: 'tutorials/t11_02',
        element: <T11_ErrorExamplePage_02 />,
      },
      {
        path: 'tutorials/t12_02',
        element: <T12_UseStateBasicsPage_02 />,
      },
    ],
  },
])

const App_02 = () => {
  return <RouterProvider router={router} />
}

export default App_02
