import { MdSettingsPower } from "react-icons/md";
import { MdPark } from "react-icons/md";
import { GiCircleForest } from "react-icons/gi";
import { FaIntercom } from "react-icons/fa";
import { MdNetworkWifi } from "react-icons/md";
import { MdSportsTennis } from "react-icons/md";


const Amenities = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#E5E7EB] p-8 mt-16">
            <h1 className="text-2xl font-semibold mb-8">Amenities</h1>
            <div className="grid grid-cols-4">
                {/* Div 1 */}
                <div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSettingsPower className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Power Back Up</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdPark className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Park</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <GiCircleForest className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Private Terrace/Garden</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <FaIntercom className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Intercom Facility</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdNetworkWifi className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Internet/Wi-Fi Connectivity</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSportsTennis className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Outdoor Tennis Courts</p>
                    </div>

                </div>

                {/* Div 2 */}
                <div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSettingsPower className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Lift</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdPark className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Reserved Parking</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <GiCircleForest className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Vaastu Compliant</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <FaIntercom className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Maintenance Staff</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdNetworkWifi className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">DTH Television Facility</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSportsTennis className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Early Learning Centre</p>
                    </div>
                </div>

                {/* Div 3 */}
                <div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSettingsPower className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Club House</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdPark className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Security</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <GiCircleForest className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Service/Goods Lift</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <FaIntercom className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Waste Disposal</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdNetworkWifi className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Piped Gas</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSportsTennis className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Kids Play Area</p>
                    </div>
                </div>

                {/* Div 4 */}
                <div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSettingsPower className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Gymnasium</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdPark className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Water Storage</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <GiCircleForest className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Visitor Parking</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <FaIntercom className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Laundry Service</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdNetworkWifi className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Jogging and Strolling Track</p>
                    </div>
                    <div className="flex gap-2 items-center mb-6">
                        <MdSportsTennis className="text-4xl bg-white p-2" />
                        <p className="text-lg font-medium text-[#101010]">Indoor Squash & Badminton Courts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Amenities;