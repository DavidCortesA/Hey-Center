import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';
import { SelliaLogo } from '@/contants/assets';

const Sidebar = ({ setTab, tab }: { setTab: (tab: string) => void; tab: string }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-between h-screen w-16 bg-gray-800 text-white py-5 px-2">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-8">
        <div className="w-6 h-6">
          <SelliaLogo />
        </div>
        <Tooltip content="Chat" placement="right">
          <button
            className={`p-2 rounded-md ${tab === 'chats' ? 'bg-white hover:bg-gray-100' : 'hover:bg-gray-700'}`}
            onClick={() => setTab('chats')}
          >
            <ChatBubbleLeftIcon className={tab === 'chats' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>
        <Tooltip content="Historial" placement="right">
          <button
            className={`p-2 rounded-md ${tab === 'historial' ? 'bg-white hover:bg-gray-100' : 'hover:bg-gray-700'}`}
            onClick={() => setTab('historial')}
          >
            <ClockIcon className={tab === 'historial' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>
      </div>
      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-8">
        <Tooltip content="Perfil" placement="right">
          <button
            className={`p-2 rounded-md ${tab === 'perfil' ? 'bg-white hover:bg-gray-100' : 'hover:bg-gray-700'}`}
            onClick={() => setTab('perfil')}
          >
            <UserIcon className={tab === 'perfil' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>
        <Tooltip content="Configuración" placement="right">
          <button
            className={`p-2 rounded-md ${tab === 'configuracion' ? 'bg-white hover:bg-gray-100' : 'hover:bg-gray-700'}`}
            onClick={() => setTab('configuracion')}
          >
            <Cog6ToothIcon className={tab === 'configuracion' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;