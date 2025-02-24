"use client"
// components/ScrollVideos.js
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const VideoSection = ({ src, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id={id}
      className="h-screen flex justify-center items-center bg-black"
    >
      <img
        src={src}
        alt="Animation"
        className="w-full h-full object-cover"
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </section>
  );
};

const ScrollVideos = () => {
  return (
    <div>
     
      <VideoSection
        src="/assets/animation.gif"
        id="shopifypuls"
      />

     
      <VideoSection
        src="/assets/animation.gif"
        id="shopifypartners"
      />

     
      <VideoSection
        src="/assets/animation.gif"
        id="shopifyexperts"
      />
    </div>
  );
};

export default ScrollVideos;