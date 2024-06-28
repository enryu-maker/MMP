import React from "react";
import Caro from "../Components/Carosal";
import MultiCoro from "../Components/Multi-Carosal";
import Achive from "../Components/Achivements";

function Home() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Caro />
      </div>
      <div className="h-screen w-full bg-gray-50 flex align-middle justify-center items-center">
        <div>
          <div className="justify-center flex bg-gray-50  ">
            <MultiCoro />
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-gray-50 flex align-middle justify-center items-center">
        <div>
          <div className="justify-center flex bg-gray-50  ">
            <Achive />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
