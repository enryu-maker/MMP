import { Carousel } from "flowbite-react";
import pic1 from "../images/image-14.webp";
import pic2 from "../images/image-15.webp";
import pic3 from "../images/image-16.webp";

export default function Coro() {
  return (
    <div
      className="h-64 md:h-screen w-full !rounded-none"
      style={{ borderRadius: "0" }}
    >
      <Carousel
        className="!rounded-none"
        style={{ borderRadius: "0" }}
        indicators={false}
        loop={true}
      >
        <img src={pic1} alt="Image 1" />
        <img src={pic2} alt="Image 2" />
        <img src={pic3} alt="Image 3" />
      </Carousel>
    </div>
  );
}
