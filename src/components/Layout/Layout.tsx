import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-row flex-nowrap w-full h-full bg-slate-100">
      <Sidebar />
      <div className="w-4/5">
        {children}
      </div>
    </div>
  )
}

export default Layout