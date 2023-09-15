import React from 'react'

function Error({children}) {
  return (
    <div className='w-full bg-red-700 text-center uppercase text-xl text-white py-2 font-bold mb-3 rounded-lg'>
      {children}
    </div>
  )
}

export default Error
