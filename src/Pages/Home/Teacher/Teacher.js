import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Review from "./Review";
import Teachers from "./Teachers";
import Teacherscss from "./Teachers.css";

const Teacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div>
      <div className="flex w-full  py-6">
        <div className=" w-screen grid justify-end pl-2 pr-96">
          <h3 className="">
            <span className="Music-Teacher">Music Teacher</span>
          </h3>
        </div>

        <div className=" flex justify-start pl-96 w-full space-x-4">
          <div className="Rectangles ">
            <button className=" ">
              <span className="Vocal">Vocal</span>
            </button>
          </div>
          <div className="Rectangless">
            <button className="  ">
              <span className="Instrumental">Instrumental</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid justify-center">
        <div className=" border-solid border-b-1 border-primary">
          <MenuItem></MenuItem>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-3 pt-6 pr-64 py-5 w-full ">
          {teacher.map((teachers) => (
            <Teachers key={teacher._id} teachers={teachers}></Teachers>
          ))}
        </div>
      </div>

      {<Review></Review>}
    </div>
  );
};

export default Teacher;
