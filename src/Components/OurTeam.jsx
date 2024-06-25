import image1 from "../assets/images/team1.jpg"
import image2 from "../assets/images/team2.jpg"
import image3 from "../assets/images/team3.jpg"
const OurTeam = () => {
    return (
        <div className="max-w-7xl mx-auto mt-72">
            <div className="flex gap-2 items-center mb-4">
                <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                <h1 className="text-xl font-semibold text-[#EE6611]">Our Team</h1>
            </div>
            <h1 className="text-4xl font-bold text-[#111827] mb-16">Discover the Faces Behind Our Success</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                  <img className="w-[384px] h-[417px]" src={image1} alt="" />
                  <img className="w-[384px] h-[417px]" src={image2} alt="" />
                  <img className="w-[384px] h-[417px]" src={image3} alt="" />
            </div>
        </div>
    );
};

export default OurTeam;