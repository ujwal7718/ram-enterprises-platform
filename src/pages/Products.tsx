import ProductsHero from '../components/sections/products/ProductsHero';
import ProductOverview from '../components/sections/products/ProductOverview';
import WaterTreatmentProducts from '../components/sections/products/WaterTreatmentProducts';
import WastewaterProducts from '../components/sections/products/WastewaterProducts';
import AdvancedTreatmentProducts from '../components/sections/products/AdvancedTreatmentProducts';
import FiltrationSystems from '../components/sections/products/FiltrationSystems';
import PackagedSystems from '../components/sections/products/PackagedSystems';
import EngineeringProducts from '../components/sections/products/EngineeringProducts';
import ProductSelection from '../components/sections/products/ProductSelection';
import ProductsCTA from '../components/sections/products/ProductsCTA';

const Products = () => {
  return (
    <>
      <ProductsHero />
      <ProductOverview />
      <WaterTreatmentProducts />
      <WastewaterProducts />
      <AdvancedTreatmentProducts />
      <FiltrationSystems />
      <PackagedSystems />
      <EngineeringProducts />
      <ProductSelection />
      <ProductsCTA />
    </>
  );
};

export default Products;
