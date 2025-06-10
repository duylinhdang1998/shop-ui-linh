import React from 'react';

export default function SectionHero() {
  return (
    <section className="relative w-full !pt-0 mb-[100px] flex justify-center">
      <div className="max-w-[var(--max-width-container-xl)] flex flex-col gap-y-[20px] xl:px-[64px] px-[12px]">
        <img
          src="/img_hero_about.png"
          alt="Our Story"
          className="w-full h-[320px] sm:h-[420px] xl:h-[860px] object-cover "
        />
        <div className="relative xl:absolute xl:bottom-[56px] xl:left-0 xl:right-0 flex-col items-center  justify-center text-neutral-5 xl:text-white flex gap-y-5 xl:gap-y-8">
          <span className="text-[32px] xl:text-[48px] font-medium">
            OUR STORY
          </span>
          <span className="text-[16px] xl:text-[32px] font-medium">
            The journey from thread to dream
          </span>
          <button className="xl:hidden bg-primary rounded-full px-5 py-3 text-white flex justify-center items-center">
            TRANSFORM YOUR SLEEP
          </button>
        </div>
      </div>
    </section>
  );
}
