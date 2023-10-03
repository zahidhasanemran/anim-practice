"use client";


import dynamic from "next/dynamic"
import Section1 from "./componentns/Section1"
import Section2 from "./componentns/Section2"
import Section4 from "./componentns/Section4"
import Section5 from "./componentns/Section5"
const Sectioin3 = dynamic(() => import('./componentns/Sectioin3'), {
  loading: () => <p>Loading...</p>,
})



export default function Home() {
 
 
  

  return (
    <main>
      <Section1 />
      <Section2 />
      {/* <Sectioin3 /> */}
      <Section4 />
      <Section5 />
      
    </main>
  );
}
