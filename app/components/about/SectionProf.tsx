import React from 'react';
import {ImpactCard} from './ImpactCard';
import {Section} from '../ui/Section';

export default function SectionProf() {
  return (
    <Section className="py-16 xl:py-[100px] bg-background-2 px-3 xl:px-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-12">
          <ImpactCard
            image="img_impact_1.png"
            title="Supporting Families in Crisis"
            description="We're proud to partner with local charities, offering support and resources to families facing challenging times through various community programs."
            className="lg:pt-[163px]"
          />
          <ImpactCard
            image="img_impact_2.png"
            title="Empowering Through Education"
            description="Our annual scholarship program helps 50+ students access quality education each year, fostering future leaders in our community."
          />
          <ImpactCard
            image="img_impact_3.png"
            title="Building Stronger Communities"
            description="Through local partnerships and infrastructure projects, we're helping build sustainable communities and create opportunities in rural areas."
            className="lg:mt-[230px]"
          />
        </div>
        <div className="w-full text-center lg:text-left lg:max-w-[862px] lg:text-[40px] font-medium text-neutral-5 lg:leading-[48px] mt-[48px] lg:mt-0">
          {
            "When you choose Dreamey, you're not just investing in better sleep. You're investing in the communities that bring our vision to life."
          }
        </div>
      </div>
    </Section>
  );
}
