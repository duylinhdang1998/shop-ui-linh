import React from 'react';

export default function SectionHero() {
  return (
    <section className="relative w-full flex justify-center mt-[64px] mb-[100px] rounded-lg">
      <div className="w-full max-w-[var(--max-width-container-xl)] flex flex-col gap-y-[20px] xl:px-[64px] px-[12px] ">
        <div className='w-full h-[337px] object-cover bg-[url(/banner_shop.png)] bg-no-repeat bg-cover bg-center'>
       
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[32px] xl:text-[48px] font-medium block font-satoshi text-white  text-4xl leading-5xl tracking-[0%] text-center">
        SHOP ALL
        </span>
        <span className="mt-16 text-[16px] xl:text-[32px] font-medium block text-white font-satoshi  text-2xl leading-3xl tracking-[0%] text-center">
        Science-backed bedding
        </span>
        </div>
      </div>
    </section>
  );
}
