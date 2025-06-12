import {useEffect} from 'react';
import SectionHero from '~/components/shop/SectionHero';
import SectionProduct from '~/components/shop/SectionProduct';


const Shop = () => {

  return (
    <div className="bg-background-2 min-h-screen">
      <SectionHero />
      <SectionProduct
        className="lg:pt-[100px]"
        title="AWARD-WINNING SLEEP COLLECTION"
      />
      <SectionProduct className="lg:pt-0" title="BUNDLE AND SAVE" />
    </div>
  );
};

export default Shop;
