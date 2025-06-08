import {Section} from '~/components/ui/Section';
import {ProcessStep} from '~/components/about/ProcessStep';
import {LocationImage} from '~/components/about/LocationImage';
import {ImpactCard} from '~/components/about/ImpactCard';
import {ProductSwiper} from '~/components/ui/ProductSwiper';

const About = () => {
  const awardWinningProducts = [
    {
      id: 'pillowcases',
      name: 'Pillowcases',
      image: '/img_pillowcase.png',
      alt: 'Pillowcases',
      price: 'From $89',
      originalPrice: '$70',
    },
    {
      id: 'sheets',
      name: 'Sheets',
      image: '/img_pillowcase.png',
      alt: 'Sheets',
      price: 'From $189',
      originalPrice: '$140',
    },
    {
      id: 'duvet-cover',
      name: 'Duvet Cover',
      image: '/img_pillowcase.png',
      alt: 'Duvet Cover',
      price: 'From $229',
      originalPrice: '$200',
    },
    {
      id: 'duvet-cover-2',
      name: 'Duvet Cover',
      image: '/img_pillowcase.png',
      alt: 'Duvet Cover',
      price: 'From $229',
      originalPrice: '$200',
    },
  ];

  return (
    <div className="bg-background-2">
      {/* Hero Section */}
      <section className="relative w-full !pt-0 mb-[100px] flex justify-center ">
        <div className="max-w-[var(--max-width-container-xl)] lg:px-[64px] px-[12px]">
          <img
            src="/img_hero_about.png"
            alt="Our Story"
            className="w-full h-[860px] object-cover "
          />
          <div className="absolute lg:bottom-[56px] left-0 right-0  flex-col items-center gap-y-8 justify-center text-white hidden lg:flex">
            <span className="text-[32px] sm:text-[44px] lg:text-[48px] font-medium tracking-wide my-0">
              OUR STORY
            </span>
            <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[32px] leading-[40px]">
              The journey from thread to dream
            </span>
          </div>
        </div>
      </section>

      {/* Dreamey Section */}
      <section className="w-full bg-[#EADFD5] py-12 sm:py-16 md:py-20 lg:py-[100px] ">
        <div className=" max-w-[var(--max-width-container-xl)] mx-auto px-4 sm:px-6 md:px-8 flex justify-center flex-col items-center">
          <div className="rounded-t-[200px] sm:rounded-t-[300px] md:rounded-t-[400px] flex justify-center items-center bg-[#EADFD5] mb-8 sm:mb-12 md:mb-20">
            <img
              src="/img_dreamey.png"
              alt="Dreamey"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-[80vw]"
            />
          </div>

          {/* Text content */}
          <div className="max-w-[1080px] mx-auto text-center">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[1.2] tracking-[-0.02em] text-[#2C2C2C] mb-6 sm:mb-8 md:mb-12 font-light px-4">
              POWERED BY INNOVATION, INSPIRED BY TRADITION
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] sm:leading-[1.8] text-[#4A4A4A] mx-auto px-4">
              {`At Dreamey, we're obsessed with transforming how you sleep, look,
              and feel. Our singular focus is on CloudThera, a fabric that
              transcends traditional textiles like cotton or silk. By merging
              cutting-edge technology with centuries of textile wisdom, we've
              created bedding that actively nurtures your skin, hair, and
              overall wellbeing while you rest.`}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Section className="w-full">
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-25 bg-[url('/bg_nature.png')] bg-cover bg-center max-w-[var(--max-width-container-xl)] mx-auto rounded-2xl">
        <div className="absolute inset-0 bg-black/20  rounded-xl"></div>
        <div className="relative z-10 sm:px-6 md:px-8 rounded-2xl px-5 md-5 lg:px-20">
          <p className="text-center text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] mb-4">
            FROM NATURE TO NURTURE
          </p>
          <div className="my-5">
            <p className="text-center  text-[14px] sm:text-[16px] text-white/90 mb-8 sm:mb-12 md:mb-16 sm:max-w-[600px] md:max-w-[100%]  mx-auto">
              Our innovative 6-step process transforms sustainable resources
              into sleep-enhancing bedding with minimal environmental impact.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <ProcessStep
              number="1"
              title="Sustainable Harvesting"
              description="Carefully selected mulberry leaves, sustainably harvested to protect our environment while ensuring quality."
            />
            <ProcessStep
              number="2"
              title="Natural Pulp Transformation"
              description="Raw silk expertly extracted using eco-friendly processes that preserve natural properties."
            />
            <ProcessStep
              number="3"
              title="Eco-Friendly Dissolution"
              description="Transforming raw material into fine threads through innovative green chemistry methods."
            />
            <ProcessStep
              number="4"
              title="Advanced Fiber Creation"
              description="State-of-the-art spinning technology that creates perfectly uniform fibers with exceptional properties."
            />
            <ProcessStep
              number="5"
              title="Industry-Leading Recovery"
              description="Revolutionary process that recovers and reuses 99% of solvents, minimizing waste."
            />
            <ProcessStep
              number="6"
              title="CloudThera™ Refinement"
              description="Final refinement process that perfects our signature CloudThera fabric feel and performance."
            />
          </div>
        </div>
        </div>
      </Section>

      {/* Location Section */}
      <div className="max-w-[90%] mx-auto sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Mobile Layout - 2x2 Grid + Text */}
        <div className="block lg:hidden">
          {/* 2x2 Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="flex justify-end items-start pr-[25px] md:pr-[30px]">
              <LocationImage
                src="/img_location_1.png"
                alt="Vietnam Cave"
                className="w-[30vw] h-[30vw] max-w-[130px] max-h-[130px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-[200px] md:max-h-[200px] rounded-lg object-cover"
              />
            </div>
            <div className="flex justify-end items-end">
              <LocationImage
                src="/img_location_2.png"
                alt="Ha Long Bay"
                className="w-[35vw] h-[35vw] max-w-[160px] max-h-[160px] sm:max-w-[180px] sm:max-h-[180px] md:max-w-[240px] md:max-h-[240px] rounded-lg object-cover"
              />
            </div>
            <div>
              <LocationImage
                src="/img_location_3.png"
                alt="Vietnam Rice Terraces"
                className="w-[35vw] h-[35vw] max-w-[160px] max-h-[160px] sm:max-w-[180px] sm:max-h-[180px] md:max-w-[240px] md:max-h-[240px] rounded-lg object-cover"
              />
            </div>
            <div className="flex justify-start items-end pl-[30px] md:pl-[35px]">
              <LocationImage
                src="/img_location_4.png"
                alt="Traditional Vietnamese Architecture"
                className="w-[30vw] h-[30vw] max-w-[130px] max-h-[130px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-[200px] md:max-h-[200px] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center px-2 sm:px-4 md:px-6">
            <h2 className="text-base sm:text-[24px] md:text-[28px] font-light text-[#333333] mb-4 sm:mb-6 md:mb-8 tracking-wide leading-tight">
              DESIGNED IN THE U.S.
              <br />
              CRAFTED WITH HEART
              <br />
              IN VIETNAM
            </h2>
            <div className="space-y-5 md:space-y-6">
              <p className="text-sm text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] sm:leading-[1.6] mx-auto mb-3 sm:mb-4">
                {`We chose Vietnam for its unmatched textile heritage and skilled
              craftsmanship. As one of the world's top textile exporters,
              Vietnam blends centuries-old techniques with modern innovation.`}
              </p>
              <div className="mt-2">
                <p className="text-sm text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] sm:leading-[1.6] mx-auto mt-5">
                  But our impact goes beyond manufacturing. We support the local
                  community by donating a portion of profits to the Hope Group,
                  a charity uplifting Vietnamese children and families.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-end">
            <LocationImage
              src="/img_location_1.png"
              alt="Vietnam Cave"
              className="max-w-[180px] sm:max-w-[200px] rounded-sm mb-4"
            />
            <LocationImage
              src="/img_location_3.png"
              alt="Vietnam Rice Terraces"
              className="max-w-[300px] rounded-sm"
            />
          </div>

          {/* Center Column - Text Content */}
          <div className="text-center px-2 sm:px-4 flex flex-col items-center">
            <h2 className="text-[28px] lg:text-[32px] font-light text-[#333333] mb-4 sm:mb-6 tracking-wide leading-tight">
              DESIGNED IN THE U.S.
              <br />
              CRAFTED WITH HEART
              <br />
              IN VIETNAM
            </h2>
            <p className="leading-[1.6]  mx-auto sm:mb-4 text-[14px] mb-5">
              {`We chose Vietnam for its unmatched textile heritage and skilled
              craftsmanship. As one of the world's top textile exporters,
              Vietnam blends centuries-old techniques with modern innovation.`}
            </p>
            <div className="mt-2">
              <p className="text-xs leading-[1.6]  mx-auto ">
                But our impact goes beyond manufacturing. We support the local
                community by donating a portion of profits to the Hope Group, a
                charity uplifting Vietnamese children and families.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-start">
            <LocationImage
              src="/img_location_2.png"
              alt="Ha Long Bay"
              className="max-w-[300px] rounded-sm"
            />
            <LocationImage
              src="/img_location_4.png"
              alt="Traditional Vietnamese Architecture"
              className="max-w-[180px] sm:max-w-[200px] rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <Section className="py-12 sm:py-16 md:py-20 lg:py-24 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12 md:mb-16">
            <ImpactCard
              image="img_impact_1.png"
              title="Supporting Families in Crisis"
              description="We're proud to partner with local charities, offering support and resources to families facing challenging times through various community programs."
            />
            <ImpactCard
              image="img_impact_2.png"
              title="Empowering Through Education"
              description="Our annual scholarship program helps 50+ students access quality education each year, fostering future leaders in our community."
              className="sm:translate-y-0 lg:translate-y-[-100px]"
            />
            <ImpactCard
              image="img_impact_3.png"
              title="Building Stronger Communities"
              description="Through local partnerships and infrastructure projects, we're helping build sustainable communities and create opportunities in rural areas."
            />
          </div>

          <div className="text-left">
            <p className="text-[16px] sm:text-[18px] md:text-lg leading-[1.6] text-[#000] max-w-[600px] font-semibold">
              {`When you choose Dreamey, you're not just investing in better
              sleep. You're investing in the communities that bring our values
              to life.`}
            </p>
          </div>
        </div>
      </Section>

      {/* Award-Winning Collection */}
      <Section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-light text-center text-[#333333] mb-8 sm:mb-12 md:mb-16 tracking-wide px-4">
            AWARD-WINNING SLEEP COLLECTION
          </h2>

          <ProductSwiper products={awardWinningProducts} />
        </div>
      </Section>
    </div>
  );
};

export default About;
