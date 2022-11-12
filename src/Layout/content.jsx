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
    <div className="select-none w-1/2 h-full flex justify-center items-center">
      <div className=" flex justify-start flex-col items-start mx-20 ">
        <h1 className="content text-left text-8xl font-bold mb-2">
          Minimalistic
        </h1>
        <h6 className="content text-4xl font-regular mb-8">Style Furniture</h6>
        <p className="content w-96 text-base font-medium text-left mb-16">
          Choose from a wide range of well-crafted premium quality wooden
          furniture online.
        </p>
        <button className="cursor-pointer button rounded-2xl outline-none px-14 py-4  font-medium text-white bg-[#4A6E6A]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Content;
