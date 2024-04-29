import { Button, Checkbox, Input, Textarea } from "@material-tailwind/react";
import { FaRegHandPointRight } from "react-icons/fa";
import { GrStatusUnknown } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
const Details = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 space-y-10">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="text-3xl">Cozy Apartment in Downtown</h3>
          <h4 className="flex items-center gap-3">
            <GrStatusUnknown />
            rent
          </h4>
          <h4 className="flex items-center gap-3">
            <IoLocationOutline />
            New York City, New York
          </h4>
        </div>
        <h4 className="text-3xl">$1,200/month</h4>
      </div>

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[850px] space-y-10">
          <img
            src="https://images.pexels.com/photos/18768356/pexels-photo-18768356/free-photo-of-windows-of-riverside-stilt-houses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="w-full"
          />
          <div className="px-10 py-11 rounded-lg bg-[#FEF1ED] text-[18px]">
            <div className="pb-8 border-b border-gray-600">
              <p>Details</p>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-6">
              <h4 className="flex items-center gap-3">
                <MdOutlineSegment />
                City Apartments
              </h4>
              <h4 className="flex items-center gap-3">
                <GrStatusUnknown />
                New York City, New York
              </h4>
              <h4 className="flex items-center gap-3">
                <IoMdResize />
                800 sq ft
              </h4>
              <div className="flex items-start gap-3">
                <FaRegHandPointRight />
                <ul className="">
                  <li>living room</li>
                  <li>living room</li>
                  <li>living room</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-10 py-11 rounded-lg bg-[#FEF1ED] text-lg">
            <div className="pb-8 border-b border-gray-600">
              <p>Description</p>
            </div>
            <div className="pt-6">
              <p>
                Charming apartment in the heart of downtown, with easy access to
                shops, restaurants, and public transportation. Located in New
                York City, New York, this cozy apartment offers convenience and
                comfort for urban living. The well-appointed living space
                includes a kitchen and balcony, providing a perfect retreat in
                the bustling city. Ideal for professionals or couples seeking a
                vibrant lifestyle, this apartment combines modern amenities with
                a prime location, making it a desirable choice for city
                dwellers.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[350px]">
          <div className="sticky top-32 px-7 py-10 bg-[#FEF1ED] rounded-lg space-y-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                Want to Know More About Package ?
              </h2>
              <span className="text-lg dark:text-gray-600">Contact Us</span>
            </div>
            <form className="space-y-2">
              <Input
                className="rounded-lg bg-white"
                type="text"
                label="Name"
                required
              />
              <Input
                className="rounded-lg bg-white"
                type="number"
                label="Phone"
                required
              />
              <Input
                className="rounded-lg bg-white"
                type="email"
                label="Email"
                required
              />
              <Textarea className="rounded-lg bg-white" label="Massage" />

              <Checkbox
                label="By submitting this form I agree to Terms of Use"
                required
              />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
