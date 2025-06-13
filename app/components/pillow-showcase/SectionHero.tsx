import React from 'react';
import ButtonUnderline from '../ui/ButtonUnderline';

export default function SectionHero() {
  return (
    <section className="bg-background-1 w-full flex justify-center py-[32px] lg:py-[100px]">
      <div className="relative w-full h-[552px] max-w-[var(--max-width-container-xl)] flex flex-col items-center justify-center gap-y-[20px] xl:px-[64px] px-[12px] rounded-3xl">
        {/* Banner with dimmed effect */}
        <div className="w-full h-full bg-[url(/banner_leaf.png)] bg-no-repeat bg-cover bg-center filter brightness-75 rounded-3xl" />

        {/* Content overlay */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-[64px]">
          <h1 className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-5xl tracking-[0%] text-white">
            ETHICALLY MADE. SCIENTIFICALLY SUPERIOR.
          </h1>
          <p className="font-inter font-normal lg:text-[24px] text-[14px] leading-2xl tracking-[0%] text-white mt-4">
            CloudThera™ pillowcases offer true sustainability through our DermaWeave™ process that recycles 99.5% of water and solvents. Made with renewable plant-based fibers from responsibly managed forests, they&apos;re 100% chemical-free for a healthier sleep environment that&apos;s gentle on your skin and our planet.
          </p>
          <ButtonUnderline className="lg:py-4 lg:px-8 px-5 py-3 mt-6">LEARN MORE</ButtonUnderline>
        </div>
      </div>
    </section>
  );
}
