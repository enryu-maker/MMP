import Marquee from "react-fast-marquee";
import { IMAGE } from "../images/Images";
import axios from "axios";
import { baseurl } from "../Helper";
import React from "react";

export default function Achive() {
  const [data, setData] = React.useState([]);
  function getAchievements() {
    axios
      .get(baseurl + "/web/achievements/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getAchievements();
  }, []);

  const imageEntries = Object.entries(IMAGE);

  const { removeBackground } = require("@imgly/background-removal-node");

  async function removeImageBackground(imgSource) {
    const blob = await removeBackground(imgSource);
    const buffer = Buffer.from(await blob.arrayBuffer());
    const dataURL = `data:image/png;base64,${buffer.toString("base64")}`;
    return dataURL;
  }

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="w-screen flex flex-col justify-between items-center align-middle px-5">
        <div className=""></div>
        <div className="flex w-[90%] lg:w-[78%] flex-col items-center my-16">
          <p className="text-4xl font-semibold text-blue-gray-900 text-center">
            Top developers under one roof
          </p>

          <Marquee gradient={false} className="bg-gray-50 overflow-y-hidden">
            <div className="flex flex-wrap w-full justify-evenly items-center mt-8 bg-gray-50">
              {imageEntries.map(([id, icon]) => (
                <div
                  key={id}
                  className="rounded-full h-[100px] bg-gray-50 lg:h-[150px] w-[100px] lg:w-[150px] flex justify-center items-center m-4"
                >
                  <img
                    src={icon} // Use src.default to access the image path from require
                    alt={id}
                    className="object-contain bg-cover bg-gray-50 h-[100px] lg:h-[100px] w-[200px] lg:w-[200px] "
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
