import React from 'react'

const WorkCard = ({
    title,
    description,
    tags = [],
    date,
    readTime,
    reads,
    image,
}) => {
    return (
        <div className="grid grid-cols-2 justify-center">
            <div className="relative h-[600px]">
               <span className="absolute top-6 z-10 h-px w-full bg-zinc-500/75 dark:bg-white/30 mix-blend-screen md:top-12"></span>
                <span className="absolute bottom-6 z-10 h-px w-full bg-zinc-500/75 dark:bg-white/30 mix-blend-screen md:bottom-12"></span>
                <span className="absolute left-6 z-10 h-full w-px bg-zinc-500/75 dark:bg-white/30 mix-blend-screen md:left-12"></span>
                <span className="absolute right-6 z-10 h-full w-px bg-zinc-500/75 dark:bg-white/30 mix-blend-screen md:right-12"></span>
                <span className="absolute left-[44.5px] top-12 z-20 hidden h-px w-2 bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute left-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute right-[44.5px] top-12 z-20 hidden h-px w-2 bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute bottom-12 left-[44.5px] z-20 hidden h-px w-2 bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute bottom-[44.5px] left-[48px] z-20 hidden h-2 w-px bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute bottom-12 right-[44.5px] z-20 hidden h-px w-2 bg-white dark:bg-zinc-500/75 md:block"></span>
                <span className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-white dark:bg-zinc-500/75 md:block"></span>
               <div
                    className="drama-shadow flex h-[350px] w-full flex-col justify-end rounded-l-lg bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:p-16 backdrop-blur-sm bg-white/5 border border-zinc-200 dark:backdrop-blur-sm dark:bg-gradient-to-br dark:from-[#251c3b]/20 dark:to-[#130123]/40 dark:border-[#27272a]"
                >
                    <div className="mt-auto">
                        <div className="mb-4 hidden gap-2 md:flex md:flex-wrap">
                            {tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="inline-flex rounded-full border px-2 py-px text-center text-xs uppercase border-zinc-800 text-zinc-800 dark:border-white dark:text-white"
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
                            <div className="flex items-center gap-1.5 text-xs">
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
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                 <div
                    className={`drama-shadow flex h-[350px] w-full flex-col justify-end rounded-r-lg bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:p-16 dark:backdrop-blur-sm dark:bg-gradient-to-br dark:from-[#251c3b]/20 dark:to-[#010000]/20 dark:border-[#27272a] backdrop-blur-sm bg-white/5
                           bg-white border border-zinc-200
                    `}
                    style={
                        image
                            ? {
                                    backgroundImage: `linear-gradient(to top, #0f0d1a7a 0%, #0f0d1a7a 90%, transparent 125%), url('${image}')`,
                                }
                            : undefined
                    }
                ></div>
                </div>)
}

export default WorkCard
