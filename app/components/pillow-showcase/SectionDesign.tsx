import React from 'react';
import Carousel from './Carousel';

const SectionDesign: React.FC = () => {
  const carouselItems = [
    {
      title: 'Hotel-Quality Finish',
      description:
        'Envelope-style closures keep your pillows neatly tucked and hidden for a smooth, tailored look that stays in place all night. It gives your bed that polished, hotel-like finish.',
    },
    {
      title: 'Durable Stitching',
      description:
        'Crafted with reinforced stitching for long-lasting durability, ensuring your bedding remains pristine for years to come.',
    },
    {
      title: 'Eco-Friendly Materials',
      description:
        'Made with sustainable, plant-based fibers that are gentle on your skin and the planet.',
    },
  ];

  return (
    <div className="w-full flex-col gap-[61px] lg:gap-[64px] bg-background-3 flex justify-center py-[64px] lg:py-[100px]">
      <span className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">
        THOUGHTFULLY DESIGNED
      </span>
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full px-3 lg:px-[64px]">
        <div className="flex justify-center  h-full">
          <img
            src="/pank_blank.png"
            alt="Leaf Tank"
            className=" w-full h-full"
          />
        </div>
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
};

export default SectionDesign;
