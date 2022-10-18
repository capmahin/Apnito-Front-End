import React, { useState } from "react";
import ReactPlayer from "react-player";

const Ghazals = ({ teachers }) => {
  const { name, img, post, experience, fees, video, address } = teachers;
  const defaultState = {
    showMore: false,
  };
  const [state, setState] = useState(defaultState);
  return (
    <div className="">
      <div className=" pl-60 w-fit hero shadow ">
        <div className="hero-content flex-col lg:flex-row">
          {/*  */}
          {!state.showMore && (
            <>
              <div className="avatar pb-12">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} />
                </div>
              </div>
              <div>
                <div className="flex">
                  <h1 className="text-xl font-bold">
                    {name}{" "}
                    <span className="text-sm text-purple-500 font-semibold">
                      {post}
                    </span>
                  </h1>
                </div>
                <p className="text-sm font-semibold">{experience} experience</p>
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
                    className=" btn btn-secondary text-black rounded-full btn-sm"
                  >
                    Reviews
                  </label>
                </button>
              </div>
            </>
          )}

          {/*  */}
          <div className="px-auto mx-auto">
            <div className="collapse px-auto mx-auto">
              <input
                type="checkbox"
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    showMore: !state.showMore,
                  }))
                }
              />
              <button className="collapse-title btn btn-outline w-40 btn-primary rounded-full btn-sm py-2">
                Read {!state.showMore ? "More" : "Less"}
              </button>
              <div className="collapse-content">
                <div>
                  <div>
                    <div className="w-fit hero shadow">
                      {/* upper starts */}
                      <div className="hero-content w-fit flex-col lg:flex-row">
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
                              className=" btn btn-secondary text-black rounded-full btn-sm"
                            >
                              Reviews
                            </label>
                          </button>
                        </div>
                        <div className="pb-20 pl-96 ">
                          <div className="card card-compact    w-40 h-36 shadow-xl">
                            <div className="card-body">
                              <figure>
                                <ReactPlayer url={video} />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* upper ends */}
                    </div>
                    <div className="">
                      <div className="hero  ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                          <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                              <figure>
                                <div className="stats bg-primary text-primary-content w-96">
                                  <div className="stat">
                                    <div className="stat-title pb-8">
                                      <p className="text-center text-xl text-white">
                                        $ Fees :
                                      </p>
                                    </div>
                                  </div>

                                  <div className="stat">
                                    <div className="stat-title  text-white">
                                      Monthly
                                    </div>
                                    <div className="stat-title text-2xl  text-white">
                                      $89,400
                                    </div>
                                  </div>
                                  <div className="stat">
                                    <div className="stat-title  text-white">
                                      Monthly
                                    </div>
                                    <div className="stat-title text-2xl  text-white">
                                      $89,400
                                    </div>
                                  </div>
                                </div>
                              </figure>
                              <div className="">
                                <h2 className="text-2xl pl-5  text-purple-500">
                                  Booking a time Slot
                                </h2>
                                <p className=" pl-5 py-2 font-semibold">
                                  Morning
                                </p>
                                <div className="card-actions justify-start pt-4 pl-8">
                                  <button className="btn btn-outline btn-primary">
                                    10.00 AM
                                  </button>
                                  <button className="btn btn-outline btn-primary">
                                    10.30 AM
                                  </button>
                                  <button className="btn btn-outline btn-primary">
                                    11.00 AM
                                  </button>
                                </div>
                                <p className=" pl-5 py-2 font-semibold">
                                  Afternoon
                                </p>
                                <div className="card-actions justify-start pt-4 pl-8">
                                  <button className="btn btn-outline btn-primary">
                                    12.00 PM
                                  </button>
                                  <button className="btn btn-outline btn-primary">
                                    1.30 PM
                                  </button>
                                  <button className="btn btn-outline btn-primary">
                                    2.00 PM
                                  </button>
                                </div>
                                <p className=" pl-5 py-2 font-semibold">
                                  Evening
                                </p>
                                <div className="card-actions justify-start pt-4 pl-8">
                                  <button className="btn btn-outline btn-primary">
                                    5.00 PM
                                  </button>
                                  <button className="btn btn-outline btn-primary">
                                    6.00 PM
                                  </button>
                                  <button className="btn btn-outline btn-primary">
                                    6.30 PM
                                  </button>
                                </div>
                                <div className="card-actions justify-center pt-4 pb-4 ">
                                  <button className="btn btn-wide btn-primary">
                                    Book Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h1 className="text-2xl font-bold">
                              {name}
                              <span className="text-sm pl-2 text-purple-500 font-semibold">
                                {post}
                              </span>
                              <span className="text-sm font-semibold pl-2">
                                {" "}
                                {experience} experience
                              </span>
                              <span>
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
                              </span>
                            </h1>
                            <p className="py-4">
                              <span className="font-bold">Address</span>:{" "}
                              {address}
                            </p>
                            <p className="pb-2">
                              <span className="font-bold pr-2">About:</span>Sonu
                              Nigam is an Indian singer, music director and
                              actor. He has been described in the media as one
                              of the most popular and successful playback
                              singers of Hindi Cinema and Kannada Cinema.
                            </p>
                            <p className="pb-2">
                              Spacial Quality in music:
                              <span className="font-bold px-2">Vocal</span>
                            </p>
                            <p className="pb-2">
                              No of Student taught:
                              <span className="font-bold px-2">2500</span>
                            </p>
                            <p className="pb-2">
                              Spacial achiements (if any):
                              <span className="font-bold px-2">Guitar</span>
                            </p>
                            <p className="pb-2">
                              Chose type of class:
                              <span className="font-bold px-2">
                                (Physical/Online)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Ghazals;
