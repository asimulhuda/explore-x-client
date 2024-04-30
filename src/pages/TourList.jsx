import { useLoaderData } from "react-router-dom";
import PopularToursCard from "../components/PopularToursCard";

const TourList = () => {
  const singleToureCard = useLoaderData();
  return (
    <div>
      <div className="destinations-hero-bg h-[300px] justify-center flex flex-col items-center">
        <h2 className="lg:text-[54px] text-[40px] font-bold text-white">
          All Tours
        </h2>
        <p className="text-lg text-white italic">Find your Dream Tour</p>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {singleToureCard.map((singleCard) => (
            <PopularToursCard
              key={singleCard._id}
              singleCard={singleCard}
            ></PopularToursCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourList;
