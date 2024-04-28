import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/998735/pexels-photo-998735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-80 dark:bg-gray-500 aspect-video hover:scale-110 duration-300"
        />
        <div className="flex flex-col justify-center items-center flex-1 p-6 dark:bg-gray-50 bg-[#FA7654] text-white space-y-4">
          <h3 className="text-xl font-bold text-[#fed7c8]">
            Enjoy Summer Deals
          </h3>
          <h4 className="text-3xl font-bold">Up to 40% Discount!</h4>
          <Link to="/services">
            <Button size="lg">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discount;
