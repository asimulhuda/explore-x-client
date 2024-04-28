import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const PopularDestinations = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-16 space-y-10">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="lg:text-3xl text-2xl font-bold">Popular Destinations</h2>
        <Link to="/destinations" className="text-[#FF9369] flex gap-2">
          View All Destinations <MdOutlineArrowRightAlt className="text-2xl" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-500 transition duration-300 ease-in-out group-hover:opacity-300 dark:border-gray-700 dark:opacity-70">
            <img
              src="https://images.pexels.com/photos/705782/pexels-photo-705782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 space-y-2">
            <h4 className="font-serif text-2xl font-bold text-white shadow-xl">
              Vanish
            </h4>
            <h4 className="text-sm font-light text-gray-200 shadow-xl">
              A Little Paradise in Italy
            </h4>
            <Link
              to="/destinations"
              className="text-[#FF9369] flex gap-2 font-semibold"
            >
              View All Destinations{" "}
              <MdOutlineArrowRightAlt className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-500 transition duration-300 ease-in-out group-hover:opacity-300 dark:border-gray-700 dark:opacity-70">
            <img
              src="https://images.pexels.com/photos/548077/pexels-photo-548077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 space-y-2">
            <h4 className="font-serif text-2xl font-bold text-white shadow-xl">
              Paris
            </h4>
            <h4 className="text-sm font-light text-gray-200 shadow-xl">
              A Little Paradise in France
            </h4>
            <Link
              to="/destinations"
              className="text-[#FF9369] flex gap-2 font-semibold"
            >
              View All Destinations{" "}
              <MdOutlineArrowRightAlt className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-500 transition duration-300 ease-in-out group-hover:opacity-300 dark:border-gray-700 dark:opacity-70">
            <img
              src="https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 space-y-2">
            <h4 className="font-serif text-2xl font-bold text-white shadow-xl">
              Barcelona
            </h4>
            <h4 className="text-sm font-light text-gray-200 shadow-xl">
              A Little Paradise in Spain
            </h4>
            <Link
              to="/destinations"
              className="text-[#FF9369] flex gap-2 font-semibold"
            >
              View All Destinations{" "}
              <MdOutlineArrowRightAlt className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
