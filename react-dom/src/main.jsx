import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente,{action as NuevosCliente} from './pages/NuevoCliente'
import Index,{loader as ClientesLoader} from './pages/Index'
const router = createBrowserRouter([{
 
  path:'/',
  element:<Layout></Layout>,
  children:[
    {
      index:true,
      element:<Index></Index>,
      loader:ClientesLoader
    },
    {
    path:'/clientes/nuevos',
    element:<NuevoCliente></NuevoCliente>,
    action:NuevosCliente
  }]
},
{
  path:'/nosotros',
  element:<h1>Nosotros</h1>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
