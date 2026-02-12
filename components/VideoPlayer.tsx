import React, { useEffect } from 'react';

const PLAYER_ELEMENT_ID = 'vid-698d460811e55d52a5beea0b';
const PLAYER_SCRIPT_SRC =
  'https://scripts.converteai.net/517652b2-07a7-4c0f-a4dc-714229b68810/players/698d460811e55d52a5beea0b/v4/player.js';

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    const scriptAlreadyLoaded = document.querySelector(
      `script[src="${PLAYER_SCRIPT_SRC}"]`,
    );
    if (scriptAlreadyLoaded) return;

    const script = document.createElement('script');
    script.src = PLAYER_SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative w-full max-w-xl overflow-hidden">
      {React.createElement('vturb-smartplayer', {
        id: PLAYER_ELEMENT_ID,
        style: {
          display: 'block',
          margin: '0 auto',
          width: '100%',
          maxWidth: '560px',
        },
      })}
    </div>
  );
};

export default VideoPlayer;
