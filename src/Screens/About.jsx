import React from "react";

export default function About() {
  return (
    <div className="h-full w-full flex flex-col justify-center font-Poppins items-center bg-slate-50">
      <div className="h-[200px] w-full bg-green-500 text-white px-10 text-4xl font-black tracking-wide flex items-center">
        About Us
      </div>
      <div className="sm:w-[78%] w-[92%] bg-white rounded-md my-20 shadow-lg  ">
        <div className="flex flex-col justify-evenly items-start h-full p-5">
          <p className="text-base text-gray-700 text-justify">
            Owning a home is a dream that escapes no one. A dream made of
            lifelong ambitions, aiming at safety, stability, and fulfillment.
            Materializing these dreams in the most uncompromising, qualitative,
            and timely manner is what the Lalit Roongta Group has been doing
            since its inception in 1996, and furthers this expertise in the
            creation of functional, and efficient spaces, serving every trade.{" "}
            <br />
            <br />
            Founded on the values of family, this family-owned organization
            prioritizes trust, transparency, and customer satisfaction. Embedded
            in this belief system, every structure is built to cater to the
            needs of the ever-progressive fabric of society; be it the
            landscaped green pockets, luxurious meeting rooms, serene worship
            places, or the highly equipped gyms; every space is highly
            functional, in sync with the Vaastu, and exceptionally aesthetic.
            The Lalit Roongta Group recognizes that achieving this structural
            equilibrium effortlessly, is possible only on account of its
            exceptionally adept and skillful team of engineers, architects,
            designers, and marketing and sales whizzes who are treated not as
            employees but as an extension of the Roongta family.
            <br />
            <br />
            Implementing this practice of amalgamating its principles with
            cutting-edge technological advents in the construction industry,
            today the Lalit Roongta Group has scaled unsurmountable heights of
            success and has established itself as one of the most unrivaled
            names of Nashik’s Real Estate scenario.
          </p>
        </div>
      </div>
    </div>
  );
}
