import React, { useEffect } from 'react';
import gsap from 'gsap';

const Content = ({ activeData }) => {
  useEffect(() => {
    gsap.to('.button', {
      color: activeData.buttonColor.text,
      backgroundColor: activeData.buttonColor.background,
      ease: 'power3.inOut',
      duration: 1,
    });

    // we are going to use heading color for small text as well, you can change it if you want
    gsap.to('.content', {
      color: activeData.headingColor,
      ease: 'power3.inOut',
      duration: 0.8,
    });

    return () => {};
  }, [activeData]);

  return (
    <div className="select-none w-full h-2/5 flex justify-center items-center  lg:w-1/2 lg:h-full lg:justify-end ">
      <div className=" flex justify-start flex-col items-start ">
        <h1 className="content text-left text-5xl font-bold mb-1 md:text-[7vw] md:mb-2 ">
          Minimalistic
        </h1>
        <h6 className="content text-2xl font-regular mb-6 md:text-4xl">
          Style Furniture
        </h6>
        <p className="content  w-80 text-xs font-medium text-left mb-8  md:text-base md:mb-12">
          Choose from a wide range of well-crafted premium quality wooden
          furniture online.
        </p>
        <button className="cursor-pointer button rounded-2xl outline-none px-8 py-2  font-medium text-white bg-[#4A6E6A]  md:px-10 md:py-4  ">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Content;
