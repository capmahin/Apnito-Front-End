import React, { useEffect, useState } from "react";

import MenuItem from "../Teacher/MenuItem";
import Review from "./Review";
import WesternClassicals from "./WesternClassicals";

const List = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div>
      <div className=" border-solid border-b-1 border-purple-500">
        <MenuItem></MenuItem>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-3 pt-6 px-5 py-5 w-fit">
        {teacher.map((teachers) => (
          <WesternClassicals
            key={teacher._id}
            teachers={teachers}
          ></WesternClassicals>
        ))}
      </div>
    </div>
  );
};

export default List;
