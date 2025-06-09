import React from 'react';
import {Section} from '../ui/Section';
import ProductSwiper from '../ui/ProductSwiper';
import {ProductItemFragment} from 'storefrontapi.generated';

const awardWinningProducts: ProductItemFragment[] = [
  {
    id: 'pillowcases',
    title: 'Pillowcases',
    featuredImage: {
      url: '/img_pillowcase.png',
      altText: 'Pillowcases',
    },
    priceRange: {
      minVariantPrice: {amount: '59', currencyCode: 'USD'},
      maxVariantPrice: {amount: '70', currencyCode: 'USD'},
    },
    handle: 'pillowcases',
  },
  {
    id: 'sheets',
    title: 'Sheets',
    featuredImage: {
      url: '/img_pillowcase.png',
      altText: 'Pillowcases',
    },
    priceRange: {
      minVariantPrice: {amount: '119', currencyCode: 'USD'},
      maxVariantPrice: {amount: '140', currencyCode: 'USD'},
    },
    handle: 'pillowcases',
  },
  {
    id: 'duevts-cover',
    title: 'Duvets Cover',
    featuredImage: {
      url: '/img_pillowcase.png',
      altText: 'Pillowcases',
    },
    priceRange: {
      minVariantPrice: {amount: '59', currencyCode: 'USD'},
      maxVariantPrice: {amount: '70', currencyCode: 'USD'},
    },
    handle: 'pillowcases',
  },
  {
    id: 'duevts-cover-2',
    title: 'Duvets Cover 2',
    featuredImage: {
      url: '/img_pillowcase.png',
      altText: 'Pillowcases',
    },
    priceRange: {
      minVariantPrice: {amount: '59', currencyCode: 'USD'},
      maxVariantPrice: {amount: '70', currencyCode: 'USD'},
    },
    handle: 'pillowcases',
  },
];
export default function SectionAward() {
  return (
    <section className="py-[64px] lg:py-[100px] bg-background-1">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:gap-y-[64px]">
        <h2 className="lg:text-[48px] text-2xl lg:leading-[64px] text-neutral-5 font-medium text-center">
          AWARD-WINNING SLEEP COLLECTION
        </h2>

        <ProductSwiper products={awardWinningProducts} />
      </div>
    </section>
  );
}
