import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Canvas from './canvas';
import Content from './content';
import { data } from '../data';

function Banner() {
  const banner = useRef();

  const [activeData, setActiveData] = useState(data[0]);

  const handleSwatchClick = (item) => {
    if (activeData.id !== item.id) setActiveData(item);
  };

  useEffect(() => {
    gsap.to(banner.current, {
      background: activeData.background,
      ease: 'power3.inOut',
      duration: 0.8,
    });

    return () => {};
  }, [activeData]);

  return (
    <div ref={banner} className="w-screen h-screen relative">
      <div className="absolute my-2 ml-6 text-left text-2xl font-bold tracking-widest md:ml-28 ">
        MISFIT.
      </div>
      <div className="w-full h-full flex justify-between items-center flex-col lg:flex-row-reverse">
        <Canvas
          activeData={activeData}
          swatchData={data}
          handleSwatchClick={handleSwatchClick}
        />
        <Content activeData={activeData} />
      </div>
    </div>
  );
}

export default Banner;
