
import BuyerBanner from "../Banner/BuyerBanner";
import PostProperty from "../PostProperty";
import Nav from "../Shared/Nav";
import Pagination from "../Shared/Pagination";
import PropertyCardSection from "../Shared/PropertyCardSection";

import StatsSection from "../Shared/StatsSection";
import Testimonials from "../Shared/Testimonials";

const BuyersPage = () => {
    return (
        <div>
            <Nav></Nav>
            <BuyerBanner></BuyerBanner>
            <StatsSection></StatsSection>
            <PropertyCardSection heading={"Popular Properties"}></PropertyCardSection>
            <PropertyCardSection heading={"New Listed Properties"}></PropertyCardSection>
            <Testimonials></Testimonials>
            <Pagination></Pagination>
            <PostProperty></PostProperty>    
        </div>
    );
};

export default BuyersPage;