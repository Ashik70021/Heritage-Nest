import { IoLocationOutline } from "react-icons/io5";
import Overview from "./Overview";
import BidProperty from "./BidProperty";
import Location from "./Location";
import { useParams } from "react-router-dom";

const properties = [
    {
      id: "1",
      images: ["https://i.ibb.co/LCXXN42/details1.jpg", "https://i.ibb.co/S3ZFB3Y/details2.jpg", "https://i.ibb.co/7RxXh3Q/details3.jpg", "https://i.ibb.co/v12XN1n/details4.jpg", "https://i.ibb.co/ZXMTHZ3/home6.jpg"],
      type: "Apartment",
      name: "Luxury Heights",
      location: "Prime City Center",
      amount: "$451k",
      bedno: 3,
      bathno: 2,
      balconyno: 1,
      condition: "Fully Furnished",
      carpetarea: "100 sqft",
      floor: "2nd out of 4",
      transactiontype: "Ready to Move",
      liftno: 2,
      facing: "North - East",
      additionalrooms: "1 servant room & 1 guest room",
      ageofconstruction: "New Construction"
    },
    {
        id: "2",
        images: ["https://i.ibb.co/7pT55H0/details6.jpg", "https://i.ibb.co/S3ZFB3Y/details2.jpg", "https://i.ibb.co/7RxXh3Q/details3.jpg", "https://i.ibb.co/v12XN1n/details4.jpg", "https://i.ibb.co/ZXMTHZ3/home6.jpg"],
        type: "Resort",
        name: "Serenity Villa",
        location: "Coastal Paradise",
        amount: "$451k",
        bedno: 4,
        bathno: 3,
        balconyno: 2,
        condition: "Fully Furnished",
        carpetarea: "100 sqft",
        floor: "Ground Floor",
        transactiontype: "Vacation Rental",
        liftno: 0,
        facing: "South",
        additionalrooms: "1 entertainment room",
        ageofconstruction: "5 years old"
      },
      {
        id: "3",
        images: ["https://i.ibb.co/NCmsQ3f/details7.jpg", "https://i.ibb.co/S3ZFB3Y/details2.jpg", "https://i.ibb.co/7RxXh3Q/details3.jpg", "https://i.ibb.co/v12XN1n/details4.jpg", "https://i.ibb.co/ZXMTHZ3/home6.jpg"],
        type: "Villa",
        name: "Tranquil Haven",
        location: "Suburban Retreat",
        amount: "$451k",
        bedno: 5,
        bathno: 4,
        balconyno: 3,
        condition: "Fully Furnished",
        carpetarea: "100 sqft",
        floor: "1st out of 2",
        transactiontype: "Resale",
        liftno: 1,
        facing: "West",
        additionalrooms: "1 study room",
        ageofconstruction: "10 years old"
      },
      {
        id: "4",
        images: ["https://i.ibb.co/LQ1WJL2/details8.jpg", "https://i.ibb.co/S3ZFB3Y/details2.jpg", "https://i.ibb.co/7RxXh3Q/details3.jpg", "https://i.ibb.co/v12XN1n/details4.jpg", "https://i.ibb.co/ZXMTHZ3/home6.jpg"],
        type: "Penthouse",
        name: "Skyview Heights",
        location: "City Skyline",
        amount: "$451k",
        bedno: 3,
        bathno: 3,
        balconyno: 2,
        condition: "Fully Furnished",
        carpetarea: "100 sqft",
        floor: "Top Floor",
        transactiontype: "New Launch",
        liftno: 3,
        facing: "East",
        additionalrooms: "1 home office",
        ageofconstruction: "Brand New"
      },
      {
        id: "5",
        images: ["https://i.ibb.co/1G1Xy1j/details9.jpg", "https://i.ibb.co/S3ZFB3Y/details2.jpg", "https://i.ibb.co/7RxXh3Q/details3.jpg", "https://i.ibb.co/v12XN1n/details4.jpg", "https://i.ibb.co/ZXMTHZ3/home6.jpg"],
        type: "Studio",
        name: "Cosy Corner",
        location: "Downtown",
        amount: "$451k",
        bedno: 1,
        bathno: 1,
        balconyno: 0,
        condition: "Fully Furnished",
        carpetarea: "100 sqft",
        floor: "5th out of 10",
        transactiontype: "Ready to Move",
        liftno: 2,
        facing: "South - West",
        additionalrooms: "1 gym room",
        ageofconstruction: "3 years old"
      },
      {
        id: "6",
        images: ["https://i.ibb.co/7WBsQPQ/details10.jpg", "https://i.ibb.co/S3ZFB3Y/details2.jpg", "https://i.ibb.co/7RxXh3Q/details3.jpg", "https://i.ibb.co/v12XN1n/details4.jpg", "https://i.ibb.co/ZXMTHZ3/home6.jpg"],
        type: "Studio",
        name: "North Corner",
        location: "Downtown",
        amount: "$451k",
        bedno: 1,
        bathno: 1,
        balconyno: 0,
        condition: "Fully Furnished",
        carpetarea: "100 sqft",
        floor: "5th out of 10",
        transactiontype: "Ready to Move",
        liftno: 2,
        facing: "South - West",
        additionalrooms: "1 gym room",
        ageofconstruction: "3 years old"
      }
  ];

const Details = () => {

    const { id } = useParams();
    const property = properties.find(property => property.id === id)
    console.log(property, id)

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-12">
            {/* left side */}
            <div className="col-span-8">
                <div className="flex justify-between mb-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-[#010101]">{property.name}</h1>
                        <div className="flex items-center gap-2">
                            <IoLocationOutline className="text-xl text-[#EE6611]" />
                            <p className="text-lg font-medium text-[#606060]">{property.location}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-[#010101]">{property.amount}</h1>
                    </div>
                </div>

                {/* Images */}
                <div>
                    <img className="h-[400px] w-full" src={property.images[0]} alt="" />
                    <div className="grid grid-cols-8 gap-4 mt-4">
                        <div className="col-span-3 relative text-center group">
                            <img className="h-[160px] w-full brightness-100 transition duration-300 group-hover:brightness-50" src={property.images[1]} alt="" />
                            <div onClick={() => document.getElementById('my_modal_2').showModal()} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xl">View more</span>
                            </div>
                        </div>
                        <div className="col-span-3 relative text-center group">
                            <img className="h-[160px] w-full brightness-100 transition duration-300 group-hover:brightness-50" src={property.images[2]} alt="" />
                            <div onClick={() => document.getElementById('my_modal_2').showModal()} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xl">View more</span>
                            </div>
                        </div>
                        <div className="col-span-2 relative text-center group">
                            <img className="h-[160px] w-full brightness-100 transition duration-300 group-hover:brightness-50" src={property.images[4]} alt="" />
                            <div onClick={() => document.getElementById('my_modal_2').showModal()} className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-2xl">View more</span>
                            </div>
                        </div>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h1 className="text-2xl font-bold mb-4">Images:  <span className="text-[#EE6611]">{property.images.length}</span></h1>
                            {
                                property.images.map(image => (
                                    <div key={image.id} className="bg-orange">
                                        <img className="mb-4" src={image} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>

                {/* Overview */}
                <Overview property={property} ></Overview>
            </div>

            {/* Right side */}
            <div className="col-span-4 ml-8">
                <BidProperty></BidProperty>
                <Location></Location>
            </div>

        </div>
    );
};

export default Details;