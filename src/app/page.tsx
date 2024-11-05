'use client'
import React,{ useEffect, useState } from "react";
import BodyContent from "@/components/common/BodyContent";
import SideChat from "@/components/SideChat";
import ChatCard from "@/components/common/chatCard";
import { MessageEmpty } from "@/contants/assets";
import { Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  const [client, setClient] = useState<any>();
  const [message, setMessage] = useState<any[]>([]);
  const [listClient, setListClient] = useState<any[]>([]);
  const [filteredClients, setFilteredClients] = useState<any[]>([]);
  const [infoClient, setInfoClient] = useState<boolean>(false);

  useEffect(()=>{
    const fetchData = async () => {
      if(client) {
        try{
          const data = await fetch(`https://sellia-files.s3.us-east-2.amazonaws.com/challenge/${client._id}.json`);
          const dataJson = await data.json();
          setMessage(dataJson);
        } catch (error) {
          setMessage([])
          console.error(error);
        }
      }
    }

    fetchData();

  },[client])

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const data = await fetch('https://sellia-files.s3.us-east-2.amazonaws.com/challenge/clients.json');
        const dataJson = await data.json();
        setListClient(dataJson);
        setFilteredClients(dataJson);
      } catch (error) {
        setListClient([])
        setFilteredClients([])
        console.log(error);
      }
    }

    fetchData()
  },[])


  const handleClient = (selectedClient: any) => {
    setClient(selectedClient);
  };

  const handleSearchClient = (value: string) => {
    // Filtrar clientes cuyo nombre contenga el texto de búsqueda
    const filtered = listClient.filter((client: any) =>
      client.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredClients(filtered); // Actualizar el estado de los clientes filtrados
  };

  return (
    <main className="w-full h-screen p-5 flex flex-row">
      <BodyContent>
        <div className="w-1/5">
          <div className="p-5 border-b-2">
            <Input type="text" placeholder="Buscar cliente" onChange={e => handleSearchClient(e.target.value)} startContent={<MagnifyingGlassIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 w-5"/> }/>
          </div>
          {filteredClients.length > 0 ? (
            filteredClients.map((item, index) => (
              <div onClick={() => handleClient(item)} className="cursor-pointer" key={index}>
                <ChatCard clients={item} isSelected={client?._id === item._id} />
              </div>
            ))
          ) : (
            <div className="p-5 text-gray-500 text-center">No se encontraron resultados</div>
          )}
        </div>
        <div className="w-4/5 border-l-2 transition ease-in-out delay-150">
          {message.length > 0 ? (
            <SideChat messages={message} clients={client} setClient={setClient} setInfoClient={setInfoClient} />
          ):(
            <div className="h-full flex flex-col items-center justify-evenly">
              <MessageEmpty />
              <h3 className="text-lg font-semibold text-gray-500 mt-2">No hay mensajes para mostrar</h3>
            </div>
          )}
        </div>
        {infoClient && (
          <div className="w-1/5 border-l-2 transition ease-in-out delay-150">
            <UserInfo client={client} setInfoClient={setInfoClient} />
          </div>
        )}
      </BodyContent>
    </main>
  );
}
