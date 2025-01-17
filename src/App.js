import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import { Nav } from "./Components/Nav";
import Property from "./Screens/Property";
import PropertyInfo from "./Screens/PropertyInfo";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import { ping } from "ldrs";
import { Foot } from "./Components/Footer";
import PropertyLocation from "./Screens/PropertyLocation";
import Career from "./Screens/Career";

ping.register();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <l-ping size="100" speed="1" color="green"></l-ping>
      </div>
    );
  }

  return (
    <div className="font-Poppins overflow-x-hidden">
      <Nav />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/properties-list/:slug/:slug1" element={<Property />} />
          <Route path="/properties-list/:slug" element={<Property />} />
          <Route path="/property/:slug" element={<PropertyInfo />} />
          <Route
            path="/property-location/:slug"
            element={<PropertyLocation />}
          />
        </Routes>
      </div>
      <Foot />
    </div>
  );
}

export default App;
