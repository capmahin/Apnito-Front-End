import React, { useEffect, useState } from "react";

import Review from "./Review";
import Teachers from "./Teachers";

const Teacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div>
      <div className="flex justify-between py-6">
        <div className="">
          <h3 className="text-black text-3xl font-bold uppercase text-start pl-52 pr-8">
            Music Teacher
          </h3>
        </div>
        <div className="justify-end items-end px-10">
          <button className="btn btn-info ">vocal</button>

          <button className="btn btn-info  ">Instrumental</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-3 pt-6 px-5 py-5 w-fit">
        {teacher.map((teachers) => (
          <Teachers key={teacher._id} teachers={teachers}></Teachers>
        ))}
      </div>

      {<Review></Review>}
    </div>
  );
};

export default Teacher;
