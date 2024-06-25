
const StatsSection = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Div 1 */}
            <div className="bg-[#FDF0E7] p-4 rounded-lg">
                <div>
                    <h2 className="text-4xl font-bold text-[#D95D0F]">2k+</h2>
                    <p className="text-[#303030]">New Flat Listed</p>
                </div>
                <div className='flex justify-between items-center mt-4 text-[#EE6611]'>
                    <button>View All</button>
                    <div className="flex justify-start items-center border border-[#EE6611] rounded-full mt-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Div 2 */}
            <div className="bg-[#ECF5FF] p-4 rounded-lg">
                <div>
                    <h2 className="text-4xl font-bold text-[#0051A1]">2k+</h2>
                    <p className="text-[#303030]">New Flat Listed</p>
                </div>
                <div className='flex justify-between text-[#0059B1] mt-4'>
                    <button className="">View All</button>
                    <div className="flex justify-start items-center border border-[#0059B1] rounded-full mt-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Div 3 */}
            <div className="bg-[#FDF0E7] p-4 rounded-lg">
                <div>
                    <h2 className="text-4xl font-bold text-[#D95D0F]">2k+</h2>
                    <p className="text-[#303030]">New Flat Listed</p>
                </div>
                <div className='flex justify-between mt-4 text-[#EE6611]'>
                    <button className="">View All</button>
                    <div className="flex justify-start items-center border border-[#EE6611] rounded-full mt-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Div 4 */}
            <div className="bg-[#ECF5FF] p-4 rounded-lg">
                <div>
                    <h2 className="text-4xl font-bold text-[#0051A1]">2k+</h2>
                    <p className="text-[#303030]">New Flat Listed</p>
                </div>
                <div className='flex justify-between text-[#0059B1] mt-4'>
                    <button className="">View All</button>
                    <div className="flex justify-start items-center border border-[#0059B1] rounded-full mt-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
