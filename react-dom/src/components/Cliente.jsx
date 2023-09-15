import React from 'react'

const Cliente = ({cliente}) => {
    const {nombre,telefono,email,empresa}=cliente
  return (
    <tr className=' border-b'>
        <td className='p-2'><p className=' font-bold text-2xl text-gray-500 '>{nombre}</p>
        <p>{empresa}</p></td>
        <td>Telefono: {telefono}</td>
        <td className='flex justify-between mt-5'><p>Email: <span>{email}</span></p>
        <div className=' gap-2'>
        <button className=' border bg-indigo-500 rounded px-5 py-1  hover:bg-indigo-700 font-bold uppercase text-white mr-3'>Editar</button>
        <button className=' border bg-red-400 rounded px-5 py-1 hover:bg-red-600 font-bold uppercase text-white mr-3'>Eliminar </button>
        </div>
        </td>

    </tr>
  )
}

export default Cliente
