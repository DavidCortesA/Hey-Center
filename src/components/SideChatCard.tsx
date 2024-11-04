import React, { useEffect, useState } from 'react'

const SideChatCard = ({data}:{data: any}) => {
  const [client, setClient] = useState<any>();
  const [clientInfo, setClientInfo] = useState<any>(null);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const getData = await fetch('https://sellia-files.s3.us-east-2.amazonaws.com/challenge/clients.json');
        const dataJson = await getData.json();
        setClient(dataJson);
      } catch(error){
        console.log(error);
      }
    }

    fetchData();
  },[]);

  useEffect(() => {
    if (data && client.length > 0) {
      // Encontrar el cliente correspondiente al client ID en `data`
      const foundClient = client.find((item: any) => item.id === data.client);
      setClientInfo(foundClient);
    }
  }, [data, client]);

  return (
    <div className="w-full">
      {clientInfo && data.messages && data.messages.length > 0 ? (
        <div>
          <h2>Cliente: {clientInfo.name}</h2>
          <p>Email: {clientInfo.email}</p>
          <h3>Mensajes:</h3>
          <ul>
            {data.messages.map((message: any, index: number) => (
              <li key={index}>{message.content}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay mensajes del cliente.</p>
      )}
    </div> 
  );
}

export default SideChatCard