import React from "react";
import { Rating } from "@smastrom/react-rating";

interface CustomerReviewProps {
  review: {
    rating: number;
    text: string;
    avatar: string;
    name: string;
    place: string;
  };
  starDrawing: React.ReactNode;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ review, starDrawing }) => {
  return (
    <div className=" bg-background-2 rounded-lg flex flex-col h-full lg:justify-start justify-center md:items-start items-center">
      <Rating
        value={review.rating}
        readOnly
        style={{
          width: 100,
        }}
        itemStyles={{
          activeFillColor: "#F69149",
          inactiveFillColor: "#D9D9D9",
          itemShapes: starDrawing as any,
        }}
      />
      {/* Review Text */}
      <p className="font-satoshi font-medium lg:text-[32px] text-[16px] pt-4 lg:pt-6 lg:leading-[2.75rem] leading-6 tracking-normal flex-grow md:text-left text-center">
        {review.text}
      </p>

      {/* Avatar and Info */}
      <div className="flex items-center mt-auto md:pt-8 pt-5 md:flex-row flex-col">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-20 h-20 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col md:items-start pt-4 md:pt-0 items-center">
          <span className="font-satoshi font-medium lg:text-[24px] text-[14px] leading-6  lg:leading-8 tracking-normal">
            {review.name}
          </span>
          <span className="font-inter font-normal lg:text-[24px] text-[14px] leading-6 lg:leading-8 tracking-normal">
            {review.place}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;