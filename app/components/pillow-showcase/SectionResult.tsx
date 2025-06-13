import React, {useState} from 'react';
import ArrowDown from '../icons/ArrowDown';
import useIsNotMobileViewport from '~/hooks/useIsNotMobileViewport';
import ButtonUnderline from '../ui/ButtonUnderline';

type ResultItem = {
  image: string;
  title: string;
  description: string;
};

const SectionResult: React.FC = () => {
  const resultItems: ResultItem[] = [
    {
      image: '/benifit_1.png',
      title: '35% Better Breathability',
      description:
        'Superior airflow for ideal sleep temperature and restorative rest',
    },
    {
      image: '/benifit_2.png',
      title: '200% Less Bacteria',
      description:
        'Reduces acne-causing bacteria and allergens by 50% for clearer skin',
    },
    {
      image: '/benifit_3.png',
      title: '50% Superior Moisture Control',
      description:
        'Advanced wicking technology keeps your skin perfectly hydrated all night',
    },
    {
      image: '/benifit_1.png',
      title: '60% Lower Odor Retention',
      description: 'Stays fresher longer with reduced odor absorption',
    },
    {
      image: '/benifit_2.png',
      title: '30% Reduced Hair Damage',
      description: 'Less friction and breakage for healthier, shinier hair',
    },
    {
      image: '/benifit_3.png',
      title: '100% Sustainable Materials',
      description:
        'Plant-based fibers produced through eco-friendly closed-loop processes',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isNotMobileViewport = useIsNotMobileViewport(764);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resultItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? resultItems.length - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-background-1 flex justify-center flex-col items-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center justify-center h-full px-3 lg:px-[64px] py-[64px] lg:py-[100px]">
        <h2 className="!m-0 font-satoshi md:pb-[64px] pb-8 font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">
          RESULTS YOU CAN SEE AND FEEL
        </h2>

        {isNotMobileViewport ? (
          <div className="grid h-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px]">
            {resultItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-w-[160px] object-cover"
                />
                <h3 className="font-satoshi font-medium text-xl pt-4 leading-[24px] tracking-[0%] text-center">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-lg leading-[20px] tracking-[0%] text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col w-full items-center gap-3 text-center">
              <div className="relative flex w-full justify-center items-center">
                <ArrowDown
                  onClick={handlePrev}
                  className="w-[48px] h-[48px] absolute cursor-pointer rotate-90 left-0 translate-y-[120%]"
                />
                <img
                  src={resultItems[currentIndex].image}
                  alt={resultItems[currentIndex].title}
                  className="w-full h-auto max-w-[120px] object-cover"
                />
                <ArrowDown
                  onClick={handleNext}
                  className="w-[48px] h-[48px] absolute cursor-pointer -rotate-90 right-0 translate-y-[120%]"
                />
              </div>
              <h3 className="font-satoshi font-medium lg:text-[32px] text-[16px] leading-3xl tracking-normal">
                {resultItems[currentIndex].title}
              </h3>
              <p className="font-inter font-normal lg:text-[24px] text-[14px] leading-2xl tracking-normal">
                {resultItems[currentIndex].description}
              </p>
            </div>
            <div className="flex justify-center items-center w-full px-8 mt-[32px]">
              <div className="flex gap-2 cursor-pointer items-center">
                {resultItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? 'bg-gray-600' : 'bg-gray-400'
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        )}
        <ButtonUnderline className="lg:py-4 hidden md:block lg:px-8 px-5 py-3 mt-[64px]">
          SEE THE RESEARCH
        </ButtonUnderline>
      </div>
    </div>
  );
};

export default SectionResult;
