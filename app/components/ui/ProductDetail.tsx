import {Image} from '@shopify/hydrogen';
import React from 'react';
import {ProductItemFragment} from 'storefrontapi.generated';
import {Rating} from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import ButtonUnderline from './ButtonUnderline';

interface Props {
product: ProductItemFragment & { description: string } | any;
}

const starDrawing = (
  <path d="M28.6669 14.873L23.3015 19.4899L24.9087 26.3635C24.9938 26.7229 24.9695 27.099 24.839 27.4448C24.7084 27.7906 24.4774 28.0908 24.1747 28.3078C23.8721 28.5249 23.5112 28.6491 23.1373 28.6651C22.7634 28.681 22.3931 28.5879 22.0725 28.3975L15.9921 24.7613L9.92475 28.3975C9.60422 28.5879 9.23385 28.681 8.85996 28.6651C8.48607 28.6491 8.12524 28.5249 7.82258 28.3078C7.51993 28.0908 7.28889 27.7906 7.15833 27.4448C7.02778 27.099 7.00351 26.7229 7.08856 26.3635L8.69343 19.4969L3.3268 14.873C3.04295 14.6317 2.8377 14.313 2.73679 13.9571C2.63587 13.6012 2.64378 13.2238 2.75953 12.8723C2.87528 12.5208 3.09371 12.2108 3.38743 11.9812C3.68114 11.7516 4.03708 11.6126 4.4106 11.5817L11.4844 10.9776L14.2457 4.48395C14.3899 4.14322 14.6331 3.85217 14.9447 3.64745C15.2563 3.44273 15.6224 3.3335 15.9969 3.3335C16.3713 3.3335 16.7374 3.44273 17.049 3.64745C17.3607 3.85217 17.6039 4.14322 17.7481 4.48395L20.5176 10.9776L27.5891 11.5817C27.9626 11.6126 28.3185 11.7516 28.6122 11.9812C28.906 12.2108 29.1244 12.5208 29.2401 12.8723C29.3559 13.2238 29.3638 13.6012 29.2629 13.9571C29.162 14.313 28.9567 14.6317 28.6729 14.873H28.6669Z" />
);
export default function ProductDetail({product}: Props) {
  return (
    <div className="group flex flex-col gap-y-5 lg:gap-y-8">
      <div className=" w-full  overflow-hidden relative rounded-2xl">
        <Image
          src={product.featuredImage?.url}
          alt={product.featuredImage?.altText as string}
          width={560}
          height={560}
          className="rounded-2xl w-full h-full transition-transform duration-500 group-hover:scale-120"
        />
        <div style={{backgroundColor: 'rgba(240, 235, 223, 0.5)'}} className="absolute top-full left-0 w-full flex flex-col justify-center items-center h-full transition-transform duration-400 group-hover:translate-y-[-100%] rounded-b-2xl gap-4 p-3">
          <ul className="list-disc px-5 font-family-Inter font-weight-400 text-md leading-xl tracking-normal">
            <li className="m-0">Reduces acne-causing bacteria by 200%</li>
            <li className="m-0">Ultra-smooth fibers minimize sleep creases</li>
            <li className="m-0">Reduces hair breakage by 30%</li>
          </ul>
         <ButtonUnderline className='py-2 px-4'>SHOP NOW</ButtonUnderline>
        </div>
      </div>
      <div className="text-center flex flex-col gap-y-2 lg:gap-y-4 justify-center items-center">
        <span className="text-xl lg:text-[40px] font-medium text-neutral-5">
          {product.title}
        </span>
        <span className="font-family-Inter font-weight-400 text-[24px] leading-2xl tracking-normal text-center">
          {product.description}
        </span>
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
        <span className="text-base lg:text-[32px] text-neutral-5 font-medium ">
          From ${product.priceRange.minVariantPrice.amount}{' '}
          <span className="text-[#666] line-through">
            ${product.priceRange.maxVariantPrice.amount}
          </span>
        </span>
      </div>
    </div>
  );
}
