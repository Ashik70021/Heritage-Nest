
const BuyerBanner = () => {
    return (
        <div className="relative bg-cover bg-center h-96 mb-36" style={{ backgroundImage: 'url(https://i.ibb.co/fHpGxkb/buyerbanner.jpg)' }}>
            <div className="absolute inset-0 top-72 bg-black bg-opacity-50 flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
                    <div>
                        <ul className="items-stretch hidden lg:flex">
                            <li className="flex hover:underline hover:text-[#005EAE]">
                                <a rel="noopener noreferrer" href="/buyerspage" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Buy</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Rent</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">PG</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Plot</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Commercial</a>
                            </li>
                        </ul>
                    </div>
                    <hr className='mt-2 mb-4' />
                    <form className="grid  gap-4 grid-cols-1 md:grid-cols-3">
                        <input
                            type="text"
                            className="col-span-3 w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                            placeholder="Search Properties"
                        />
                        <div>
                            <label className="block text-gray-700">Your Location</label>
                            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring bg-[#ECF5FF] focus:ring-blue-200 focus:border-blue-500">
                                <option value="">Select Location</option>
                                <option value="new-york">New York</option>
                                <option value="los-angeles">Los Angeles</option>
                                <option value="chicago">Chicago</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Property Type</label>
                            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring bg-[#ECF5FF] focus:ring-blue-200 focus:border-blue-500">
                                <option value="">Select Property Type</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="condo">Condo</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block text-gray-700">Budget</label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring bg-[#ECF5FF] focus:ring-blue-200 focus:border-blue-500"
                                placeholder="Enter your budget"
                            />
                        </div>
                        {/* <div className="col-span-3 bg-[#005EAE]"> */}
                        <button className="col-span-3 w-full mx-auto flex justify-center gap-2 items-center text-center bg-[#005EAE] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-white">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                            <span>Find Property</span>
                        </button>
                        {/* </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyerBanner;
