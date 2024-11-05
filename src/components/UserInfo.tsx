import { QueueListIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const UserInfo = ({client, setInfoClient}:{client:any, setInfoClient:any}) => {

  const handleInfoChat = () => {
    setInfoClient(false)
  }

  const date = new Date(Number(client?.updatedAt));

  return (
    <div className='w-full flex flex-col p-3 bg-slate-50'>
      <div className='flex flex-row justify-end gap-2'>
        <XMarkIcon  className='w-6 h-6 cursor-pointer' onClick={handleInfoChat}/>
      </div>
      <div className='w-full flex flex-col gap-2 items-center justify-center rounded-full'>
        <Image
          src='/images/user.png'
          alt='User Icon'
          height={100}
          width={100}
          className='rounded-full w-52 h-52'
        />
      </div>
      <div className='flex flex-col gap-1 items-center justify-center border-b-2 pb-2'>
        <h2 className='text-lg font-semibold'>{client?.name}</h2>
        <span className='text-sm text-gray-500'>
          Creado: {date.toLocaleString()}
        </span>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center pt-2'>
        <h4 className='text-sm text-gray-500'>Marca el status de la conversación</h4>
        <div className='flex flex-row gap-2 items-center justify-evenly w-full mt-2'>
          <div className='w-10 h-10 bg-slate-200 rounded-full p-2'>
            <Tooltip content="Terminada" placement="top" showArrow={true}>
              <StarIcon className='w-full h-full text-gray-500' />
            </Tooltip>
          </div>
          <div className='w-10 h-10 bg-slate-200 rounded-full p-2'>
            <Tooltip content="Cerrarla" placement="top" showArrow={true}>
              <XMarkIcon className='w-full h-full text-gray-500' />
            </Tooltip>
          </div>
          <div className='w-10 h-10 bg-slate-200 rounded-full p-2'>
            <Tooltip content="Transferir" placement="top" showArrow={true}>
              <QueueListIcon className='w-full h-full text-gray-500' />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo