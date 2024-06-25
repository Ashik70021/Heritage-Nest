import image1 from '../../assets/images/home1.jpg'
import image2 from '../../assets/images/home2.jpg'
import image3 from '../../assets/images/home3.jpg'
import image4 from '../../assets/images/home4.jpg'
import image5 from '../../assets/images/home5.jpg'
import image6 from '../../assets/images/home6.jpg'

const PropertyBuying = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
            {/* right side div */}
            <div className="w-full md:w-1/2 relative">
                <div className="relative">
                    <img src={image1} alt="Property 1" className="w-96 rounded-md h-80 mb-4 md:mb-0" />
                    <img src={image2} alt="Property 2" className="absolute rounded-md top-40 left-8 w-96 h-50" />
                </div>
                <button className="absolute top-16 left-16 bg-white rounded-full p-2 shadow-lg">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
            </div>

            {/* left side div */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">Buy Your Dream Property</h2>
                <p className="text-gray-600 mb-6">
                    Find the best properties in the most desirable locations. Whether you're looking for an apartment, villa, or resort, we have the perfect property for you.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default PropertyBuying;
