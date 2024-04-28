import { FaEarthAfrica, FaUsersGear } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";

const Featured = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10 bg-[#F97553] items-center text-white lg:p-10 p-6 sm:space-y-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      <div className="flex gap-6">
        <div>
          <FaEarthAfrica className="text-4xl" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">700+ DESTINATIONS</h4>
          <p>Our expert team handpicked all destinations in this site</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div>
          <RiDiscountPercentLine className="text-4xl" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">BEST PRICE GUARANTEE</h4>
          <p>Price match within 48 hours of order confirmation</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div>
          <FaUsersGear className="text-4xl" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">TOP NOTCH SUPPORT</h4>
          <p>We are here to help, before, during, and even after your trip.</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
