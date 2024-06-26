import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CiImageOn } from "react-icons/ci";

const properties = [
    {
        id: 1,
        image: 'https://i.ibb.co/7RxXh3Q/details3.jpg',
        type: 'Apartment',
        name: 'Luxury Apartment',
        location: 'New York, USA',
        amount: '$2000/month',
        imageNumber: '10'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/v12XN1n/details4.jpg',
        type: 'Flat',
        name: 'Cozy Flat',
        location: 'Paris, France',
        amount: '$1500/month',
        imageNumber: '8'
    },
    {
        id: 3,
        image: 'https://i.ibb.co/S3ZFB3Y/details2.jpg',
        type: 'Resort',
        name: 'Beach Resort',
        location: 'Maldives',
        amount: '$3000/month',
        imageNumber: '15'
    },
    {
        id: 4,
        image: 'https://i.ibb.co/ZXMTHZ3/home6.jpg',
        type: 'Villa',
        name: 'Mountain Villa',
        location: 'Swiss Alps',
        amount: '$5000/month',
        imageNumber: '20'
    },
    {
        id: 5,
        image: 'https://i.ibb.co/LCXXN42/details1.jpg',
        type: 'Penthouse',
        name: 'City Penthouse',
        location: 'Tokyo, Japan',
        amount: '$4000/month',
        imageNumber: '12'
    },
    {
        id: 6,
        image: 'https://i.ibb.co/ZXMTHZ3/home6.jpg',
        type: 'Cottage',
        name: 'Country Cottage',
        location: 'Countryside, UK',
        amount: '$1800/month',
        imageNumber: '7'
    },
];

const NearbyProperties = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % properties.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + properties.length) % properties.length);
    };

    const currentItems = properties.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <div className='mb-4 flex justify-between items-center'>
                <h1 className='text-3xl font-semibold text-[#111827]'>Others Nearby Properties</h1>
                <a className='text-lg font-semibold text-[#0059B1] hover:underline' href="">See all property</a>
            </div>
            <div className="relative flex items-center">
                <button onClick={prevSlide} className="absolute left-0 top-24 z-10 p-2 bg-[#5490CB] rounded-full shadow-md hover:bg-gray-200">
                    <FaArrowLeft className="text-white" />
                </button>
                <div className="w-full overflow-hidden">
                    <div className="flex transition-transform duration-300 ease-in-out">
                        {currentItems.map((property) => (
                            <div key={property.id} className="flex-shrink-0 w-1/3 px-2">
                                <div className="bg-[#F9FAFB] rounded-lg shadow-lg">
                                        <div className="relative">
                                            <img src={property.image} alt={property.name} className="w-full h-52 object-cover" />
                                            <div className="absolute bottom-2 left-3 bg-[#FDF0E7] flex gap-1 justify-center items-center rounded-md px-2 ">
                                                <CiImageOn className='text-xl font-bold text-[#EE6611]' />
                                                <p className='text-[#101010] text-xl font-semibold'>5</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className='flex justify-between'>
                                                <h3 className="text-md rounded-sm font-normal bg-[#C5E2FF] text-[#00254A] px-2">{property.type}</h3>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='bg-[#EE6611] w-3 h-3'></div>
                                                    <h3>Ready to Move</h3>
                                                </div>
                                            </div>
                                            <hr className='mt-2 mb-2' />
                                            <h2 className="text-xl font-semibold text-[#111827]">{property.name}</h2>
                                            <p className="text-gray-600 text-lg font-normal">{property.location}</p>
                                            <p className="mt-4 text-[#111827] text-2xl font-semibold">{property.amount}</p>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={nextSlide} className="absolute right-0 top-24 z-10 p-2 bg-[#5490CB] rounded-full shadow-md hover:bg-gray-200">
                    <FaArrowRight className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default NearbyProperties;
