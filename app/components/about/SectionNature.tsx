import React, {memo} from 'react';
import {ProcessStep} from './ProcessStep';

const data = [
  {
    id: '1',
    title: 'Sustainable Harvesting',
    description:
      'Responsibly sourced eucalyptus ensure minimal impact and premium quality.',
  },
  {
    id: '2',
    title: 'Natural Pulp Transformation',
    description:
      'Plants are turned into pure cellulose using only water and natural ingredients.',
  },
  {
    id: '3',
    title: 'Eco-Friendly Dissolution',
    description:
      'A safe, biodegradable solvent forms the base of CloudThera’s performance.',
  },
  {
    id: '4',
    title: 'Advanced Fiber Creation',
    description:
      'Energy-efficient spinning creates ultra-fine fibers that regulate moisture and temperature.',
  },
  {
    id: '5',
    title: 'Industry-Leading Recovery',
    description:
      'We recover and reuse 99.5% of water and solvents to cut waste.',
  },
  {
    id: '6',
    title: 'DermaWeave™ Refinement',
    description:
      'Fibers are gently purified and strengthened for a soft, skin-friendly finish',
  },
];

function SectionNature() {
  return (
    <section className="w-full px-3 py-6 xl:px-[64px] xl:py-[66px] overflow-hidden">
      <div className="relative bg-no-repeat bg-cover bg-center rounded-3xl py-[34px]">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 background-overlay rounded-3xl"></div>
        <div className="relative max-w-[1440px] py-[100px] mx-auto flex flex-col gap-y-8 xl:gap-y-[64px] px-5 2xl:px-0">
          <p className="text-center text-xl text-white font-medium xl:text-[48px]">
            FROM NATURE TO NURTURE
          </p>
          <span className="text-center font-inter text-sm xl:text-2xl xl:leading-[32px] text-white">
            Our innovative 6-step process transforms sustainable resources into
            sleep-enhancing bedding with minimal environmental impact.
          </span>
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 xl:gap-16">
            {data.map((item, index) => (
              <div key={item.id} className="col-span-6 xl:col-span-4">
                <ProcessStep
                  number={index + 1}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SectionNature);
