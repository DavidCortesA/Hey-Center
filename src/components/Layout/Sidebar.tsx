import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon, HomeModernIcon, UserIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ setTab }: { setTab: (tab: string) => void }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen w-16 bg-gray-800 text-white py-5">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-8">
        {/* Empresa/Home Icon */}
        <Tooltip content="Empresa" placement="right">
          <button className="p-2 hover:bg-gray-700 rounded-md">
            <HomeModernIcon className="w-6 h-6" />
          </button>
        </Tooltip>

        {/* Chat Icon */}
        <Tooltip content="Chat" placement="right">
          <button className="p-2 hover:bg-gray-700 rounded-md" onClick={() => setTab('chats')}> 
            <ChatBubbleLeftIcon className="w-6 h-6" />
          </button>
        </Tooltip>

        {/* Historial Icon */}
        <Tooltip content="Historial" placement="right">
          <button className="p-2 hover:bg-gray-700 rounded-md" onClick={() => setTab('historial')}>
            <ClockIcon className="w-6 h-6" />
          </button>
        </Tooltip>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-8">
        {/* Perfil Icon */}
        <Tooltip content="Perfil" placement="right">
          <button className="p-2 hover:bg-gray-700 rounded-md">
            <UserIcon className="w-6 h-6" />
          </button>
        </Tooltip>

        {/* Configuración Icon */}
        <Tooltip content="Configuración" placement="right">
          <button className="p-2 hover:bg-gray-700 rounded-md">
            <Cog6ToothIcon className="w-6 h-6" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
