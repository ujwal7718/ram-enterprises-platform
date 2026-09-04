import SolutionsHero from '../components/sections/solutions/SolutionsHero';
import SolutionPortfolio from '../components/sections/solutions/SolutionPortfolio';
import WaterTreatment from '../components/sections/solutions/WaterTreatment';
import WastewaterTreatment from '../components/sections/solutions/WastewaterTreatment';
import AdvancedTreatment from '../components/sections/solutions/AdvancedTreatment';
import IndustrialEngineering from '../components/sections/solutions/IndustrialEngineering';
import TurnkeyExecution from '../components/sections/solutions/TurnkeyExecution';
import TechnicalSupport from '../components/sections/solutions/TechnicalSupport';
import OperationsAMC from '../components/sections/solutions/OperationsAMC';
import ProvenExperience from '../components/sections/solutions/ProvenExperience';
import Industries from '../components/sections/solutions/Industries';
import SolutionsCTA from '../components/sections/solutions/SolutionsCTA';

const Solutions = () => {
  return (
    <>
      <SolutionsHero />
      <SolutionPortfolio />
      <WaterTreatment />
      <WastewaterTreatment />
      <AdvancedTreatment />
      <IndustrialEngineering />
      <TurnkeyExecution />
      <TechnicalSupport />
      <OperationsAMC />
      <ProvenExperience />
      <Industries />
      <SolutionsCTA />
    </>
  );
};

export default Solutions;
