import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Nav from "./Shared/Nav";
import PostProperty from "./PostProperty";

const AllProperty = () => {
    const [properties, setProperties] = useState([]);
    console.log(properties)
    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    return (
        <div>
            <Nav></Nav>
            <div className="w-full max-w-7xl mx-auto mt-8 mb-6">
                <div className='mb-4 flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold text-[#111827]'>All Properties</h1>
                </div>
                <div className="transition-transform duration-300 ease-in-out grid grid-cols-1 md:grid-cols-3">
                    {properties.map((property) => (
                        <div key={property.id} className="p-4">
                            <Link to={`/propertydetails/${property.id}`}>
                                <div className="bg-[#F9FAFB] rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative">
                                        <img src={property.images[0]} alt={property.name} className="w-full h-52 object-cover" />
                                        <div className="absolute bottom-2 left-3 bg-[#FDF0E7] flex gap-1 justify-center items-center rounded-md px-2 ">
                                            <CiImageOn className='text-xl font-bold text-[#EE6611]' />
                                            <p className='text-[#101010] text-xl font-semibold'>{property.images.length}</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className='flex justify-between'>
                                            <h3 className="text-md rounded-sm font-normal bg-[#C5E2FF] text-[#00254A] px-2">{property.type}</h3>
                                            <div className='flex gap-2 items-center'>
                                                <div className='bg-[#EE6611] w-3 h-3'></div>
                                                <h3>{property.transactiontype}</h3>
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
            <PostProperty></PostProperty>
        </div>
    );
};

export default AllProperty;