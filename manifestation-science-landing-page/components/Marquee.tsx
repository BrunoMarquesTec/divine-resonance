import React from 'react';

const Marquee: React.FC = () => {
  const text = "- ABUNDANCE - ABUNDANCE - ABUNDANCE - ABUNDANCE - ABUNDANCE - ABUNDANCE - ABUNDANCE ";
  
  return (
    <div className="w-full bg-black/80 backdrop-blur-sm border-t border-yellow-500/30 overflow-hidden py-2 absolute bottom-0 z-20">
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-[#FFD700] font-bold text-lg md:text-xl tracking-widest mx-4">
            {text.repeat(10)}
          </span>
        </div>
      </div>
      <div className="text-center w-full mt-1">
        <span className="text-[10px] text-gray-400 tracking-widest">ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Marquee;