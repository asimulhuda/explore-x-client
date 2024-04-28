import { Button } from "@material-tailwind/react";
import FirstSection from "../components/Services/FirstSection";
import SeconfSection from "../components/Services/SeconfSection";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="page-hero-bg">
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 h-[400px] flex flex-col justify-center text-white">
          <h2 className="lg:text-[54px] text-[40px] font-bold">
            Services We Provide
          </h2>
          <p className="text-lg text-[#999999] italic">
            A small river named Duden flows by their place.
          </p>
        </div>
      </div>
      <FirstSection></FirstSection>
      <SeconfSection></SeconfSection>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-16 flex lg:flex-row flex-col justify-between space-y-6">
        <div className="flex flex-col space-y-4 lg:w-2/3">
          <h1 className="text-3xl font-bold leading-none">
            Interested in our services now?
          </h1>
          <p className="text-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
        <Link to="/contact">
          <Button size="lg" className="bg-[#F87150]">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
