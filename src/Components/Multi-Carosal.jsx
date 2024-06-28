import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";
import axios from "axios";
import React from "react";
import { baseurl } from "../Helper";
export default function MultiCoro() {
  const [data, setData] = React.useState([])
  function getProperties() {
    axios.get(baseurl + "/property/").then((res) => {
      setData(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getProperties()
  }, [])
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="w-screen flex flex-col justify-between items-center align-middle  px-5">
        <div className="">
          <p className="text-4xl font-semibold">Featured Properties</p>
        </div>
        <Carousel
          slide={true}
          loop={true}
          indicators={false}
          hover
          className="w-full h-[500px] px-20"
          prevButtonClassName="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
          nextButtonClassName="bg-blue-500 text-black text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <div className="p-4 flex gap-10">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 flex gap-10">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 flex gap-10">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={pic1} alt="Roongta Grandezza" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Roongta Grandezza</h3>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    2 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    3 BHK
                  </span>
                  <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    Shops
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
