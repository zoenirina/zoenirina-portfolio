import React from 'react';

const ContentFrame = ({ label = 'Image', children }) => {
  const positions = [
    "-top-1.5 -left-1.5",
    "-top-1.5 -right-1.5",
    "-bottom-1.5 -left-1.5",
    "-bottom-1.5 -right-1.5",
    // "top-1/2 -left-1.5 -translate-y-1/2",
    // "top-1/2 -right-1.5 -translate-y-1/2",
    // "-top-1.5 left-1/2 -translate-x-1/2",
    // "-bottom-1.5 left-1/2 -translate-x-1/2",
  ];

  return (
    <div className="relative inline-block border-2 border-purple-500 p-2">
      <span className="absolute -top-3 left-2 px-2 py-0.5 bg-purple-500 text-white text-xs">
        {label}
      </span>

      {positions.map((pos, index) => (
        <div
          key={index}
          className={`absolute ${pos} w-3 h-3 bg-white border-1 border-purple-500`}
        />
      ))}

      <div className="max-w-full max-h-full">{children}</div>
    </div>
  );
};

export default ContentFrame;