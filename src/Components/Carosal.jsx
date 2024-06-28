import React, { Component } from "react";
import caro1 from "../images/image-14.webp";
import caro2 from "../images/image-15.webp";
import caro3 from "../images/image-16.webp";
import { Carousel } from "react-responsive-carousel";

export default function Caro() {
  {
    return (
      <Carousel
        infiniteLoop
        autoPlay
        swipeable={true}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
        showStatus={false}
      >
        <div>
          <img src={caro1} />
        </div>
        <div>
          <img src={caro2} />
        </div>
        <div>
          <img src={caro3} />
        </div>
      </Carousel>
    );
  }
}
