import React, { useEffect, useState } from "react";
import Ghazals from "./Ghazals";
import MenuItem from "../Teacher/MenuItem";
import Review from "./Review";

const Ghazal = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("ghazal.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between py-6">
        <div className="">
          <h3 className="text-purple-500 text-3xl font-bold uppercase text-start pl-52 pr-8">
            Music Teacher
          </h3>
        </div>
        <div className="card-actions justify-start pr-12 pl-8 flex space-x-4">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full btn-primary text-white">
            vocal
          </button>

          <button className="btn btn-secondary text-black btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full  ">
            Instrumental
          </button>
        </div>
      </div>
      <div className=" border-solid border-b-1 border-purple-500">
        <MenuItem></MenuItem>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-3 pt-6 px-5 py-5 w-fit">
        {teacher.map((teachers) => (
          <Ghazals key={teacher._id} teachers={teachers}></Ghazals>
        ))}
      </div>

      {<Review></Review>}
    </div>
  );
};

export default Ghazal;
