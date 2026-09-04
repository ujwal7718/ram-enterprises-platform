import AboutHero from '../components/sections/about/AboutHero';
import CompanyOverview from '../components/sections/about/CompanyOverview';
import Capabilities from '../components/sections/about/Capabilities';
import EngineeringProcess from '../components/sections/about/EngineeringProcess';
import WaterChallenge from '../components/sections/about/WaterChallenge';
import InHouseCapabilities from '../components/sections/about/InHouseCapabilities';
import VisionMission from '../components/sections/about/VisionMission';
import Values from '../components/sections/about/Values';
import FourRs from '../components/sections/FourRs'; // Reusing from Homepage
import Leadership from '../components/sections/about/Leadership';
import Locations from '../components/sections/about/Locations';
import StrategicRoadmap from '../components/sections/about/StrategicRoadmap';
import AboutCTA from '../components/sections/about/AboutCTA';

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <Capabilities />
      <EngineeringProcess />
      <WaterChallenge />
      <InHouseCapabilities />
      <VisionMission />
      <Values />
      <FourRs />
      <Leadership />
      <Locations />
      <StrategicRoadmap />
      <AboutCTA />
    </>
  );
};

export default About;
