import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { CiImageOn } from "react-icons/ci";

const properties = [
    {
        id: 1,
        image: 'https://via.placeholder.com/300',
        type: 'Apartment',
        name: 'Luxury Apartment',
        location: 'New York, USA',
        amount: '$2000/month',
        imageNumber: '10'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/300',
        type: 'Flat',
        name: 'Cozy Flat',
        location: 'Paris, France',
        amount: '$1500/month',
        imageNumber: '8'
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/300',
        type: 'Resort',
        name: 'Beach Resort',
        location: 'Maldives',
        amount: '$3000/month',
        imageNumber: '15'
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/300',
        type: 'Villa',
        name: 'Mountain Villa',
        location: 'Swiss Alps',
        amount: '$5000/month',
        imageNumber: '20'
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/300',
        type: 'Penthouse',
        name: 'City Penthouse',
        location: 'Tokyo, Japan',
        amount: '$4000/month',
        imageNumber: '12'
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/300',
        type: 'Cottage',
        name: 'Country Cottage',
        location: 'Countryside, UK',
        amount: '$1800/month',
        imageNumber: '7'
    },
];

const PropertyCardSection = ({ heading }) => {
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
        <div className="max-w-7xl mx-auto py-8 mt-8">
            <div className='mb-4 flex justify-between items-center'>
                <h1 className='text-3xl font-semibold text-[#111827]'>{heading}</h1>
                <a className='text-lg font-semibold text-[#0059B1] hover:underline' href="">See all property</a>
            </div>
            <div className="relative flex items-center">
                <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-[#5490CB] rounded-full shadow-md hover:bg-gray-200">
                    <FaArrowLeft className="text-white" />
                    {/* <CiImageOn /> */}
                </button>
                <div className="w-full overflow-hidden">
                    <div className="flex transition-transform duration-300 ease-in-out">
                        {currentItems.map((property) => (
                            <div key={property.id} className="flex-shrink-0 w-1/3 px-4">
                                <Link>
                                    <div className="bg-[#F9FAFB] rounded-lg shadow-lg overflow-hidden">
                                        <div className="relative">
                                            <img src={property.image} alt={property.name} className="w-full h-52 object-cover" />
                                            <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-75 text-white p-2 text-sm">
                                                {property.imageNumber} Images
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
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-[#5490CB] rounded-full shadow-md hover:bg-gray-200">
                    <FaArrowRight className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default PropertyCardSection;
