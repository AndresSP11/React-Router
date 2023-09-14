import React from 'react'

const Cliente = ({cliente}) => {
    const {nombre,telefono,email,empresa}=cliente
  return (
    <tr className=' border-b'>
        <td className='p-2'><p>{nombre}</p>
        <p>{empresa}</p></td>
        <td>{telefono}</td>
        <td>{email}</td>
    </tr>
  )
}

export default Cliente
