import icon from "../assets/images/icon.png"

const Services = () => {
    const services = [
        {
            logo: 'https://via.placeholder.com/40',
            heading: 'Advanced Property Search',
            description: 'Effortlessly find your dream property with advanced search filters.',
        },
        {
            logo: 'https://via.placeholder.com/40',
            heading: 'Virtual Tours and Multimedia',
            description: 'Explore properties through immersive virtual tours and HD photos.',
        },
        {
            logo: 'https://via.placeholder.com/40',
            heading: 'Secure Online Transactions',
            description: 'Ensure secure transactions and e-sign documents seamlessly online.',
        },
    ];

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-8">Other Services</h1>
            <div className="mb-4 flex justify-center space-x-4">
                {services.map((service, index) => (
                    <div key={index} className="flex items-start p-4 bg-[#ECF5FF] rounded-sm max-w-md">
                        <img src={icon} alt={service.heading} className="w-10 h-10 mr-4 rounded-sm" />
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.heading}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
