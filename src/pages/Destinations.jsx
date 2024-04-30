import { useLoaderData } from "react-router-dom";
import DestinationsCard from "../components/Destinations/DestinationsCard";

const Destinations = () => {
  const destinations = useLoaderData();
  return (
    <div>
      <div className="destinations-hero-bg h-[300px] justify-center flex flex-col items-center">
        <h2 className="lg:text-[54px] text-[40px] font-bold text-white">
          Destinations
        </h2>
        <p className="text-lg text-white italic">Find your right Destination</p>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {destinations.map((destination) => (
            <DestinationsCard
              key={destination.id}
              destination={destination}
            ></DestinationsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
