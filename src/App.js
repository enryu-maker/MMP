import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, route } from "react-router-dom";
import Home from "./Screens/Home";
import { Nav } from "./Components/Nav";
import Property from "./Screens/Property";
import PropertyInfo from "./Screens/PropertyInfo";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/properties-list/:slug" element={<Property />} />
        <Route path="/property/:slug" element={<PropertyInfo />} />

      </Routes>
    </div>
  );
}


export default App;
