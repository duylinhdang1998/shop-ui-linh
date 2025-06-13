import React from 'react';
import {Rating} from '@smastrom/react-rating';
import ButtonUnderline from '../ui/ButtonUnderline';

const SectionSlogan: React.FC = () => {
  return (
    <div className="w-full bg-background-2 flex justify-center">
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:gap-[80px] gap-[48px] items-center justify-center h-full px-3 lg:px-[64px] py-[64px] lg:py-[100px]">
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src="/leaf_tank.png"
            alt="Leaf Tank"
            className="lg:max-w-[680px] lg:max-h-[680px] max-w-[366px] max-h-[366px] w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-8 items-center md:items-start lg:gap-[64px] order-2 lg:order-1">
            <h2 className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-[3rem] tracking-normal">
            Discover the Comfort
            </h2>
            <p className="font-inter font-normal lg:text-[20px] text-[14px] leading-xl tracking-normal">
            Content: Scientific testing proves CloudThera™ superior to cotton and silk across every performance indicator. This advanced fabric innovation offers unparalleled comfort, actively supports skin and hair wellness, and precisely controls temperature for optimal rest.
            </p>
         <ButtonUnderline className='w-fit lg:py-4 lg:px-8 py-3 px-5'>EXPLORE FABRIC SCIENCE</ButtonUnderline>
        </div>
      </div>
    </div>
  );
};

export default SectionSlogan;
