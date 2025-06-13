import React from 'react';
import {Section} from '../ui/Section';
import ProductSwiper from '../ui/ProductSwiper';
import {ProductItemFragment} from 'storefrontapi.generated';
import { EffectType } from '~/type';

const awardWinningProducts: any[] = [
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
        description: 'Skin-loving comfort for clearer skin and smoother hair.',
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
        description: 'Full-body softness that hydrates skin and enhances deep sleep.',
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
        description: 'Breathable, skin-soothing comfort with a refined and elevated feel.',
    },
    {
        id: 'essentials-set',
        title: 'Essentials Set',
        featuredImage: {
            url: '/img_pillowcase.png',
            altText: 'Essentials Set',
        },
        priceRange: {
            minVariantPrice: {amount: '59', currencyCode: 'USD'},
            maxVariantPrice: {amount: '70', currencyCode: 'USD'},
        },
        handle: 'essentials-set',
        description: 'Includes pillowcases and sheets for head-to-toe comfort and deeper sleep',
    },
    {
        id: 'complete-sleep-set',
        title: 'Complete Sleep Set',
        featuredImage: {
            url: '/img_pillowcase.png',
            altText: 'Pillowcases',
        },
        priceRange: {
            minVariantPrice: {amount: '59', currencyCode: 'USD'},
            maxVariantPrice: {amount: '70', currencyCode: 'USD'},
        },
        handle: 'pillowcases',
        description: 'Includes pillowcases, sheets, and a duvet cover. Clinically backed comfort in one complete set.',
    }
];
export default function SectionProduct({title, className}: {title?: string; className?: string}) {
  return (
    <section
      className={`pt-[64px] lg:py-[100px] lg:pb-[64px] bg-background-1 lg:px-[64px] px-[12px]  ${className || ''}`}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:gap-y-[32px]">
        <h2 className="lg:text-[48px] text-2xl lg:leading-[64px] text-neutral-5 font-medium text-left md:text-center">
          {title}
        </h2>

        <ProductSwiper products={awardWinningProducts} type={EffectType.FULL_MASK} />
      </div>
    </section>
  );
}
