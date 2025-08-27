import React from 'react'

const SeparatorLine = () => {
  return (
     <div className="w-80 relative flex flex-col items-center justify-center my-6 mx-auto">
    <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"></div>
    <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"></div>
    <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
    <div className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2"></div>
    <div
      className="
        absolute inset-0 w-full h-full
        bg-white dark:bg-[#0c0211]
        [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]
      "
    ></div>
  </div>
  )
}

export default SeparatorLine