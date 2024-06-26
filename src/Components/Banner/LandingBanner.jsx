import { Link } from 'react-router-dom';
import videoBackground from '../../assets/Video/-f8f8-4a60-bda2-7982b8d7a898.mp4';


const LandingBanner = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute w-auto min-w-full min-h-full max-w-none"
            >
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 text-center mx-auto text-white px-6 md:px-12">
                <h1 className="ext-xl md:text-7xl font-bold mb-4">Your Portal to India's </h1>
                <h1 className="text-xl md:text-7xl font-bold mb-4">Exquisite Real Estate </h1>
                <p className="text-lg md:text-xl mt-8 mb-8">
                    Seamlessly connecting you to the heartbeat of India's prime properties.
                </p>
                <Link to="/buyerspage">
                    <button className="mx-auto flex gap-2 items-center bg-[#005EAE] text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition duration-300">
                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-white">
                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                        </svg>
                        Find Property
                    </button>
                </Link>

            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default LandingBanner;
