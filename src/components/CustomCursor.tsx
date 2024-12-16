import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed w-4 h-4 bg-black dark:bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="fixed w-8 h-8 border border-black dark:border-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out'
        }}
      />
    </>
  );
};

export default CustomCursor;