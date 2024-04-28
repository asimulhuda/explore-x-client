import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";
import ThirdSection from "../components/About/ThirdSection";

const About = () => {
  const teams = [
    {
      id: 1,
      name: "JEANETTE KINGSTON",
      image:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: "Chief Executive Officer",
    },
    {
      id: 2,
      name: "ALAN COOPER",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: "Vice President",
    },
    {
      id: 3,
      name: "JOHN SMITHY",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: "Chief Financial Officer",
    },
    {
      id: 4,
      name: "PETER SANDLER",
      image:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: "Senior Engineer",
    },
    {
      id: 5,
      name: "RICARDO GOMEZ",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: "HR Manager",
    },
    {
      id: 6,
      name: "JAMES SMITH",
      image:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
      position: "Chief Technology Officer",
    },
  ];
  return (
    <div>
      <div className="page-hero-bg">
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 h-[300px] flex flex-col justify-center text-white">
          <h2 className="lg:text-[54px] text-[40px] font-bold">About Us</h2>
          <p className="text-lg">Justo Vulputate Vehicula</p>
        </div>
      </div>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <div className="bg-[#F0F0F0]">
        <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-16 space-y-10">
          <h2 className="lg:text-[54px] text-[40px] font-bold text-center">
            Meet The Team
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {teams.map((team) => (
              <ThirdSection key={team.id} team={team}></ThirdSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
