import LandingBanner from "../Banner/LandingBanner";
import Services from "../Services";
import PropertyBuying from "../Shared/PropertyBuying";

const Landing = () => {
    return (
        <div>
            <LandingBanner></LandingBanner>
            <PropertyBuying></PropertyBuying>
            <Services></Services>
        </div>
    );
};

export default Landing;