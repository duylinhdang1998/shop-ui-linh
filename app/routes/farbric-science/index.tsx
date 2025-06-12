import SectionAward from "~/components/about/SectionAward";
import SectionHero from "~/components/farbic-science/SectionHero";
import SectionQuote from "~/components/farbic-science/SectionQuote";
import SectionReview from "~/components/farbic-science/SectionReview";
import SectionTable from "~/components/farbic-science/SectionTable";
import SectionTechnology from "~/components/farbic-science/SectionTechnology";

export default function FabricSciencePage() {
  return (
    <div className="">
       <SectionHero />
       <SectionQuote />
       <SectionTable />
       <SectionTechnology />
       <SectionReview />
       <SectionAward />
    </div>
  );
}