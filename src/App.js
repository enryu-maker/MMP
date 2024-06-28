import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, route } from "react-router-dom";
import Home from "./Screens/Home";
import { Nav } from "./Components/Nav";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
