import React from 'react';
import { ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';

const BottomBar = ({ setTab, tab }: { setTab: (tab: string) => void; tab: string }) => {
  return (
    <div className="flex lg:hidden justify-around items-center bg-gray-800 text-white py-2 fixed bottom-0 left-0 right-0 py-3">
      <button onClick={() => setTab('chats')} className={tab === 'chats' ? 'text-blue-500' : 'text-white'}>
        <ChatBubbleLeftIcon className="w-6 h-6" />
      </button>
      <button onClick={() => setTab('historial')} className={tab === 'historial' ? 'text-blue-500' : 'text-white'}>
        <ClockIcon className="w-6 h-6" />
      </button>
      <button onClick={() => setTab('perfil')} className={tab === 'perfil' ? 'text-blue-500' : 'text-white'}>
        <UserIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => setTab('configuracion')}
        className={tab === 'configuracion' ? 'text-blue-500' : 'text-white'}
      >
        <Cog6ToothIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BottomBar;
