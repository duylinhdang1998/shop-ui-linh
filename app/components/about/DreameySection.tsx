import React from 'react';

export default function DreameySection() {
  return (
    <section className="w-full bg-background-1 py-12 sm:py-16 md:py-20 lg:py-[100px] px-3">
      <div className="flex justify-center flex-col items-center gap-y-[48px] lg:gap-y-20">
        <div className="md:max-w-[1080px] lg:h-full h-[230px]">
          <img
            src="/img_dreamey.png"
            alt="Dreamey"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Text content */}
        <div className="max-w-[1440px] mx-auto flex flex-col gap-y-8 text-center">
          <h2 className="text-[24px] mb-0 sm:text-[28px] xl:text-[48px] xl:leading-[64px] text-neutral-5 font-medium px-4">
            POWERED BY INNOVATION, INSPIRED BY TRADITION
          </h2>
          <p className="text-base lg:text-[24px] lg:leading-8 text-neutral-5 font-inter">
            At Dreamey, we&apos;re obsessed with transforming how you sleep,
            look, and feel. Our singular focus is on CloudThera, a fabric that
            transcends traditional textiles like cotton or silk. By merging
            cutting-edge technology with centuries of textile wisdom, we&apos;ve
            created bedding that actively nurtures your skin, hair, and overall
            wellbeing while you rest.
          </p>
        </div>
      </div>
    </section>
  );
}
