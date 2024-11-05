import React, { useEffect, useRef, useState } from 'react';
import { Textarea, Button, Input } from '@nextui-org/react';
import { DocumentTextIcon, InformationCircleIcon, XMarkIcon, FaceFrownIcon, FaceSmileIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const SideChat = ({ messages, clients, setClient, isEnd, setInfoClient }: { messages: any[], clients: any, setClient:any, isEnd?:boolean, setInfoClient:any }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [newMessage, setNewMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<Boolean>(false);
  const [file, setFile] = useState<File | null>(null); // Estado para el archivo adjunto

  const parseOptions = (text: string) => {
    const options = text.split('|').filter(option => option.startsWith('[') && option.endsWith(']'));
    return options.map(option => option.slice(1, -1));
  };

  const handleInputChange = (e: any) => {
    setNewMessage(e?.target?.value);
    setIsTyping(e?.target?.value?.length > 0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSendMessage = () => {
    if (file) {
      // Aquí se añade la lógica para manejar el envío de archivos
      console.log('Archivo adjunto:', file);
    }
    setNewMessage('');
    setFile(null);
    setIsTyping(false);
  };

  const handleChat = () => {
    setClient([]);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleClientInfo = () => {
    setInfoClient(true)
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className='flex flex-row justify-between items-center border-b-2 px-5 py-3'>
        <h2 className="text-lg font-semibold flex flex-row items-center">
          {clients?.name} 
          <InformationCircleIcon className='w-5 h-5 ml-2 text-gray-500 cursor-pointer' onClick={() => handleClientInfo()}/> 
          <span className='text-sm text-gray-500 px-4 py-2 animate-pulse'>{isTyping && 'escribiendo...'}</span>
        </h2>
        <button type='button' className='bg-red-400 hover:bg-red-500 rounded-full w-7 h-7 flex justify-center items-center p-1 text-white'>
          <XMarkIcon className='w-full h-full' onClick={() => handleChat()} />
        </button>
      </div>

      <div className="flex flex-col h-full space-y-2 overflow-y-auto p-5">
        {messages?.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-md ${msg.message.typeUser === "Client" ? "bg-blue-100 self-start" : "bg-gray-100 self-end"}`}
          >
            {msg.message.type === "text" ? (
              msg.message.text.includes('|') ? (
                <>
                  <p>{msg.message.text.split('|')[0]}</p>
                  <div className="flex space-x-2 mt-2">
                    {parseOptions(msg.message.text).map((option, i) => (
                      <button
                        key={i}
                        className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                        onClick={() => console.log(`Opción seleccionada: ${option}`)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <p>{msg.message.text}</p>
              )
            ) : msg.message.type === "video" ? (
              <div className="flex items-center space-x-2 w-60">
                <video
                  src={msg.message.multimedia.file}
                  controls
                  className="w-full rounded-md"
                  poster={msg.message.multimedia.thumbnail}
                />
              </div>
            ) : msg.message.type === "document" ? (
              <div className="flex items-center space-x-2">
                <DocumentTextIcon className="h-5 w-5 text-red-500" />
                <Link
                  href={msg.message.multimedia.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Ver archivo PDF
                </Link>
              </div>
            ) : null}
            <span className="text-xs text-gray-500">
              {new Date(msg.message.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
        <div ref={scrollRef} />
        {isEnd && (
          <h1 className="text-gray-500 text-center text-lg mt-4 font-italic">Esta conversación a finalizado</h1>
        )}
      </div>

      {messages?.length > 0 && !isEnd && (
        <div className="p-4 border-t border-gray-200 w-full flex flex-row justify-between items-center">
          <Textarea
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Escribe un mensaje..."
            rows={3}
            className="w-5/6"
            style={{ resize: "none" }}
          />
          <div className="flex space-x-2 items-center mt-2 w-1/6">
            <label className="cursor-pointer">
              <input type="file" className="hidden" onChange={handleFileChange} />
              <PaperClipIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </label>
            <FaceSmileIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            <Button onClick={handleSendMessage} color="primary" className="w-full">
              Enviar
            </Button>
          </div>
          {file && <p className="mt-2 text-sm text-gray-500">Archivo seleccionado: {file.name}</p>}
        </div>
      )}
    </div>
  );
};

export default SideChat;