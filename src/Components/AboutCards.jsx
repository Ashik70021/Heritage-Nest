import image1 from "../assets/images/about1.jpg"
import image2 from "../assets/images/about2.jpg"
const AboutCards = () => {
    return (
        <div className="max-w-7xl mx-auto mb-40">
            {/* 1st card */}
            <div className="relative mx-auto mb-44">
                <img src={image1} alt="Property 1" className="brightness-50 w-[1000px] rounded-md h-[500px] mb-4 md:mb-0" />
                <div className="absolute rounded-md top-[390px] left-[700px] w-38 h-50 p-8 bg-[#ECF5FF]">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                        <h1 className="text-xl font-semibold text-[#EE6611]">Our Story</h1>
                    </div>
                    <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Efficient and Transparent <br />
                        Home Buying Solutions</h1>
                    <p className="text-xl font-semibold text-[#6B7280]">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
                </div>
            </div>

            {/* 2nd card */}
            <div className="relative mx-auto">
                <div className="absolute rounded-md z-10 top-[390px] right-[700px] w-38 h-50 p-12 bg-[#FDF0E7]">
                    <div className="flex gap-2 items-center mb-2">
                        <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                        <h1 className="text-xl font-semibold text-[#EE6611]">Our Story</h1>
                    </div>
                    <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Efficient and Transparent <br />
                        Home Buying Solutions</h1>
                    <p className="text-xl font-semibold text-[#6B7280]">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
                </div>
                <img src={image2} alt="Property 2" className="brightness-50 w-[1000px] rounded-md h-[500px] mb-4 md:mb-0 ml-72" />
            </div>

        </div>
    );
};

export default AboutCards;