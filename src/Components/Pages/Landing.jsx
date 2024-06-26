import LandingBanner from "../Banner/LandingBanner";
import Services from "../Services";
import Navbar from "../Shared/Navbar";
import PropertyBuying from "../Shared/PropertyBuying";


const Landing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <LandingBanner></LandingBanner>
            <PropertyBuying></PropertyBuying>
            <Services></Services>
        </div>
    );
};

export default Landing;