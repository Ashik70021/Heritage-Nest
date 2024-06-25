
const PostProperty = () => {
    return (
        <div className="w-full bg-[#FDF0E7]">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-8">
                <div>
                    <h1 className="text-xl font-semibold ">Post your Property for free</h1>
                    <p className="text-sm font-normal">List it on Your Propriety and get genuine leads</p>
                </div>
                <div>
                    <button className="mx-auto flex gap-2 items-center bg-[#F06224] text-white py-2 px-4 rounded-sm hover:bg-orange-600 transition duration-300">
                        Post Property
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostProperty;