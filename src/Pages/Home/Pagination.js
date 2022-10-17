import React from "react";

const Pagination = () => {
  return (
    <div className="grid justify-items-center mb-4 pb-4">
      <div className="btn-group  ">
        <div className="  pr-5">
          <button className="btn btn-outline">«</button>
        </div>
        <button className="btn btn-outline">1</button>
        <button className="btn btn-outline">2</button>
        <button className="btn btn-outline  ">3</button>
        <button className="btn btn-outline">4</button>
        <button className="btn btn-outline">5</button>
        <button className="btn btn-outline">6</button>
        <button className="btn btn-outline">7</button>
        <button className="btn btn-outline">8</button>
        <div className="  pl-5">
          <button className="btn btn-outline ">»</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
