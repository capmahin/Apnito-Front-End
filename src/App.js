import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Ghazal from "./Pages/Home/Ghazal/Ghazal";
import Pagination from "./Pages/Home/Pagination";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Ghazal" element={<Ghazal></Ghazal>}></Route>
        <Route path="indianPop" element={<Ghazal></Ghazal>}></Route>
        <Route path="westernClassical" element={<Ghazal></Ghazal>}></Route>
      </Routes>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
