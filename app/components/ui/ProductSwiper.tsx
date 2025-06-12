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


export default function ProductSwiper({
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
        '(min-width: 1024px)': {
          slides: {perView: 3.5, spacing: 10},
        },
      },
      slides: {
        origin: 'auto',
        perView: 3.5,
        spacing: 32,
      },
    },
    [],
  );

  return (
    <div className="">
      <div ref={sliderRef} className="keen-slider">
        {products.map((item) => (
          <div className="keen-slider__slide" key={item.id}>
            {type === EffectType.FULL_MASK && <ProductDetail product={item} />}
            {type === EffectType.HALF_MASK && <ProductItemSwiper product={item} />}
          </div>
        ))}
      </div>
    </div>
  );
}
