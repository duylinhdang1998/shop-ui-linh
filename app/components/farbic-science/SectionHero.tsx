import React from 'react';
import ButtonUnderline from '../ui/ButtonUnderline';

export default function SectionHero() {
  const renderContent = (isLargeScreen: boolean) => (
    <>
      <span
        className={`font-satoshi font-medium ${
          isLargeScreen ? 'text-5xl leading-5xl' : 'text-2xl leading-4xl text-neutral-5'
        } tracking-normal text-center`}
      >
        THE SCIENCE BEHIND DREAMEY
      </span>
      <span
        className={`font-satoshi font-medium ${
          isLargeScreen ? 'text-4xl leading-5xl' : 'text-[16px] leading-2xl text-neutral-5'
        } tracking-normal text-center`}
      >
        Breakthrough fabric engineered for improved sleep, skin, and hair
      </span>
      <ButtonUnderline className={isLargeScreen ? 'py-4 px-6' : 'py-3 px-5'}>
        SHOP THE INNOVATION
      </ButtonUnderline>
    </>
  );

  return (
    <section className="w-full px-[12px] xl:px-[64px]">
      <div className="relative bg-no-repeat bg-cover bg-center rounded-3xl lg:h-[860px] h-[320px] lg:mb-[100px]">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/frabric.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute hidden lg:flex z-4 bottom-[56px] flex-col items-center justify-center text-center text-white gap-y-8 translate-x-[-50%] left-[50%]">
          {renderContent(true)}
        </div>
      </div>
      <div className="w-full flex lg:hidden mt-5 mb-[64px] z-4 bottom-[56px] flex-col justify-center text-center items-center text-white gap-y-5">
        {renderContent(false)}
      </div>
    </section>
  );
}
