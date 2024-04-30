import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PiClockCountdownBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ singleCard }) => {
  const { averageCost, touristSpotName, travelTime, image, _id } = singleCard;

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
      <Card className="rounded-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={image}
            className="w-full hover:scale-110 duration-300 h-[300px]"
          />
        </CardHeader>
        <CardBody className="space-y-4">
          <Typography variant="h4" color="blue-gray">
            {touristSpotName}
          </Typography>
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-3 gap-6">
              <PiClockCountdownBold className="text-[#f97150] text-2xl" />
              <span>{travelTime}</span>
            </div>
            <Typography className="font-extrabold text-[#f97150] text-2xl">
              ${averageCost}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="space-y-4">
          <Link to={`/details/${_id}`}>
            <Button size="lg" className="w-full bg-[#F97150]">
              View Details
            </Button>
          </Link>
          <div className="grid grid-cols-2 gap-6">
            <Link to={`/editplace/${_id}`}>
              <Button size="lg" className="w-full ">
                Update
              </Button>
            </Link>
            <Button
              onClick={() => handleDelete(_id)}
              size="lg"
              className="w-full"
              color="red"
            >
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyListCard;
