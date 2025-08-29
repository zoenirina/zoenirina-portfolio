import React, {useState} from 'react';
import CarouselModal from '../CarouselModal';

const MarketCard = ({
    id,
    title,
    description,
    tags = [],
    date,
    readTime,
    reads,
    image,
    stickyValue=20
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className={`sticky flex flex-col lg:flex-row min-h-[600px] rounded-sm border border-gray-300 dark:border-fuchsia-900/20 overflow-hidden`}
    style={{ top: `${stickyValue}rem` }}
    >
      <div className="relative  flex-1  p-8 flex flex-col items-center justify-center text-white lg:w-1/2 object-cover bg-cover "
      onClick={() => {
        if (image && image.length > 0) {
          // Open modal with the first image
          setIsOpenModal(image[0]);
        }
      }}
      style={
        image && image.length > 0
            ? {
                    backgroundImage: `linear-gradient(to top, #0f0d1a7a 0%, #0f0d1a7a 90%, transparent 125%), url('${image[0]}')`,
                }
            : undefined
        }
      >
        {/* Grid dots */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0 opacity-80 mx-[28px] my-12">
          <div className="flex justify-start items-start p-4">
            <div className="w-3 h-3 bg-white outline-4 outline-white/40 rounded-full"></div>
          </div>
          <div className="flex justify-end items-start p-4">
            <div className="w-3 h-3 bg-white outline-4 outline-white/40 rounded-full"></div>
          </div>
          <div className="flex justify-start items-end p-4">
            <div className="w-3 h-3 bg-white outline-4 outline-white/40 rounded-full"></div>
          </div>
          <div className="flex justify-end items-end p-4">
            <div className="w-3 h-3 bg-white outline-4 outline-white/40 rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-[12%] left-0 w-full h-0.5 bg-white opacity-30 z-0" style={{ borderTop: '2px dashed currentColor', transform: 'translateY(-50%)' }}></div>
        <div className="absolute bottom-[12%] left-0 w-full h-0.5 bg-white opacity-30 z-0" style={{ borderTop: '2px dashed currentColor', transform: 'translateY(-50%)' }}></div>

        {/* Vertical Dashed Lines */}
        {/* <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white opacity-30 z-0" style={{ borderLeft: '2px dashed currentColor', transform: 'translateX(-50%)' }}></div> */}
        <div className="absolute left-[8%] top-0 h-full w-0.5 bg-white opacity-30 z-0" style={{ borderLeft: '2px dashed currentColor', transform: 'translateX(-50%)' }}></div>
        <div className="absolute right-[8%] top-0 h-full w-0.5 bg-white opacity-30 z-0" style={{ borderLeft: '2px dashed currentColor', transform: 'translateX(-50%)' }}></div>
      </div>
      <div className="flex-1 bg-white/20 dark:bg-[#09090b]/90 backdrop-blur-sm p-8 lg:p-16 flex flex-col justify-center text-white lg:w-1/2">
<span 
  className="font-sans text-5xl font-bold absolute right-4 top-4 
             text-slate-700 dark:text-slate-300
             opacity-80"
  style={{
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  }}
>
  <span className="text-lg font-medium"></span>
  <span className="text-4xl font-bold ml-2">0{id}</span>
</span>

        <div className="absolute top-[12%] left-0 w-full h-0.5 bg-gray-300 dark:bg-white/10 opacity-30 z-0" style={{  transform: 'translateY(-50%)' }}></div>
  
 
                    <div className="mt-auto">
                        <div className="mb-4 hidden gap-2 md:flex md:flex-wrap">
                            {tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="inline-flex rounded-full border px-2 py-px text-center text-xs uppercase  text-purple-600
                                    dark:text-[#e7aaff]  border-purple-600
                                    dark:border-[#e7aaff] "
                                >
                                    <span>#{tag}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4 space-y-4 text-balance">
                            <h1 className="max-w-2xl text-4xl font-medium leading-[45px] tracking-tight md:text-5xl md:leading-[60px] text-zinc-900 dark:text-white">
                                {title}
                            </h1>
                            <p className="hidden max-w-3xl leading-8 md:block text-zinc-700 dark:text-slate-100">
                                {description}
                            </p>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-zinc-700 dark:text-slate-200">
                            <div className="flex items-center gap-1.5 text-xs">
                                <svg className="hidden h-5 w-5 md:block" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 4.75V8.25"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 4.75V8.25"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 10.75H16.25"></path>
                                </svg>
                                <p>{date}</p>
                            </div>
                            {/* <div className="flex items-center gap-1.5 text-xs">
                                <svg className="hidden h-5 w-5 text-slate-300 md:block" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.75 4.75H18.25M6.75 4.75H17.25V6C17.25 8.89949 14.8995 11.25 12 11.25C9.10051 11.25 6.75 8.8995 6.75 6V4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M9 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M5.75 19.25H18.25M6.75 19.25H17.25V17.5C17.25 14.6005 14.8995 12.25 12 12.25C9.10051 12.25 6.75 14.6005 6.75 17.5V19.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <p>{readTime}</p>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                                <svg className="hidden h-5 w-5 text-slate-300 md:block" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"></path>
                                    <circle cx="12" cy="12" r="2.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
                                </svg>
                                <span className="text-xs">{reads} reads</span>
                            </div> */}
                        </div>
                    </div>
               
      </div>
      <CarouselModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} images={image} />
    </div>
  );
};

export default MarketCard;