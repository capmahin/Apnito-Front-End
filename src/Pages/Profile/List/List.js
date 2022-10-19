import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";
import Lists from "./Lists";

const List = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div className=" ">
      <div className=" border-solid border-b-1 border-purple-500">
        <MenuItem></MenuItem>
      </div>

      <div className="grid justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center  gap-3 pt-6 px-5 py-5 pl-44 w-fit">
          {teacher.map((teachers) => (
            <Lists key={teacher._id} teachers={teachers}></Lists>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
