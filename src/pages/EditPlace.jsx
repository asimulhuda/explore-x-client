import { Button, Input, Textarea } from "@material-tailwind/react";
import { info } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditPlace = () => {
  const { id } = useParams();
  const [singleDetail, setSingleDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://explore-x-server-nine.vercel.app/tourDetails/${id}`)
      .then((data) => setSingleDetail(data.data));
  }, [id]);

  const {
    image,
    touristSpotName,
    countryName,
    location,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    description,
  } = singleDetail;

  const handleUpdateTour = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const touristSpotName = form.touristSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const description = form.description.value;

    const newTour = {
      image,
      touristSpotName,
      countryName,
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      description,
    };

    fetch(`https://explore-x-server-nine.vercel.app/updateDetails/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTour),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            title: "Success!",
            text: "New Tour Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
            confirmButtonColor: "Green",
          });
        }
      });
  };

  return (
    <div className="">
      <div className="page-hero-bg">
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 h-[300px] flex flex-col justify-center text-white">
          <h2 className="lg:text-[54px] text-[40px] font-bold">
            Update Your tour details
          </h2>
          <p className="text-lg">Justo Vulputate Vehicula</p>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 space-y-10">
          {/* Modal header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-c">
              Update Tour details
            </h3>
          </div>
          {/* Modal body */}
          <form onSubmit={handleUpdateTour}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <Input
                label="Image URL"
                name="image"
                type="url"
                defaultValue={image}
                required
              />
              <Input
                label="Tourist Spot Name"
                name="touristSpotName"
                type="text"
                defaultValue={touristSpotName}
                required
              />
              <select
                name="countryName"
                defaultValue={countryName}
                className="select select-bordered"
              >
                <option disabled selected>
                  Select Country
                </option>
                <option>France</option>
                <option>Italy</option>
                <option>Spain</option>
                <option>England</option>
                <option>Netherlands</option>
                <option>Switzerland</option>
              </select>
              <Input
                label="Location"
                type="text"
                name="location"
                defaultValue={location}
                required
              />
              <Input
                label="Average Cost"
                type="number"
                name="averageCost"
                defaultValue={averageCost}
                required
              />
              <select
                label="Seasonality"
                name="seasonality"
                defaultValue={seasonality}
                className="select select-bordered"
              >
                <option disabled selected>
                  Seasonality
                </option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
                <option>Monsoon</option>
                <option>lat Autumn</option>
                <option>Winter</option>
              </select>
              <Input
                label="Travel Time"
                type="text"
                name="travelTime"
                defaultValue={travelTime}
                required
              />
              <Input
                label="Total Visitors Per Year"
                type="text"
                name="totalVisitorsPerYear"
                defaultValue={totalVisitorsPerYear}
                required
              />
              <div className="sm:col-span-2">
                <Textarea
                  label="Short Description"
                  name="description"
                  defaultValue={description}
                  required
                />
              </div>
            </div>
            <Button size="lg" className="w-full" type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
