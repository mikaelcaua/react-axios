import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//páginas
import Home from './routes/Home/Home.tsx'
import NewPost from './routes/NewPost/NewPost.tsx'

const router = createBrowserRouter([{
  element:<App></App>,
  children:[
    {
      path:"/",
      element:<Home></Home>
    }
    ,
    {
      path:"/new",
      element:<NewPost></NewPost>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
