import React from "react";
import ReactPlayer from "react-player";

const Teachers = ({ teachers }) => {
  const { name, img, post, experience, fees, video } = teachers;
  return (
    <div className="">
      <div className=" pl-60 w-fit hero shadow ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="avatar pb-12">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              {name}{" "}
              <span className="text-sm text-purple-500 font-semibold">
                {post}
              </span>
            </h1>
            <p className="text-sm font-semibold">{experience} experience</p>
            <p className=" text-sm text-purple-500 font-semibold">
              Hourly fees ${fees}
            </p>
            <div className="rating rating-sm rating-half pr-6">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-1"
                checked
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-2"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-1"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-purple-500 mask mask-star-2 mask-half-2"
              />
              <p className="pl-2 text-sm font-bold">4.5</p>
            </div>
            <button className="flex">
              <label
                htmlFor="review-modal"
                className=" btn btn-outline btn-primary rounded-full btn-sm"
              >
                Reviews
              </label>
            </button>
          </div>
          <div className=" pl-32">
            <div className="collapse">
              <input type="checkbox" />
              <button className="collapse-title btn btn-outline w-40 btn-primary rounded-full btn-sm py-2">
                Read More
              </button>
              <div className="collapse-content">
                <div>
                  <div>
                    <div className="w-fit hero shadow">
                      <div className="hero-content flex-col lg:flex-row">
                        <div className="avatar pb-24">
                          <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                          </div>
                        </div>
                        <div className="pb-20">
                          <h1 className="text-xl font-bold">
                            {name}{" "}
                            <span className="text-sm text-purple-500 font-semibold">
                              {post}
                            </span>
                          </h1>
                          <p className="text-sm font-semibold">
                            {experience} experience
                          </p>
                          <p className=" text-sm text-purple-500 font-semibold">
                            Hourly fees ${fees}
                          </p>
                          <div className="rating rating-sm rating-half pr-6">
                            <input
                              type="radio"
                              name="rating-10"
                              className="rating-hidden"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-1"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-2"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-1"
                              checked
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-2"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-1"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-2"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-1"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-2"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-1"
                            />
                            <input
                              type="radio"
                              name="rating-10"
                              className="bg-purple-500 mask mask-star-2 mask-half-2"
                            />
                            <p className="pl-2 text-sm font-bold">4.5</p>
                          </div>

                          <button className="flex">
                            <label
                              htmlFor="review-modal"
                              className=" btn btn-outline btn-primary rounded-full btn-sm"
                            >
                              Reviews
                            </label>
                          </button>
                        </div>
                        <div className="pb-20">
                          <div className="card card-compact    w-40 h-36 shadow-xl">
                            <div className="card-body">
                              <figure>
                                <ReactPlayer url={video} />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
