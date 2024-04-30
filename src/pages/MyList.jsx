import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import MyListCard from "../components/My list/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-tour-list/${user?.email}`)
      .then((data) => setTourList(data.data));
  }, []);

  return (
    <div>
      <div>
        <div className="destinations-hero-bg h-[300px] justify-center flex flex-col items-center">
          <h2 className="lg:text-[54px] text-[40px] font-bold text-white">
            My All Tours
          </h2>
          <p className="text-lg text-white italic">
            All your tours that you have added
          </p>
        </div>
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {tourList.map((singleCard) => (
              <MyListCard
                key={singleCard._id}
                singleCard={singleCard}
              ></MyListCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
