import React, {useState} from 'react';
import ArrowDown from '../icons/ArrowDown';
import useIsNotMobileViewport from '~/hooks/useIsNotMobileViewport';

interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({items}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const isNotMobileViewport = useIsNotMobileViewport()
  return (
    <div
      className={`relative flex flex-col bg-background-2 lg:gap-[32px] lg:p-[64px] lg:px-[64px] md:rounded-r-[24px] gap-5 p-8 rounded-r-0${
        isNotMobileViewport
          ? 'md:rounded-r-[24px] rounded-r-0'
          : 'md:rounded-b-0 rounded-b-[24px]'
      } justify-center items-center w-full h-full`}
    >
      <h2 className="font-satoshi font-medium lg:text-[32px] text-[20px] leading-3xl tracking-normal">
        {items[currentIndex].title}
      </h2>
      <p className="font-inter font-normal lg:text-[24px] text-[14px] leading-2xl tracking-normal">
        {items[currentIndex].description}
      </p>

      {/* Navigation */}
      <div className=" w-full  flex justify-between items-center gap-4 md:mt-[136px] mt-[48px]">
        <ArrowDown onClick={handlePrev} className='cursor-pointer rotate-90' />
        <div className="flex gap-2 cursor-pointer items-center">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gray-600' : 'bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
          <ArrowDown onClick={handlePrev} className='cursor-pointer -rotate-90'/>
      </div>
    </div>
  );
};

export default Carousel;
