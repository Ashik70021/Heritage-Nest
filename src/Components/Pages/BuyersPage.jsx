import BuyerBanner from "../Banner/BuyerBanner";
import PostProperty from "../PostProperty";
import PropertyCardSection from "../Shared/PropertyCardSection";

import StatsSection from "../Shared/StatsSection";
import Testimonials from "../Shared/Testimonials";

const BuyersPage = () => {
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <StatsSection></StatsSection>
            <PropertyCardSection heading={"Popular Properties"}></PropertyCardSection>
            <PropertyCardSection heading={"New Listed Properties"}></PropertyCardSection>
            <Testimonials></Testimonials>
            <PostProperty></PostProperty>
        </div>
    );
};

export default BuyersPage;