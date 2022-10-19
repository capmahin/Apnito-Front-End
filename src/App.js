import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Ghazal from "./Pages/Home/Ghazal/Ghazal";
import Pagination from "./Pages/Home/Pagination";
import IndianPop from "./Pages/Home/IndianPop/IndianPop";
import WesternClassical from "./Pages/Home/WesternClassical/WesternClassical";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Ghazal" element={<Ghazal></Ghazal>}></Route>
        <Route path="indianPop" element={<IndianPop></IndianPop>}></Route>
        <Route path="westernClassical" element={<WesternClassical />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
