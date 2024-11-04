'use client'
import React,{ useEffect, useState } from "react";
import BodyContent from "@/components/common/BodyContent";
import SideChat from "@/components/SideChat";
import SideChatCard from "@/components/SideChatCard";

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const getData = await fetch('https://sellia-files.s3.us-east-2.amazonaws.com/challenge/629e39e8b2d31319081e0650.json')
        const dataJson = await getData.json();
        setData(dataJson);
      } catch(error){
        console.log(error);
      }
    }
    
    fetchData();
  },[])

  console.log(data)

  return (
    <main className="w-full h-full flex flex-row flex-nowrap p-5">
      <BodyContent>
        <SideChatCard data={data}/>
        <SideChat/>
      </BodyContent>
    </main>
  );
}
