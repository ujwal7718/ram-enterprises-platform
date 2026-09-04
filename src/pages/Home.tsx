import HeroSection from '../components/sections/HeroSection';
import CredibilityStrip from '../components/sections/CredibilityStrip';
import WhoWeAre from '../components/sections/WhoWeAre';
import CoreSolutions from '../components/sections/CoreSolutions';
import HowWeWork from '../components/sections/HowWeWork';
import FourRs from '../components/sections/FourRs';
import HomeFeaturedProjects from '../components/sections/HomeFeaturedProjects';
import Industries from '../components/sections/Industries';
import CtaSection from '../components/sections/CtaSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <WhoWeAre />
      <CoreSolutions />
      <HowWeWork />
      <HomeFeaturedProjects />
      <FourRs />
      <Industries />
      <CtaSection />
    </>
  );
};

export default Home;
