import React from 'react';

const SectionTechnology: React.FC = () => {
  const technologies = [
    {
      title: 'Exceptional Softness',
      description: 'For a luxuriously gentle feel against your skin',
      imageSrc: '/Frame_114.png',
      imageAlt: 'Technology 1',
    },
    {
      title: 'Superior Smooth Surface',
      description: 'Reduces friction on skin and hair by 30%, preventing breakage and irritation. 0.11µm is equivalent to 0.0000043 inches.',
      imageSrc: '/Frame_30.png',
      imageAlt: 'Technology 2',
    },
    {
      title: 'Superior Strength',
      description: 'Ensuring your bedding maintains its quality night after night. cN/Text is a unit of measurement used to quantify tensile strength.',
      imageSrc: '/Frame_33.png',
      imageAlt: 'Technology 3',
    },
    {
      title: 'Enhanced Breathability',
      description: 'Creates 35% better air circulation to regulate temperature and keep you comfortable. CFM stands for Cubic Feet per Minute.',
      imageSrc: '/Frame_34.png',
      imageAlt: 'Technology 4',
    },
  ];
  return (
    <div className="w-full bg-background-3 flex justify-center py-[94px] md:py-[100px]">
      <div className="max-w-[1440px] flex flex-col lg:gap-y-[80px] gap-y-[68px] items-center justify-center h-full px-3 lg:px-[64px]">
        <span className="font-satoshi font-medium lg:text-[40px] text-[24px] leading-4xl tracking-normal text-center">
          EXCLUSIVE TECHNOLOGIES
        </span>
        <div className="flex flex-col gap-y-6 items-center">
          <span className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">
            CloudThera™
          </span>
          <span className="font-inter font-normal lg:text-[24px] text-[14px] leading-2xl tracking-normal text-center">
            Our advanced fabric technology is scientifically engineered to
            transform your sleep experience. The difference is in the numbers:
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? 'md:border-r md:pr-[40px]' : 'md:pl-[40px]'
              } ${index < technologies.length - 2 ? 'md:border-b md:pb-[40px]' : 'pt-[68px]'} border-neutral-0`}
            >
              <h3 className="font-satoshi font-medium lg:text-[32px] text-[20px] leading-4xl tracking-normal text-center mb-2">
                {tech.title}
              </h3>
              <p className="font-inter font-normal lg:text-[20px] text-[14px] leading-xl tracking-normal text-center">
                {tech.description}
              </p>
              <img
                src={tech.imageSrc}
                alt={tech.imageAlt}
                className="lg:w-[680px] lg:h-[440px] w-[366px] h-[236px] mb-4"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-y-6">
          <span className="font-satoshi font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">DermaWeave™</span>
          <span className='font-inter font-normal  lg:text-[24px] text-[14px] leading-2xl tracking-normal text-center'>
            Part of our eco-conscious manufacturing process that recycles 99.5%
            of solvents and water, delivering ultra-pure bedding without harsh
            chemicals and with minimal environmental impact.
          </span>
        </div>
        <div className="grid max-w-[1440px] grid-cols-11 w-full gap-8 items-center gap-x-[31px]">
          {/* Block 1 */}
          <div className="col-span-3 flex justify-end">
            <img
              src="Frame_38.png"
              alt="Frame_38.png"
              className="lg:w-[280px] w-[110px] h-[120px] lg:h-[260px]"
            />
          </div>

          {/* Block 2 */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <img
              src="Group_8.png"
              alt="Frame_8.png"
              className="lg:w-[556px] lg:h-[480px] w-[180px] h-[210px]"
            />
          </div>

          {/* Block 3 */}
          <div className="col-span-3 flex justify-start">
            <img
              src="Frame_39.png"
              alt="Frame_39.png"
              className="lg:w-[280px] w-[110px] h-[120px] lg:h-[260px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTechnology;
