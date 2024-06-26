import { MdMeetingRoom } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { MdBalcony } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";


const Overview = ({property}) => {
    
    return (
        <div className="bg-[#E5E7EB] w-full p-8 mt-8">
            <h1 className="text-2xl font-semibold mb-8">Overview</h1>
            <div className="bg-white p-4 shadow-md rounded-md flex justify-around">
                <div className="flex gap-2">
                    <MdMeetingRoom className="text-xl items-center"/>
                    <p className="text-md font-medium text-[#303030]"><span>{property.bedno}</span> Beds</p>
                </div>
                <div className="flex gap-2">
                    <LiaBedSolid className="text-xl items-center"/>
                    <p className="text-md font-medium text-[#303030]"><span>{property.bathno}</span> Bath</p>
                </div>
                <div className="flex gap-2">
                    <MdBalcony className="text-xl items-center"/>
                    <p className="text-md font-medium text-[#303030]"><span>{property.balconyno}</span> Balcony</p>
                </div>
                <div className="flex gap-2">
                    <SiSmartthings className="text-xl items-center"/>
                    <p className="text-md font-medium text-[#303030]">{property.condition}</p>
                </div>
            </div>

            <div className="flex justify-around mt-4">
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Carpet Area</p>
                    <p className="text-md font-medium text-[#101010]">{property.carpetarea}</p>
                </div>
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Floor</p>
                    <p className="text-md font-medium text-[#101010]">{property.condition}</p>
                </div>
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Transaction Type</p>
                    <p className="text-md font-medium text-[#101010]">{property.floor}</p>
                </div>
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Lift</p>
                    <p className="text-md font-medium text-[#101010]">{property.liftno}</p>
                </div>
            </div>

            <div className="flex justify-around mt-6">
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Facing</p>
                    <p className="text-md font-medium text-[#101010]">{property.facing}</p>
                </div>
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Additional Rooms</p>
                    <p className="text-md font-medium text-[#101010]">{property.additionalrooms}</p>
                </div>
                <div className="">
                    <p className="text-lg font-normal text-[#5C5C5C]">Age of construction</p>
                    <p className="text-md font-medium text-[#101010]">{property.ageofconstruction}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;