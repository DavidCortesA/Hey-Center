'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Home from '@/app/page';
import Historial from '../Historial';

const Layout = ({children}:{children:React.ReactNode}) => {
  const [tab, setTab] = useState('home');

  const renderContent = () => {
    switch (tab) {
      case 'home':
        return <Home />;
      case 'historial':
        return <Historial />;
      // Agrega más casos para otras pestañas si es necesario
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-row flex-nowrap w-full h-full bg-slate-100">
      <Sidebar setTab={setTab} />
      <div className="flex-grow">{renderContent()}</div>
    </div>
  )
}

export default Layout