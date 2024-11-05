import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';
import { SelliaLogo } from '@/contants/assets';

const Sidebar = ({ setTab, tab }: { setTab: (tab: string) => void, tab: string }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen w-16 bg-gray-800 text-white py-5">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-8">
        {/* Empresa/Home Icon */}
        <div className='w-6 h-6'>
          <SelliaLogo />
        </div>

        {/* Chat Icon */}
        <Tooltip content="Chat" placement="right">
          <button className={`p-2 hover:bg-gray-700 rounded-md ${tab === 'chats' ? 'bg-white hover:bg-gray-100' : ''}`} onClick={() => setTab('chats')}> 
            <ChatBubbleLeftIcon className={tab === 'chats' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>

        {/* Historial Icon */}
        <Tooltip content="Historial" placement="right">
          <button className={`p-2 hover:bg-gray-700 rounded-md ${tab === 'historial' ? 'bg-white hover:bg-gray-100' : ''}`} onClick={() => setTab('historial')}>
            <ClockIcon className={tab === 'historial' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-8">
        {/* Perfil Icon */}
        <Tooltip content="Perfil" placement="right">
          <button className="p-2 hover:bg-gray-700 rounded-md">
            <UserIcon className={tab === 'configuracion' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>

        {/* Configuración Icon */}
        <Tooltip content="Configuración" placement="right">
          <button className={`p-2 hover:bg-gray-700 rounded-md ${tab === 'configuracion' ? 'bg-white hover:bg-gray-100' : ''}`} onClick={() => setTab('configuracion')}>
            <Cog6ToothIcon className={tab === 'configuracion' ? 'w-6 h-6 text-gray-400' : 'w-6 h-6'} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
