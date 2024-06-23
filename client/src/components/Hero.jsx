import React from 'react';
import Content from './Content';
import Navbar from './Navbar';
import Music from './Music';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/blackhole.webm"
        type="video/webm"
        autoPlay
        loop
        muted
      />
      <Navbar />
      <Content />
      <Music />
    </div>
  );
};

export default Hero;
