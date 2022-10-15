import React, { useEffect, useState } from "react";
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
      <div className="text-center">
        <h3 className="text-black text-3xl font-bold uppercase  py-4">
          Our Teacher List
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-3 pt-6 px-5 py-5">
        {teacher.map((teachers) => (
          <Teachers key={teacher._id} teachers={teachers}></Teachers>
        ))}
      </div>
    </div>
  );
};

export default Teacher;