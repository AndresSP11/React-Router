import React from 'react'
import { Form, Navigate, redirect, useNavigate } from 'react-router-dom'
import { eliminarCliente } from '../data/clientes';


export async function action({params}){
  eliminarCliente(params.clientesId)
  return redirect('/')
}

const Cliente = ({cliente}) => {
    const navigate=useNavigate();
    const {nombre,telefono,email,empresa,id}=cliente
  return (
    <tr className=' border-b'>
        <td className='p-2'><p className=' font-bold text-2xl text-gray-500 '>{nombre}</p>
        <p>{empresa}</p></td>
        <td>Telefono: {telefono}</td>
        <td className='flex justify-between mt-5'><p>Email: <span>{email}</span></p>
        <div className=' gap-2'>
        <button onClick={()=>navigate(`/clientes/${id}/editar`)} 
        className=' border bg-indigo-500 rounded px-5 py-1  hover:bg-indigo-700 font-bold uppercase text-white mr-3'>
          Editar</button>
        <Form method='post'
        action={`/clientes/${id}/eliminar`}>
        <button 
        type='submit'
        className=' border bg-red-400 rounded px-5 py-1 hover:bg-red-600 font-bold uppercase text-white mr-3'>
          Eliminar </button>
        </Form>
        </div>
        
        </td>

    </tr>
  )
}

export default Cliente
