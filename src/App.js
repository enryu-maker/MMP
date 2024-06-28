import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, route } from "react-router-dom";
import Home from "./Screens/Home";
import { Nav } from "./Components/Nav";
import Property from "./Screens/Property";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties-list/:slug" element={<Property />} />
      </Routes>
    </div>
  );
}

export default App;
