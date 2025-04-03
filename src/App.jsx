import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './Components/Home'
import Card from './Components/Card'

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
            path: '/card',
            element: <Card />,
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
