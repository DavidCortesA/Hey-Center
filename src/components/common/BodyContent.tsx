import React from 'react'

const BodyContent = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-white w-full h-full lg:border border-salte-400 border-none lg:rounded-lg rounded-none flex'>
      {children}
    </div>
  )
}

export default BodyContent