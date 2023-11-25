import React from 'react'

function Point({children}) {
  return (
    <div className='flex flex-row space-x-2 items-center justify-start'>
        <p className="rounded-full bg-black p-1 w-1 h-1">.</p>
        <p>{children}</p>
    </div>
  )
}

export default Point