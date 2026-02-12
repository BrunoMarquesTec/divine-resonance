import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col cosmic-bg text-white overflow-hidden">
      
      {/* Top Bar Header */}
      <header className="relative z-20 w-full bg-black/80 backdrop-blur-md border-b border-yellow-500/20 py-4 px-4 text-center shadow-lg">
       
        <h1 className="text-[#FFD700] font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          The Hidden Science Behind Manifestation
        </h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative z-10 p-4 pb-24">
        
        {/* Decorative elements - Subtle glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Video Player Container */}
        <div className="relative z-20 w-full max-w-[400px] transform transition-all duration-700 hover:scale-[1.01]">
          {/* Subtle gold glow behind video */}
          <div className="absolute -inset-1 bg-gradient-to-b from-yellow-600/20 to-transparent blur-lg opacity-50" />
          
          <VideoPlayer />
          
          {/* Caption below video (implied from image style, though usually inside video) */}
          <div className="mt-4 text-center">
             <p className="font-handwriting text-2xl text-white drop-shadow-md opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
               the beginning...
             </p>
          </div>
        </div>

      </main>

      {/* Footer Marquee */}
      <Marquee />

    </div>
  );
};

export default App;