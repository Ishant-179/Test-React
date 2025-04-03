import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './Components/Home'

import AddNotes from './Components/AddNotes'

const Layout = () => {
  return (
    <>
    <Navbar />
    <div>
      <Outlet />
    </div>
    </>
  )
 }

 const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
          },
          {
            path: '/addnotes',
            element: <AddNotes />,
            },
    
  ]
}
]
 )

function App() {
 

  return (
  <RouterProvider router={routes} />
  )
}

export default App
