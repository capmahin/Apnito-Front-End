import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Ghazal from "./Pages/Home/Ghazal/Ghazal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Ghazal" element={<Ghazal></Ghazal>}></Route>
      </Routes>
    </div>
  );
}

export default App;
