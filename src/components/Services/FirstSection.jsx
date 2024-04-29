const FirstSection = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/1291766/pexels-photo-1291766.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="lg:w-1/2 dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 lg:pl-20 lg:pr-80 p-6 dark:bg-gray-50 ">
          <span className="text-lg  italic dark:text-gray-600">Our Story</span>
          <h3 className="text-4xl font-bold">A Little About Us</h3>
          <p className="my-6 text-[#8c8c8c] text-inherit">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/415958/pexels-photo-415958.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className=" dark:bg-gray-500 aspect-video lg:w-1/2"
        />
        <div className="flex flex-col justify-center lg:pr-20 lg:pl-80 flex-1 p-6 dark:bg-gray-50">
          <span className="text-lg  italic dark:text-gray-600">Philosophy</span>
          <h3 className="text-4xl font-bold">Our Top Missions</h3>
          <p className="my-6 text-[#8c8c8c] text-inherit">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/773473/pexels-photo-773473.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="dark:bg-gray-500 aspect-video lg:w-1/2"
        />
        <div className="flex flex-col justify-center flex-1 lg:pl-20 lg:pr-80 p-6 dark:bg-gray-50">
          <span className="text-lg  italic dark:text-gray-600">Strategy</span>
          <h3 className="text-4xl font-bold">We Provide Solutions</h3>
          <p className="my-6 text-[#8c8c8c] text-inherit">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
