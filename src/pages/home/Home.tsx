import Hero from "./components/Hero/Hero";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import Testmonial from "./components/testmonial/Testmonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Hero/>
      <Testmonial />
    </div>
  );
};

export default Home;
