import React from "react";
import Caro from "../Components/Carosal";
import MultiCoro from "../Components/Multi-Carosal";
import Achive from "../Components/Achivements";
import Locations from "../Components/Locations";
import About from "../Components/About";

function Home() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Caro />
      </div>
      <div className="h-fit w-full p-10 bg-gray-50 flex align-middle justify-center items-center">
        <div>
          <div className="justify-center flex bg-gray-50  ">
            <MultiCoro />
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-gray-50 flex align-middle justify-center items-center">
        <div>
          <div className="justify-center flex bg-gray-50  ">
            <Achive />
          </div>
        </div>
      </div>
      <div className="h-fit w-full pb-20 bg-gray-50 flex align-middle justify-center items-center">
        <div className="h-full bg-gray-50 w-11/12">
          <div className="justify-center flex">
            <Locations />
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-blue-50 p-10  flex align-middle justify-center items-center">
        <div className="h-full bg-gray-50 w-11/12">
          <div className="justify-center flex">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
