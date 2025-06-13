import {useEffect} from 'react';
import SectionQA from '~/components/pillow-showcase/SectionQA';
import SectionHero from '~/components/pillow-showcase/SectionHero';
import SectionProduct from '~/components/shop/SectionProduct';
import SectionSlogan from '~/components/pillow-showcase/SectionSlogan';
import SectionDesign from '~/components/pillow-showcase/SectionDesign';
import SectionReview from '~/components/pillow-showcase/SectionReview';
import SectionResult from '~/components/pillow-showcase/SectionResult';
import SectionProductDetail from '~/components/pillow-showcase/SectionProductDetail';


const Pillowcase= () => {

  return (
    <div className="bg-background-2 min-h-screen">
      <SectionProductDetail />
      <SectionResult />
      <SectionReview/>
      <SectionDesign />
      <SectionSlogan />
      <SectionHero />
      <SectionQA />
      <SectionProduct
        className="lg:pt-[100px]"
        title="AWARD-WINNING SLEEP COLLECTION"
      />
    </div>
  );
};

export default Pillowcase
