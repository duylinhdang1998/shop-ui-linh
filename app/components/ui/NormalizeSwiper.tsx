import React from 'react';
import {useKeenSlider} from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module
import {ProductItem} from '../ProductItem';
import {ProductItemFragment} from 'storefrontapi.generated';
import ProductItemSwiper from './ProductItemSwiper';
import ProductDetail from './ProductDetail';
import { EffectType } from '~/type';

interface Props {
  products: ProductItemFragment[];
  className?: string;
  type?: EffectType
}


export default function NormalizeSwiper({
  products,
  className,
  type = EffectType.HALF_MASK,
}: Props) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
      loop: false,
      breakpoints: {
        '(min-width: 320px)': {
          slides: {perView: 1.5, spacing: 20},
        },
        '(min-width: 724px)': {
          slides: {perView: 2.5, spacing: 20},
        },
        '(min-width: 1024px)': {
          slides: {perView: 3.5, spacing: 10},
        },
      },
      slides: {
        origin: 'auto',
        perView: 3.5,
        spacing: 2,
      },
    },
    [],
  );

  return (
    <div className="">
      <div ref={sliderRef} className="keen-slider">
        {products.map((item) => (
          <div className="keen-slider__slide" key={item.id}>
              <img
                src={item.featuredImage?.url}
                alt={'product'}
                className="w-[280px] h-[280px]  rounded-lg"
                />
          </div>
        ))}
      </div>
    </div>
  );
}
