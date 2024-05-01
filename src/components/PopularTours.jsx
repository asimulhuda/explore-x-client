import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import PopularToursCard from "./PopularToursCard";

const PopularTours = ({ singleTourCard }) => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-16 space-y-10">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="lg:text-3xl text-2xl font-bold">Popular Tours</h2>
        <Link to="/tourlist" className="text-[#FF9369] flex gap-2">
          View All Tours <MdOutlineArrowRightAlt className="text-2xl" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {singleTourCard.slice(0, 6).map((singleCard) => (
          <PopularToursCard
            key={singleCard._id}
            singleCard={singleCard}
          ></PopularToursCard>
        ))}
      </div>
    </div>
  );
};

export default PopularTours;
