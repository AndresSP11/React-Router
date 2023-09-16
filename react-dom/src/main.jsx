import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente,{action as NuevosCliente} from './pages/NuevoCliente'
import Index,{loader as ClientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente,{loader as editarClienteLoader, action as anadirAction} from './pages/EditarCliente'
import {action as eliminarClienteAction} from './components/Cliente'
const router = createBrowserRouter([{
 
  path:'/',
  element:<Layout></Layout>,
  children:[
    {
      index:true,
      element:<Index></Index>,
      loader:ClientesLoader,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
    path:'/clientes/nuevos',
    element:<NuevoCliente></NuevoCliente>,
    action:NuevosCliente
  },
{
  path:'/clientes/:clientesId/editar',
  element: <EditarCliente></EditarCliente>,
  loader: editarClienteLoader,
  action: anadirAction,
  errorElement:<ErrorPage></ErrorPage>
  
},{
  path: '/clientes/:clientesId/eliminar',
  action: eliminarClienteAction
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
