import { Skeleton, Tooltip } from '@nextui-org/react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ChatCard = ({ clients, isSelected }: { clients: any; isSelected: boolean }) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      if(clients) {
        try{
          const data = await fetch(`https://sellia-files.s3.us-east-2.amazonaws.com/challenge/${clients._id}.json`);
          const dataJson = await data.json();
          setMessages(dataJson);
        } catch (error) {
          setMessages([])
          console.error(error);
        }
      }
    }

    fetchData();

  },[clients])

  // Función para calcular el tiempo transcurrido desde la última actualización
  const timeAgo = (timestamp: number) => {
    const date = new Date(timestamp); // Convertir el timestamp a Date
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = [
      { label: 'año', seconds: 31536000 },
      { label: 'mes', seconds: 2592000 },
      { label: 'día', seconds: 86400 },
      { label: 'hora', seconds: 3600 },
      { label: 'minuto', seconds: 60 },
      { label: 'segundo', seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `hace ${count} ${interval.label}${count !== 1 ? 's' : ''}`;
      }
    }
    return 'justo ahora';
  };

  // Obtener la fecha
  const date = new Date(Number(clients?.updatedAt));

  // Obtener el último mensaje si existe
  const lastMessage = () => {
    if(messages?.[messages.length - 1]?.message.type === 'text'){
      const reduceText = messages?.[messages.length - 1]?.message.text
      return `${reduceText.substr(0,20)}...`;
    } else if(messages?.[messages.length - 1]?.message.type === 'video') {
      return 'Archivo de video'
    } else if(messages?.[messages.length - 1]?.message.type === 'document') {
      return 'Archivo de documento'
    } else {
      return 'Sin mensajes'
    }
  }

  return (clients.length > 0 ? (
    <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>  
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
  ):(
    <div
      className={`flex flex-row py-4 h-28 px-2 justify-center items-start border-b-2 gap-3 ${
        isSelected ? 'bg-blue-100' : ''
      }`}
    >
      <div className="w-1/6 flex justify-center items-start rounded-full w-10">
        <Image
          src="/images/user.png"
          className="object-cover rounded-full"
          alt=""
          width={60}
          height={60}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="text-lg font-semibold">{clients?.name}</div>
        <div className="text-gray-500 text-sm truncate">{lastMessage()}</div>
        <Tooltip showArrow={true} content={date.toLocaleString()} placement="right">
          <span className="text-gray-500 text-right text-xs w-fit">{timeAgo(Number(clients?.updatedAt))}</span>
        </Tooltip>
      </div>
    </div>
  ))
}

export default ChatCard;