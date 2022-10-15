import React from "react";

const Teachers = ({ teachers }) => {
  const { name, img, post, experience, fees } = teachers;
  return (
    <div className="card card-side   bg-base-100 divide-y divide-dashed ">
      <div className="flex">
        {" "}
        <figure>
          <div className="avatar p-2">
            <div className="w-24 h-fit rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
        </figure>
        <div className="card-body p-2">
          <h2 className=" text-md font-bold">
            {name}{" "}
            <span className="text-sm font-semibold text-purple-500">
              {post}
            </span>
          </h2>

          <p>{experience}</p>
          <p className="text-purple-500"> Hourly fees: &{fees}</p>
          <div className="flex">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-500"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-500"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-500"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-500"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-purple-500"
              />
            </div>
            <div>
              <h1 className="">4.5</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions justify-end align-middle  ">
        <div className="collapse">
          <input type="checkbox" />
          <button className=" collapse-title badge badge-primary badge-outline">
            Read More
          </button>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
