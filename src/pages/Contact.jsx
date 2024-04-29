import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div>
      <div className="page-hero-bg">
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 h-[300px] flex flex-col justify-center text-white">
          <h2 className="lg:text-[54px] text-[40px] font-bold">CONTACT US</h2>
          <p className="text-lg">Get Intouch</p>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:mx-auto my-10 mx-5">
        <div className="flex lg:flex-row flex-col h-full text-white lg:space-y-0 space-y-6 gap-6">
          <div className="bg-[#F87150] p-10 lg:w-1/3">
            <h2 className="mb-10 font-bold text-2xl before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Contact Info's
            </h2>
            <p className="font-bold py-8 border-b border-white">
              Location Address
              <span className="font-normal text-xs block">
                Romada, 16/A, YoYo City, USA
              </span>
            </p>
            <p className="font-bold py-8 border-b border-white">
              Phone Number
              <span className="font-normal text-xs block">
                +889 (909) 567 87 9
              </span>
            </p>
            <p className="font-bold py-8 border-b border-white">
              Email Address
              <span className="font-normal text-xs block">
                example@example.com
              </span>
            </p>
            <p className="font-bold py-8 border-b border-white">
              Web Address
              <span className="font-normal text-xs block">
                zigzagexampl.com
              </span>
            </p>
          </div>
          <div className="bg-[#F8715099] lg:p-14 p-8 lg:w-2/3">
            <h2 className="mb-14 font-bold text-4xl before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Leave us your info
            </h2>
            <form>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 text-black bg-white rounded-full px-6 placeholder:text-xs"
                    aria-placeholder="Votre nom"
                    placeholder="First Name"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    className="py-4 text-black bg-white rounded-full px-6 placeholder:text-xs"
                    aria-placeholder="Votre nom"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 text-black bg-white rounded-full px-6 placeholder:text-xs"
                    aria-placeholder="Votre nom"
                    placeholder="Email Adresse"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    className="py-4 text-black bg-white rounded-full px-6 placeholder:text-xs"
                    aria-placeholder="Votre nom"
                    placeholder="Subjet"
                  ></input>
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  className="w-full text-black rounded-2xl placeholder:text-xs px-6 py-4"
                  placeholder="Votre message ici"
                  name=""
                  id=""
                  rows="8"
                ></textarea>
              </div>
              <div className="">
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
