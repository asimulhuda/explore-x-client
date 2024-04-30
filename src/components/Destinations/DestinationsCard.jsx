import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DestinationsCard = ({ destination }) => {
  const { name, image, description } = destination;

  return (
    <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-500 transition duration-300 ease-in-out group-hover:opacity-300 dark:border-gray-700 dark:opacity-70">
        <img
          src={image}
          className="destination-img animate-fade-in block h-full w-full scale-100 transform object-cover object-center transition duration-300 group-hover:scale-110"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 space-y-2">
        <h4 className="font-serif text-2xl font-bold text-white shadow-xl">
          {name}
        </h4>
        <h4 className="text-sm font-light text-gray-200 shadow-xl">
          {description}
        </h4>
        <Link
          to="/tourlist"
          className="text-[#FF9369] flex gap-2 font-semibold"
        >
          View All Tours <MdOutlineArrowRightAlt className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

DestinationsCard.propTypes = {
  destination: PropTypes.object,
};

export default DestinationsCard;
