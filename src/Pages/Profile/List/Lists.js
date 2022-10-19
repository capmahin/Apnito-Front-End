import React, { useState } from "react";
import ReactPlayer from "react-player";

const Lists = ({ teachers }) => {
  const { studentName, img, teacherName, date, time } = teachers;

  return (
    <div className="">
      <div className=" pl-60 w-fit hero border-dashed border-b-4 border-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          {/*  */}

          <>
            <div className="avatar pb-12">
              <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} />
              </div>
            </div>
            <div className="pb-12">
              <div className="flex">
                <h1 className="text-2xl font-bold">{studentName} </h1>
              </div>
              <h1 className="text-xl text-primary font-semibold">
                {teacherName}
              </h1>
              <p className="text-sm font-semibold">Date: {date} </p>
              <p className=" text-sm text-primary font-semibold">{time}</p>
            </div>
          </>

          {/*  */}
          <div className="pl-96 ">
            <div className=" grid justify-items-end">
              <button className="btn btn-secondary text-black rounded-full btn-sm">
                Join Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
