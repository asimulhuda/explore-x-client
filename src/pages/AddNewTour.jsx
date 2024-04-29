import { Button, Input, Textarea } from "@material-tailwind/react";

const AddNewTour = () => {
  const handleAddNewTour = (e) => {
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
    // const userName = form.userName.value;
    // const userEmail = form.userEmail.value;

    console.log(
      image,
      touristSpotName,
      countryName,
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear
    );
    form.reset();
  };

  return (
    <div className="">
      <div className="page-hero-bg">
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 h-[300px] flex flex-col justify-center text-white">
          <h2 className="lg:text-[54px] text-[40px] font-bold">Add New Tour</h2>
          <p className="text-lg">Justo Vulputate Vehicula</p>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 space-y-10">
          {/* Modal header */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-c">
              Add New Tour
            </h3>
          </div>
          {/* Modal body */}
          <form onSubmit={handleAddNewTour}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <Input label="Image URL" name="image" type="url" required />
              <Input
                label="Tourist Spot Name"
                name="touristSpotName"
                type="text"
                required
              />
              <select name="countryName" className="select select-bordered">
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
              <Input label="Location" type="text" name="location" required />
              <Input
                label="Average Cost"
                type="number"
                name="averageCost"
                required
              />
              <select
                label="Seasonality"
                name="seasonality"
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
                required
              />
              <Input
                label="Total Visitors Per Year"
                type="number"
                name="totalVisitorsPerYear"
                required
              />
              <div className="sm:col-span-2">
                <Textarea label="Short Description" required />
              </div>
            </div>
            <Button size="lg" className="w-full" type="submit">
              Add Tour
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewTour;
