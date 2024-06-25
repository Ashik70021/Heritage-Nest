import image from "../assets/images/meet.jpg"
const MeetTheTeam = () => {
    return (
        <div className="max-w-7xl mx-auto mt-24 flex justify-between">
            <div>
                <div className="flex gap-2 items-center mb-4">
                    <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                    <h1 className="text-xl font-semibold text-[#EE6611]">Meet the Team For Book Consultation</h1>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-[#111827]">Meet the stewards of your <br /> heritage journey</h1>
                    <p className="text-xl font-medium text-[#6B7280] mt-4">each member an embodiment of expertise and warmth, dedicated to guiding you <br /> home, every step of the way.</p>
                </div>
                <button className="mt-12 flex gap-2 items-center bg-[#005EAE] text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition duration-300">
                    Book Consultation Now
                </button>
            </div>
            <div>
                <img className="w-[384px] h-[304px]" src={image} alt="" />
            </div>
        </div>
    );
};

export default MeetTheTeam;