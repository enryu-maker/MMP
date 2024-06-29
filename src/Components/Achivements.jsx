import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";
import axios from "axios";
import { baseurl } from "../Helper";
import React from "react";
export default function Achive() {
  const [data, setData] = React.useState([])
  function getAchievements() {
    axios.get(baseurl + "/web/achievements/").then((res) => {
      setData(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getAchievements()
  }, [])
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="w-screen flex flex-col justify-between items-center align-middle px-5">
        <div className="">
          <p className="text-4xl font-semibold">Achievements</p>
        </div>
        <Carousel
          slide={true}
          loop={true}
          indicators={false}
          hover
          className="w-full h-[500px] px-4 md:px-20"
        >
          <div className="p-4 flex justify-center md:justify-between gap-10">
            <div className="bg-white shadow-md rounded-lg w-full md:w-[300px] h-fit overflow-hidden">
              <img
                src={pic1}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
            <div className="hidden md:block bg-white shadow-md rounded-lg w-[300px] h-fit overflow-hidden">
              <img
                src={pic2}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
            <div className="hidden md:block bg-white shadow-md rounded-lg w-[300px] h-fit overflow-hidden">
              <img
                src={pic3}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 flex justify-center md:justify-between gap-10">
            <div className="bg-white shadow-md rounded-lg w-full md:w-[300px] h-fit overflow-hidden">
              <img
                src={pic2}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
            <div className="hidden md:block bg-white shadow-md rounded-lg w-[300px] h-fit overflow-hidden">
              <img
                src={pic3}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
            <div className="hidden md:block bg-white shadow-md rounded-lg w-[300px] h-fit overflow-hidden">
              <img
                src={pic1}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 flex justify-center md:justify-between gap-10">
            <div className="bg-white shadow-md rounded-lg w-full md:w-[300px] h-fit overflow-hidden">
              <img
                src={pic3}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
            <div className="hidden md:block bg-white shadow-md rounded-lg w-[300px] h-fit overflow-hidden">
              <img
                src={pic1}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
            <div className="hidden md:block bg-white shadow-md rounded-lg w-[300px] h-fit overflow-hidden">
              <img
                src={pic2}
                alt="Roongta Grandezza"
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-normal">Roongta Grandezza</h3>
                <p className="mt-2 text-sm font-light text-gray-600">
                  Govind Nagar, Off 100ft Ring Road
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
