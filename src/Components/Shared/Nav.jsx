import logo from "../../assets/images/logo.png"
const Nav = () => {
    return (
        <header className="p-2 bg-[#ECF5FF] text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/buyerspage" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Buy</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Sell</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</a>
                    </li>
                </ul>
                <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="h-[120%]" src={logo} alt="" />
                </a>
                <div className="flex items-center md:space-x-4">
                    <a href="" className="text-md">Manage Rentals</a>
                    <button type="button" className="font-semibold text-md text-black">Sign in</button>
                </div>
                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Nav;