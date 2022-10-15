import React from "react";

const Teachers = ({ teachers }) => {
  const { name, img, post, exprieance, fees } = teachers;
  return (
    <div className="card card-side  bg-base-100 divide-y divide-dashed">
      <figure>
        <div className="avatar p-2">
          <div className="w-24 h-fit rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end align-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
