import {Section} from '~/components/ui/Section';
import {ProcessStep} from '~/components/about/ProcessStep';
import {LocationImage} from '~/components/about/LocationImage';
import {ImpactCard} from '~/components/about/ImpactCard';
import {ProductSwiper} from '~/components/ui/ProductSwiper';
import SectionNature from '~/components/about/SectionNature';
import SectionLocation from '~/components/about/SectionLocation';
import SectionProf from '~/components/about/SectionProf';
import SectionAward from '~/components/about/SectionAward';
import SectionHero from '~/components/about/SectionHero';
import DreameySection from '~/components/about/DreameySection';

const About = () => {
  return (
    <div className="bg-background-2">
      <SectionHero />
      <DreameySection />
      <SectionNature />
      <SectionLocation />
      <SectionProf />
      <SectionAward />
    </div>
  );
};

export default About;
