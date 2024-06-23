import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Music = () => {
  const [audio] = useState(new Audio('/music.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.play();
    setIsPlaying(true);

    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center ml-4 lg:ml-10">
      <button onClick={togglePlay} className="text-white bg-purple-800 rounded-full p-3 focus:outline-none">
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
      <p className="text-white ml-3 font-semibold">Music</p>
    </div>
  );
};

export default Music;
