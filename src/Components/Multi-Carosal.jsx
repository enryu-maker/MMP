import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";
import axios from "axios";
import React from "react";
import { baseurl } from "../Helper";

export default function MultiCoro() {
  const [data, setData] = React.useState([]);
  function getProperties() {
    axios
      .get(baseurl + "/property/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getProperties();
  }, []);

  const PropertyCard = ({ src, title, location }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={src} alt={title} className="w-full" />
      <div className="p-2 md:p-4">
        <h3 className="text-md md:text-lg font-bold">{title}</h3>
        <div className="flex space-x-1 md:space-x-2 mt-2">
          <span className="bg-gray-50 text-gray-700 text-xs font-medium px-1 md:px-2 py-1 rounded">
            2 BHK
          </span>
          <span className="bg-gray-50 text-gray-700 text-xs font-medium px-1 md:px-2 py-1 rounded">
            3 BHK
          </span>
          <span className="bg-gray-50 text-gray-700 text-xs font-medium px-1 md:px-2 py-1 rounded">
            Shops
          </span>
        </div>
        <p className="mt-2 text-xs md:text-sm text-gray-600">{location}</p>
        <button className="mt-2 md:mt-4 bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded">
          View
        </button>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="w-screen flex flex-col justify-between items-center align-middle px-2 md:px-5">
        <div className="text-center mb-4">
          <p className="text-2xl md:text-4xl font-semibold">
            Featured Properties
          </p>
        </div>
        <Carousel
          slide={true}
          loop={true}
          indicators={false}
          hover
          className="w-full md:hidden h-[400px] md:h-[500px] px-4 md:px-20"
          prevButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
          nextButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
        >
          {/* Mobile view: One card per slide */}
          <div className="p-2 md:hidden">
            <PropertyCard
              src={pic1}
              title="Roongta Grandezza"
              location="Govind Nagar, Off 100ft Ring Road"
            />
          </div>
          <div className="p-2 md:hidden">
            <PropertyCard
              src={pic2}
              title="Roongta Grandezza"
              location="Govind Nagar, Off 100ft Ring Road"
            />
          </div>
          <div className="p-2 md:hidden">
            <PropertyCard
              src={pic3}
              title="Roongta Grandezza"
              location="Govind Nagar, Off 100ft Ring Road"
            />
          </div>
        </Carousel>
        <div className="md:contents hidden ">
          <Carousel
            slide={true}
            loop={true}
            indicators={false}
            hover
            className="w-full h-[300px] md:h-[500px] px-4 md:px-20 "
            prevButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
            nextButtonClassName="bg-blue-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
          >
            {/* Desktop view: Three cards per slide */}
            <div className="hidden md:flex p-4 gap-10">
              <PropertyCard
                src={pic1}
                title="Roongta Grandezza"
                location="Govind Nagar, Off 100ft Ring Road"
              />
              <PropertyCard
                src={pic2}
                title="Roongta Grandezza"
                location="Govind Nagar, Off 100ft Ring Road"
              />
              <PropertyCard
                src={pic3}
                title="Roongta Grandezza"
                location="Govind Nagar, Off 100ft Ring Road"
              />
            </div>
            <div className="hidden md:flex p-4 gap-10">
              <PropertyCard
                src={pic1}
                title="Roongta Grandezza"
                location="Govind Nagar, Off 100ft Ring Road"
              />
              <PropertyCard
                src={pic2}
                title="Roongta Grandezza"
                location="Govind Nagar, Off 100ft Ring Road"
              />
              <PropertyCard
                src={pic3}
                title="Roongta Grandezza"
                location="Govind Nagar, Off 100ft Ring Road"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
