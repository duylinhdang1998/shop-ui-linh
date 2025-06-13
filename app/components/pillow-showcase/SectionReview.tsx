import React, {useState} from 'react';
import {Rating} from '@smastrom/react-rating';
import ArrowDown from '../icons/ArrowDown';
import useIsNotMobileViewport from '~/hooks/useIsNotMobileViewport';
import {RatingBadge} from '../farbic-science/ExpandTable';

type Review = {
  rating: number;
  text: string;
  avatar: string;
  name: string;
  place: string;
};

const Carousel: React.FC<{reviews: Review[]; starDrawing: JSX.Element}> = ({
  reviews,
  starDrawing,
}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isNotMobileViewport = useIsNotMobileViewport(764);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {isNotMobileViewport ? (
        <div className="grid h-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review: any, index: any) => (
            <div
              key={index}
              className="flex flex-col items-start w-full  lg:min-h-[400px] md:min-height-[250px] px-4"
            >
              <Rating
                value={5}
                readOnly
                style={{
                  width: 150,
                }}
                itemStyles={{
                  activeFillColor: '#F69149',
                  inactiveFillColor: '#D9D9D9',
                  itemShapes: starDrawing,
                }}
              />
              <h3
                className="font-satoshi font-medium lg:text-[32px] text-[20px] min-h-[4em] leading-3xl tracking-normal pt-6 line-clamp-2"
              >
                {review.title || ' '}
              </h3>
              <p className="font-inter font-normal  text-neutral-5 lg:text-[24px] text-[14px] leading-2xl tracking-normal pt-6 line-clamp-5">
                {review.text}
              </p>
              <div className="mt-auto pt-8">
                <p className="font-satoshi font-medium lg:text-[24px] text-[14px] leading-2xl tracking-normal">
                  {review.name}
                </p>
                <span className="font-inter font-normal text-neutral-3 lg:text-[24px] text-[14px] leading-2xl tracking-normal pt-4">
                  {review.place}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Rating
              value={5}
              readOnly
              style={{
                width: 100,
              }}
              itemStyles={{
                activeFillColor: '#F69149',
                inactiveFillColor: '#D9D9D9',
                itemShapes: starDrawing,
              }}
            />
            <h3 className="font-inter font-normal lg:text-[24px] text-[20px] leading-2xl tracking-normal pt-4">
              {reviews[currentIndex].title}
            </h3>
            <p className="font-inter text-neutral-5 text-center font-normal lg:text-[24px] text-[14px] leading-2xl tracking-normal pt-4">
              {reviews[currentIndex].text}
            </p>
            <p className="font-inter font-normal lg:text-[24px] text-[14px] leading-2xl tracking-normal pt-5">
              {reviews[currentIndex].name}
            </p>
            <span className="font-inter text-neutral-3 font-normal lg:text-[24px] text-[14px] leading-2xl tracking-normal">
              {reviews[currentIndex].place}
            </span>
          </div>
          <div className="flex justify-between items-center w-full px-8 mt-[48px]">
            <ArrowDown
              onClick={handlePrev}
              className="cursor-pointer rotate-90"
            />
            <div className="flex gap-2 cursor-pointer items-center">
              {reviews.map((_: any, index: any) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-gray-600' : 'bg-gray-400'
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
            <ArrowDown
              onClick={handleNext}
              className="cursor-pointer -rotate-90"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const SectionReview: React.FC = () => {
  const starDrawing: any = (
    <path d="M28.6669 14.873L23.3015 19.4899L24.9087 26.3635C24.9938 26.7229 24.9695 27.099 24.839 27.4448C24.7084 27.7906 24.4774 28.0908 24.1747 28.3078C23.8721 28.5249 23.5112 28.6491 23.1373 28.6651C22.7634 28.681 22.3931 28.5879 22.0725 28.3975L15.9921 24.7613L9.92475 28.3975C9.60422 28.5879 9.23385 28.681 8.85996 28.6651C8.48607 28.6491 8.12524 28.5249 7.82258 28.3078C7.51993 28.0908 7.28889 27.7906 7.15833 27.4448C7.02778 27.099 7.00351 26.7229 7.08856 26.3635L8.69343 19.4969L3.3268 14.873C3.04295 14.6317 2.8377 14.313 2.73679 13.9571C2.63587 13.6012 2.64378 13.2238 2.75953 12.8723C2.87528 12.5208 3.09371 12.2108 3.38743 11.9812C3.68114 11.7516 4.03708 11.6126 4.4106 11.5817L11.4844 10.9776L14.2457 4.48395C14.3899 4.14322 14.6331 3.85217 14.9447 3.64745C15.2563 3.44273 15.6224 3.3335 15.9969 3.3335C16.3713 3.3335 16.7374 3.44273 17.049 3.64745C17.3607 3.85217 17.6039 4.14322 17.7481 4.48395L20.5176 10.9776L27.5891 11.5817C27.9626 11.6126 28.3185 11.7516 28.6122 11.9812C28.906 12.2108 29.1244 12.5208 29.2401 12.8723C29.3559 13.2238 29.3638 13.6012 29.2629 13.9571C29.162 14.313 28.9567 14.6317 28.6729 14.873H28.6669Z" />
  );

  const reviews = [
    {
      rating: 5,
      text: "These pillowcases exceeded my expectations. They’re more luxurious than my expensive silk ones. I've gifted them to family because I want everyone to experience this comfort.",
      avatar: 'avatar.png',
      title: 'Better than my silk ones',
      name: 'Shanique D.',
      place: 'Verified Buyer',
    },
    {
      rating: 4,
      text: '“Dreamey quickly took care of a minor shipping issue. They were awesome and took care of it so quickly. Great customer service! And their products are absolutely wonderful!”',
      avatar: 'avatar.png',
      title: 'Wonderful and great service!',
      name: 'Jessica L..',
      place: 'Verified Buyer',
    },
    {
      rating: 4,
      text: '“These pillowcases exceeded my expectations. They’re softer and more luxurious than my expensive silk ones. Ive gifted them to family because I want everyone to experience this comfort.”',
      avatar: 'avatar.png',
      name: 'Jessica L.',
      title: 'A luxurious upgrade worth every penny',
      place: 'Verified Buyer',
    },
  ];

  return (
    <div className="w-full bg-background-2 flex justify-center">
      <div className="max-w-[1440px] flex flex-col items-center justify-center h-full px-3 lg:px-[64px] py-[64px] lg:py-[100px]">
        <h2 className="!m-0 font-satoshi md:pb-[64px] pb-8 font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">
          CUSTOMER REVIEWS
        </h2>

        <Carousel reviews={reviews} starDrawing={starDrawing} />
      </div>
    </div>
  );
};

export default SectionReview;
