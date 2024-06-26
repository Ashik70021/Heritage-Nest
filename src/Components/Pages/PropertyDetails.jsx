import Amenities from "../Amenities";
import Details from "../Details";
import NearbyProperties from "../NearbyProperties";
import Services from "../Services";
import Nav from "../Shared/Nav";
// import PropertyCardSection from "../Shared/PropertyCardSection";

const PropertyDetails = () => {
    return (
        <div>
            <Nav></Nav>
            <Details></Details>
            <Amenities></Amenities>
            <Services></Services>
            {/* <PropertyCardSection heading={"Others Nearby Properties"}></PropertyCardSection> */}
            <NearbyProperties></NearbyProperties>
        </div>
    );
};

export default PropertyDetails;