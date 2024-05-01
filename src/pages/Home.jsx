import Hero from "../components/Hero";
import Featured from "../components/Featured";
import PopularDestinations from "../components/PopularDestinations";
import Discount from "../components/Discount";
import PopularTours from "../components/PopularTours";
import Reviews from "../components/Reviews";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const singleTourCard = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <PopularDestinations></PopularDestinations>
      <Discount></Discount>
      <PopularTours singleTourCard={singleTourCard}></PopularTours>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
