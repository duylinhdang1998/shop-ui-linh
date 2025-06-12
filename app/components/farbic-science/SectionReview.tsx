import React from "react";
import { Rating } from "@smastrom/react-rating";
import CustomerReview from "./CustomerReview";

const SectionReview: React.FC = () => {
  const starDrawing = (
    <path d="M28.6669 14.873L23.3015 19.4899L24.9087 26.3635C24.9938 26.7229 24.9695 27.099 24.839 27.4448C24.7084 27.7906 24.4774 28.0908 24.1747 28.3078C23.8721 28.5249 23.5112 28.6491 23.1373 28.6651C22.7634 28.681 22.3931 28.5879 22.0725 28.3975L15.9921 24.7613L9.92475 28.3975C9.60422 28.5879 9.23385 28.681 8.85996 28.6651C8.48607 28.6491 8.12524 28.5249 7.82258 28.3078C7.51993 28.0908 7.28889 27.7906 7.15833 27.4448C7.02778 27.099 7.00351 26.7229 7.08856 26.3635L8.69343 19.4969L3.3268 14.873C3.04295 14.6317 2.8377 14.313 2.73679 13.9571C2.63587 13.6012 2.64378 13.2238 2.75953 12.8723C2.87528 12.5208 3.09371 12.2108 3.38743 11.9812C3.68114 11.7516 4.03708 11.6126 4.4106 11.5817L11.4844 10.9776L14.2457 4.48395C14.3899 4.14322 14.6331 3.85217 14.9447 3.64745C15.2563 3.44273 15.6224 3.3335 15.9969 3.3335C16.3713 3.3335 16.7374 3.44273 17.049 3.64745C17.3607 3.85217 17.6039 4.14322 17.7481 4.48395L20.5176 10.9776L27.5891 11.5817C27.9626 11.6126 28.3185 11.7516 28.6122 11.9812C28.906 12.2108 29.1244 12.5208 29.2401 12.8723C29.3559 13.2238 29.3638 13.6012 29.2629 13.9571C29.162 14.313 28.9567 14.6317 28.6729 14.873H28.6669Z" />
  );

  const reviews = [
    {
      rating: 5,
      text: "Amazing product! Highly recommend to everyone.",
      avatar: "avatar.png",
      name: "Dr. J. Karlinsky",
      place: "Board-Certified Dermatologist",
    },
    {
      rating: 4,
      text: "“As a professional sleep consultant, I recommend Dreamey for its proven temperature regulation and comfort.”",
      avatar: "avatar.png",
      name: "Dr. N. Patel",
      place: "Certified Sleep Consultant",
    },
  ];

  return (
    <div className="w-full bg-background-2 flex justify-center">
      <div className="max-w-[1440px] flex flex-col items-center justify-center h-full px-3 lg:px-[64px] py-[100px]">
          <h2 className="!m-0 font-satoshi pb-[64px] font-medium lg:text-[48px] text-[24px] leading-5xl tracking-normal text-center">
            CUSTOMER-LOVED. EXPERT-APPROVED.
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-y-[64px]">
          {reviews.map((review, index) => (
            <CustomerReview key={index} review={review} starDrawing={starDrawing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionReview;
