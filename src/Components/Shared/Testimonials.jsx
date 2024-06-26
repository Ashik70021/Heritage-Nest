
const Testimonials = () => {
    const testimonials = [
        {
            rating: 5,
            description: "'The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.'",
            name: 'Tony Stark',
            profilePic: 'https://i.ibb.co/2Yf9qrc/profile1.jpg',
            position: 'Marketing manager, XYZ',
        },
        {
            rating: 4,
            description: "'The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for.'",
            name: 'Jane Smith',
            profilePic: 'https://i.ibb.co/N7VSVK8/profile2.jpg',
            position: 'Marketing manager, XYZ',
        },
    ];

    return (
        <div className="mt-24 mb-4 max-w-7xl mx-auto mont">
            <h1 className="text-center text-4xl font-bold mb-8">Testimonials</h1>
            <div className="flex justify-center space-x-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="max-w-2xl p-4 bg-[#ECF5FF] rounded-sm">
                        <div className="flex justify-center gap-2 mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-6 h-6 text-[#FEC84B]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.847 1.501 8.269L12 18.897 4.563 23.422l1.5-8.269L0 9.306l8.332-1.151L12 .587z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mb-4 mx-12 text-center text-gray-600">{testimonial.description}</p>

                        <img className="mx-auto w-14 h-14 rounded-full"
                            src={testimonial.profilePic}
                            alt={testimonial.name}
                        />
                        <div>
                            <p className="text-center text-[#111827] text-xl font-semibold">{testimonial.name}</p>
                            <p className="text-center text-[#6B7280] text-md font-normal ">{testimonial.position}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
