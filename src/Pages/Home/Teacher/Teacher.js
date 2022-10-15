import React, { useEffect, useState } from "react";

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
    </div>
  );
};

export default Teacher;
