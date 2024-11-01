import React from 'react'

const BodyContent = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-white w-full h-full border border-salte-400 rounded flex'>
      {children}
    </div>
  )
}

export default BodyContent