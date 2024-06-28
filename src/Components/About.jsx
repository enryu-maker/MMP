import React from "react";
import about from "../images/about.png";

function About() {
  return (
    <div className="h-full w-full bg-green-50 p-5 md:p-10">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div>
            <p className="text-3xl md:text-4xl font-semibold text-center md:text-start">
              About Us
            </p>
          </div>
          <div className="w-full md:hidden contents md:w-1/2">
            <img
              src={about}
              className="w-full h-auto rounded-md shadow-md"
              alt="About us"
            />
          </div>
          <div>
            <p className="text-justify text-base md:text-lg">
              Founded on the values of family, Lalit Roongta Group prioritizes
              trust, transparency, and customer satisfaction. Embedded in this
              belief system, every structure is built to cater to the needs of
              the ever-progressive fabric of society; be it the landscaped green
              pockets, luxurious meeting rooms, serene worship places, or the
              highly equipped gyms; every space is highly functional, in sync
              with the Vaastu, and exceptionally aesthetic. Implementing the
              practice of amalgamating its principles with cutting-edge
              technological advents in the construction industry, today the
              Lalit Roongta Group has scaled unsurmountable heights of success
              and has established itself as one of the most unrivaled names of
              Nashik’s Real Estate scenario.
            </p>
          </div>
        </div>
        <div className="w-full md:contents hidden ">
          <img src={about} className="w-1/2" alt="About us" />
        </div>
      </div>
    </div>
  );
}

export default About;
