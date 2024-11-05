'use client'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import Home from '@/app/page';
import Historial from '../Historial';
import Configuracion from '../Configuracion';
import Profile from '../Profile';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [tab, setTab] = useState<string>('chats');

  const renderContent = () => {
    switch (tab) {
      case 'chats':
        return <Home />;
      case 'historial':
        return <Historial />;
      case 'configuracion':
        return <Configuracion />;
      case 'perfil':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-slate-100">
      <Sidebar setTab={setTab} tab={tab} />
      <div className="flex-grow">{renderContent()}</div>
      <BottomBar setTab={setTab} tab={tab} />
    </div>
  );
};

export default Layout;
