import Amenities from "../Amenities";
import Details from "../Details";
import NearbyProperties from "../NearbyProperties";
import Services from "../Services";
import Nav from "../Shared/Nav";

const PropertyDetails = () => {
    return (
        <div>
            <Nav></Nav>
            <Details></Details>
            <Amenities></Amenities>
            <Services></Services>
            <NearbyProperties></NearbyProperties>
        </div>
    );
};

export default PropertyDetails;