import { Link } from 'react-router-dom'
import image1 from '../../assets/images/home1.jpg'
import image2 from '../../assets/images/home2.jpg'
import image3 from '../../assets/images/home3.jpg'
import image4 from '../../assets/images/home4.jpg'
import image5 from '../../assets/images/home5.jpg'
import image6 from '../../assets/images/home6.jpg'

const PropertyBuying = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row justify-between items-center">
                {/* right side div */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative">
                        <img src={image1} alt="Property 1" className="w-96 rounded-md h-80 mb-4 md:mb-0" />
                        <img src={image2} alt="Property 2" className="absolute rounded-md top-52 left-28 w-96 h-48" />
                    </div>
                    <button className="absolute top-[168px] left-[350px] bg-[#0059B1] rounded-full p-2 shadow-lg">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>

                {/* left side div */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                    <div className="flex gap-2 items-center mb-4">
                        <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                        <h1 className="text-xl font-semibold text-[#EE6611]">Property buying</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">Efficient and Transparent <br />
                        Home Buying Solutions</h2>
                    <p className="text-[#667085] text-sm font-medium mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <Link to="/buyerspage">
                        <button className="flex gap-2 items-center bg-[#E6EFF7] text-[#00437C] mt-12 py-2 px-4 rounded-md hover:bg-[#b0c3d4] transition duration-300">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                            Find Property
                        </button>
                    </Link>

                </div>
            </div>

            {/* 2nd */}
            <div className="max-w-7xl mx-auto mt-16 py-16 px-4 flex flex-col md:flex-row justify-between items-center">
                {/* right side div */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
                    <div className="flex gap-2 items-center mb-4">
                        <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                        <h1 className="text-xl font-semibold text-[#EE6611]">Property buying</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">Efficient and Transparent <br />
                        Home Buying Solutions</h2>
                    <p className="text-[#667085] text-sm font-medium mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <Link to="/buyerspage">
                        <button className="flex gap-2 items-center bg-[#E6EFF7] text-[#00437C] mt-12 py-2 px-4 rounded-md hover:bg-[#b0c3d4] transition duration-300">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                            Find Property
                        </button>
                    </Link>
                </div>

                {/* left side div */}

                <div className="w-full md:w-1/2 relative">
                    <div className="relative">
                        <img src={image3} alt="Property 1" className="w-96 rounded-md h-80 mb-4 md:mb-0" />
                        <img src={image4} alt="Property 2" className="absolute rounded-md -top-20 left-40 w-96 h-48" />
                    </div>
                    <button className="absolute -top-[45px] right-[425px] bg-[#0059B1] rounded-full p-2 shadow-lg">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* 3rd */}
            <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row justify-between items-center">
                {/* right side div */}
                <div className="w-full md:w-1/2 relative">
                    <div className="relative">
                        <img src={image5} alt="Property 1" className="w-96 rounded-md h-80 mb-4 md:mb-0" />
                        <img src={image6} alt="Property 2" className="absolute rounded-md top-52 left-28 w-96 h-48" />
                    </div>
                    <button className="absolute top-[168px] left-[350px] bg-[#0059B1] rounded-full p-2 shadow-lg">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-14 h-14 text-white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>

                {/* left side div */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                    <div className="flex gap-2 items-center mb-4">
                        <div className="bg-[#EE6611] w-[50px] h-[5px]"></div>
                        <h1 className="text-xl font-semibold text-[#EE6611]">Property buying</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">Efficient and Transparent <br />
                        Home Buying Solutions</h2>
                    <p className="text-[#667085] text-sm font-medium mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <Link to="/buyerspage">
                        <button className="flex gap-2 items-center bg-[#E6EFF7] text-[#00437C] mt-12 py-2 px-4 rounded-md hover:bg-[#b0c3d4] transition duration-300">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                            Find Property
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyBuying;
