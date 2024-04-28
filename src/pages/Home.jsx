import Hero from "../components/Hero";
import Featured from "../components/Featured";
import PopularDestinations from "../components/PopularDestinations";
import Discount from "../components/Discount";
import PopularTours from "../components/PopularTours";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <PopularDestinations></PopularDestinations>
      <Discount></Discount>
      <PopularTours></PopularTours>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
