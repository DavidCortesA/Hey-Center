'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Home from '@/app/page';
import Historial from '../Historial';
import Configuracion from '../Configuracion';

const Layout = ({children}:{children:React.ReactNode}) => {
  const [tab, setTab] = useState<string>('chats');

  const renderContent = () => {
    switch (tab) {
      case 'chats':
        return <Home />;
      case 'historial':
        return <Historial />;
      case 'configuracion':
        return <Configuracion />
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-row flex-nowrap w-full h-full bg-slate-100">
      <Sidebar setTab={setTab} tab={tab}/>
      <div className="flex-grow">{renderContent()}</div>
    </div>
  )
}

export default Layout