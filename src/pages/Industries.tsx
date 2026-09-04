import IndustriesHero from '../components/sections/industries/IndustriesHero';
import IndustryIntroduction from '../components/sections/industries/IndustryIntroduction';
import IndustryDirectory from '../components/sections/industries/IndustryDirectory';
import EngineeringApplications from '../components/sections/industries/EngineeringApplications';
import EngineeringWorkflow from '../components/sections/industries/EngineeringWorkflow';
import IndustriesCTA from '../components/sections/industries/IndustriesCTA';

const Industries = () => {
  return (
    <>
      <IndustriesHero />
      <IndustryIntroduction />
      <IndustryDirectory />
      <EngineeringApplications />
      <EngineeringWorkflow />
      <IndustriesCTA />
    </>
  );
};

export default Industries;
