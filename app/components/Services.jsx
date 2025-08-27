// pages/index.js
"use client"
import Head from 'next/head';
import ContentFrame from './ui/ContentFrame';
import { servicesData } from '../data/servicesData';
import ServiceCard from './ui/ServiceCard';
import SeparatorLine from './ui/SeparatorLine';

export default function Service() {
  return (
    <div className="min-h-screen relative z-10   text-white font-sans overflow-hidden mx-10 rounded-2xl"  >
      <Head>
        <title>Ciao Drinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesSection />
      
    </div>
  );
}

 function ServicesSection() {
  return (
    <div className=" min-h-screen">

 <div
  className="mx-auto w-full max-w-lg relative flex flex-col items-center justify-center text-center overflow-visible"
>
  <h3 className="text-5xl leading-normal font-bold mb-3 text-gray-900 dark:text-white">
    Get Started Now
  </h3>

<SeparatorLine />

  <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
    Be part of millions of people around the world using modern User Interfaces.
  </p>
</div>

    <div className="md:mt-8 mt-6 grid grid-cols-1  gap-2 md:gap-4 md:grid-col-2 lg:grid-cols-3 p-0 md:p-8 space-y-8 lg:space-y-0 lg:space-x-8">

{servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              slogan={service.slogan}
              title={service.title}
              description={service.description}
            />
          ))}
      
    </div>
 
</div>
    
  );
}





 const IconPack = () => {
  return (
       <svg width="208" height="328" viewBox="0 0 208 328" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M122.5 188C122.5 187.172 121.828 186.5 121 186.5C120.172 186.5 119.5 187.172 119.5 188H122.5ZM121 188H119.5V233H121H122.5V188H121ZM145 257V258.5H208V257V255.5H145V257ZM121 233H119.5C119.5 247.083 130.917 258.5 145 258.5V257V255.5C132.574 255.5 122.5 245.426 122.5 233H121Z" fill="url(#paint0_linear_299_2175)"/>
<path d="M122.5 140C122.5 140.828 121.828 141.5 121 141.5C120.172 141.5 119.5 140.828 119.5 140H122.5ZM121 140H119.5V95H121H122.5V140H121ZM145 71V69.5H208V71V72.5H145V71ZM121 95H119.5C119.5 80.9167 130.917 69.5 145 69.5V71V72.5C132.574 72.5 122.5 82.5736 122.5 95H121Z" fill="url(#paint1_linear_299_2175)"/>
<path d="M2 162.5C1.17157 162.5 0.5 163.172 0.5 164C0.5 164.828 1.17157 165.5 2 165.5V162.5ZM2 164V165.5H97V164V162.5H2V164ZM121 188H119.5V302H121H122.5V188H121ZM145 326V327.5H208V326V324.5H145V326ZM121 302H119.5C119.5 316.083 130.917 327.5 145 327.5V326V324.5C132.574 324.5 122.5 314.426 122.5 302H121ZM97 164V165.5C109.426 165.5 119.5 175.574 119.5 188H121H122.5C122.5 173.917 111.083 162.5 97 162.5V164Z" fill="url(#paint2_linear_299_2175)"/>
<path d="M2 165.5C1.17157 165.5 0.5 164.828 0.5 164C0.5 163.172 1.17157 162.5 2 162.5V165.5ZM2 164V162.5H97V164V165.5H2V164ZM121 140H119.5V26H121H122.5V140H121ZM145 2V0.5H208V2V3.5H145V2ZM121 26H119.5C119.5 11.9167 130.917 0.5 145 0.5V2V3.5C132.574 3.5 122.5 13.5736 122.5 26H121ZM97 164V162.5C109.426 162.5 119.5 152.426 119.5 140H121H122.5C122.5 154.083 111.083 165.5 97 165.5V164Z" fill="url(#paint3_linear_299_2175)"/>
<defs>
<linearGradient id="paint0_linear_299_2175" x1="164.5" y1="188" x2="164.5" y2="257" gradientUnits="userSpaceOnUse">
<stop stopColor="#4D4D4D" stopOpacity="0.4"/>
<stop offset="1" stopColor="#B3B3B3"/>
</linearGradient>
<linearGradient id="paint1_linear_299_2175" x1="164.5" y1="140" x2="164.5" y2="71" gradientUnits="userSpaceOnUse">
<stop stopColor="#4D4D4D" stopOpacity="0"/>
<stop offset="1" stopColor="#B3B3B3" stopOpacity="0.85"/>
</linearGradient>
<linearGradient id="paint2_linear_299_2175" x1="105" y1="164" x2="105" y2="326" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0.8"/>
<stop offset="0.5" stopColor="#C5C5C5"/>
<stop offset="1" stopColor="#4D4D4D" stopOpacity="0.7"/>
</linearGradient>
<linearGradient id="paint3_linear_299_2175" x1="105" y1="164" x2="105" y2="2" gradientUnits="userSpaceOnUse">
<stop stopColor="#4D4D4D" stopOpacity="0.31"/>
<stop offset="0.5" stopColor="#898989"/>
<stop offset="1" stopColor="#B3B3B3" stopOpacity="0.68"/>
</linearGradient>
</defs>
</svg>
  )
}
