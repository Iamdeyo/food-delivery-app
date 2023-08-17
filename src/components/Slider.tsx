'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    title: 'always fresh & always cripsy & always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title: 'We deliver your order wherever you are in LA',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'The best pizza to share with your family',
    image: '/slide3.jpg',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-lime-100">
      {/* TEXT CONTAINER */}
      <div className="w-full flex flex-col items-center justify-center gap-8 font-bold flex-1">
        <h1 className="text-green-500 text-center p-4 md:p-10 text-5xl uppercase md:text-6xl lg:text-7xl ">
          {data[currentSlide].title}
        </h1>
        <button className="bg-green-500 text-white hover:bg-green-400 py-4 px-8">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full relative  flex-1">
        <Image
          src={data[currentSlide].image}
          className="object-cover"
          alt=""
          fill
          sizes="100%"
        />
      </div>
    </div>
  );
};
export default Slider;
