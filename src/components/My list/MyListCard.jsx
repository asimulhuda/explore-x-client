import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Card, Typography } from "@material-tailwind/react";
import { MdPeopleOutline } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ singleCard }) => {
  const {
    averageCost,
    touristSpotName,
    travelTime,
    totalVisitorsPerYear,
    seasonality,
    image,
    _id,
  } = singleCard;

  const handleDelete = (_id) => {
    fetch(`https://explore-x-server-nine.vercel.app/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your tour has been deleted.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <Card shadow={false} className="rounded-lg border border-[#F97553] p-4">
        <div className="gap-3">
          <div className="rounded-lg">
            <img src={image} alt="" className="w-full h-[300px]" />
          </div>
          <div className="flex justify-between items-end">
            <div className="mt-4 space-y-4">
              <Typography color="blue-gray" className="mb-1 font-bold text-xl">
                {touristSpotName}
              </Typography>
              <div className="space-y-2">
                <h4 className="flex items-center gap-6">
                  <PiClockCountdownBold className="text-[#f97150] text-2xl" />
                  <span>{travelTime}</span>
                </h4>
                <h4 className="flex items-center gap-6">
                  <TiWeatherPartlySunny className="text-[#f97150] text-2xl" />
                  {seasonality}
                </h4>
                <h4 className="flex items-center gap-6">
                  <MdPeopleOutline className="text-[#f97150] text-2xl" />
                  {totalVisitorsPerYear}
                </h4>
              </div>
              <Typography className="font-extrabold text-[#f97150] text-2xl">
                ${averageCost}
              </Typography>
            </div>
            <div className="">
              <Link to={`/editplace/${_id}`}>
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  <PencilIcon className="h-4 w-4 text-gray-600" />
                  <Typography className="!font-semibold text-xs text-gray-600 md:block hidden">
                    Edit
                  </Typography>
                </Button>
              </Link>
              <Button
                onClick={() => handleDelete(_id)}
                size="sm"
                variant="text"
                color="red"
                className="flex items-center gap-2"
              >
                <TrashIcon className="h-4 w-4 text-red-500" />
                <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
                  delete
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyListCard;
