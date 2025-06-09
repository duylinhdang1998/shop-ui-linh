import React from 'react';
import {LocationImage} from './LocationImage';

export default function SectionLocation() {
  return (
    <section className="py-[64px] xl:py-[100px] bg-background-3 px-3 xl:px-[64px]">
      {/* Desktop */}
      <div className="hidden xl:grid grid-cols-3 xl:gap-y-[180px] xl:gap-x-[40px]">
        {/* Left Column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-end">
          <LocationImage
            src="/img_location_1.png"
            alt="Vietnam Cave"
            className="max-w-[310px] h-[302px] rounded-3xl"
          />
          <LocationImage
            src="/img_location_3.png"
            alt="Vietnam Rice Terraces"
            className="max-w-[514px] h-[472px] rounded-sm self-start mt-[183px]"
          />
        </div>

        {/* Center Column - Text Content */}
        <div className="text-center items-center flex flex-col xl:gap-y-16 justify-center">
          <span className="xl:text-[48px] xl:leading-[64px] text-neutral-5 font-medium text-center">
            {'DESIGNED IN THE U.S.CRAFTED WITH HEART IN VIETNAM'}
          </span>
          <span className="text-center text-2xl text-neutral-5 flex flex-col gap-y-4">
            <span>
              We chose Vietnam for its unmatched textile heritage and skilled
              craftsmanship. As one of the world’s top textile exporters,
              Vietnam blends centuries-old techniques with modern innovation.
            </span>
            <span>
              But our impact goes beyond manufacturing. We support the local
              community by donating a portion of profits to the Hope Group, a
              charity uplifting Vietnamese children and families.
            </span>
          </span>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-end">
          <LocationImage
            src="/img_location_2.png"
            alt="Ha Long Bay"
            className="max-w-[514px] h-[472px] rounded-sm"
          />
          <LocationImage
            src="/img_location_4.png"
            alt="Traditional Vietnamese Architecture"
            className="max-w-[310px] h-[302px] rounded-3xl self-center mt-[258px]"
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="grid grid-cols-2 gap-x-[40px] xl:hidden">
        <div className="flex justify-end items-start">
          <LocationImage
            src="/img_location_1.png"
            alt="Vietnam Cave"
            className="w-[100px] h-[97px] sm:w-1/2 sm:h-1/2"
          />
        </div>
        <div className="flex justify-end items-end">
          <LocationImage
            src="/img_location_2.png"
            alt="Ha Long Bay"
            className="w-[153px] h-[139px] sm:w-full sm:h-full"
          />
        </div>
        <div>
          <LocationImage
            src="/img_location_3.png"
            alt="Vietnam Rice Terraces"
            className="w-[153px] h-[139px] sm:w-full sm:h-full"
          />
        </div>
        <div className="flex justify-start items-end mt-[55px]">
          <LocationImage
            src="/img_location_4.png"
            alt="Traditional Vietnamese Architecture"
            className="w-[128px] h-[128px] sm:w-[256px] sm:h-[256px]"
          />
        </div>
      </div>
      <div className="flex xl:hidden mt-[64px] flex-col gap-y-8">
        <span className="text-2xl text-neutral-5 font-medium text-center">
          {'DESIGNED IN THE U.S.CRAFTED WITH HEART IN VIETNAM'}
        </span>
        <span className="text-center text-sm text-neutral-5 flex flex-col gap-y-4">
          <span>
            We chose Vietnam for its unmatched textile heritage and skilled
            craftsmanship. As one of the world’s top textile exporters, Vietnam
            blends centuries-old techniques with modern innovation.
          </span>
          <span>
            But our impact goes beyond manufacturing. We support the local
            community by donating a portion of profits to the Hope Group, a
            charity uplifting Vietnamese children and families.
          </span>
        </span>
      </div>
    </section>
  );
}
