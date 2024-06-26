import { IoLocationOutline } from "react-icons/io5";
import image1 from "../assets/images/details1.jpg"
import image2 from "../assets/images/details2.jpg"
import image3 from "../assets/images/details3.jpg"
import image4 from "../assets/images/details4.jpg"
import Overview from "./Overview";
import BidProperty from "./BidProperty";
import Location from "./Location";
import { useLoaderData, useParams } from "react-router-dom";
const Details = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const property = properties.find(property => property.id === id)
    console.log(property, id)

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-12">
            {/* left side */}
            <div className="col-span-8">
                <div className="flex justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#010101]">{property.name}</h1>
                        <div className="flex items-center gap-2">
                            <IoLocationOutline className="text-xl text-[#EE6611]" />
                            <p className="text-lg font-medium text-[#606060]">{property.location}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-[#010101]">{property.amount}</h1>
                    </div>
                </div>

                {/* Images */}
                <div>
                    <img className="h-[400px] w-full" src={property.images[0]} alt="" />
                    <div className="grid grid-cols-8 gap-4 mt-4">
                        <div className="col-span-3 relative text-center group">
                            <img className="h-[160px] w-full brightness-100 transition duration-300 group-hover:brightness-50" src={property.images[1]} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xl">View more</span>
                            </div>
                        </div>
                        <div className="col-span-3 relative text-center group">
                            <img className="h-[160px] w-full brightness-100 transition duration-300 group-hover:brightness-50" src={property.images[2]} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xl">View more</span>
                            </div>
                        </div>
                        <div className="col-span-2 relative text-center group">
                            <img className="h-[160px] w-full brightness-100 transition duration-300 group-hover:brightness-50" src={property.images[4]} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xl">View more</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview */}
                <Overview property={property} ></Overview>
            </div>

            {/* Right side */}
            <div className="col-span-4 ml-8">
                <BidProperty></BidProperty>
                <Location></Location>
            </div>

        </div>
    );
};

export default Details;