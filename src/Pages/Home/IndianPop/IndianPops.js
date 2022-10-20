import React, { useState } from "react";
import ReactPlayer from "react-player";
import teacherCss from "../Teacher/Teachers.css";

const IndianPops = ({ teachers }) => {
  const { name, img, post, experience, fees, video, address } = teachers;
  const defaultState = {
    showMore: false,
  };
  const [state, setState] = useState(defaultState);
  return (
    <div className="">
      <div className=" pl-60 w-fit hero gird border-dashed border-b-4 border-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
          {/*  */}
          {!state.showMore && (
            <>
              <div className="flex w-full pr-72">
                <div className="avatar pr-4 pb-12">
                  <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                  </div>
                </div>
                <div className="pb-12">
                  <div className="flex">
                    <h1 className="text-xl font-bold">
                      {name}{" "}
                      <span className="text-sm text-primary font-semibold">
                        {post}
                      </span>
                    </h1>
                  </div>
                  <p className="text-sm font-semibold">
                    {experience} experience
                  </p>
                  <p className=" text-sm text-primary font-semibold">
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
                      className="bg-primary mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-primary mask mask-star-2 mask-half-2"
                    />
                    <p className="pl-2 text-sm font-bold">4.5</p>
                  </div>
                  <button className="flex Rectangle  ">
                    <label htmlFor="review-modal" className=" Reviews  ">
                      Reviews
                    </label>
                  </button>
                </div>
              </div>
            </>
          )}

          {/*  */}
          <div className="px-auto mx-auto">
            <div className="collapse grid justify-items-end ">
              <input
                type="checkbox"
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    showMore: !state.showMore,
                  }))
                }
              />

              <button className="collapse-title btn btn-outline w-40 btn-primary  rounded-full btn-sm py-2">
                Read {!state.showMore ? "More" : "Less"}
              </button>

              {/* Error on that section */}
              <div className="collapse-content">
                <div>
                  <div className="w-full">
                    {/* Read more upper section start */}
                    <div>
                      <div className="w-full hero border-solid border-b-2 border-primary ">
                        {/* upper starts */}
                        <div className="hero-content w-screen flex-col lg:flex-row ">
                          <div className="flex pb-20 pl-20 ">
                            {/* Avatar Start */}
                            <div className="avatar pb-24  ">
                              <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                              </div>
                            </div>

                            {/* Avatar End */}
                            {/* Details Start */}
                            <div className="pb-20 pl-3">
                              <h1 className="text-xl font-bold">
                                {name}{" "}
                                <span className="text-sm text-primary font-semibold">
                                  {post}
                                </span>
                              </h1>
                              <p className="text-sm font-semibold">
                                {experience} experience
                              </p>
                              <p className=" text-sm text-primary font-semibold">
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
                                  className="bg-primary mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-1"
                                  checked
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-2"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-1"
                                />
                                <input
                                  type="radio"
                                  name="rating-10"
                                  className="bg-primary mask mask-star-2 mask-half-2"
                                />
                                <p className="pl-2 text-sm font-bold">4.5</p>
                              </div>

                              <button className="flex Rectangle">
                                <label
                                  htmlFor="review-modal"
                                  className=" Reviews"
                                >
                                  Reviews
                                </label>
                              </button>
                            </div>
                            {/* Details End */}
                          </div>

                          <div className="pb-20 pl-96 ">
                            <div className="card card-compact    w-96 h-60 shadow-xl">
                              <div className="card-body">
                                <figure className="w-96 h-60">
                                  <ReactPlayer url={video} />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* upper ends */}
                    </div>
                  </div>
                  {/* Read more upper section End */}
                  {/* read more down section start */}
                  <div className="">
                    <div className=" w-fit ">
                      <div className=" flex-col lg:flex-row-reverse">
                        <div className="flex pt-2 ">
                          <div className="pb-60  w-full pl-14">
                            <div className="pt-5 ">
                              <h1 className="text-5xl font-bold">
                                {name}
                                <span className="text-2xl pl-2 text-primary font-semibold">
                                  {post}
                                </span>
                                <span className="text-xl font-semibold pl-2">
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
                                      className="bg-primary mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-1"
                                      checked
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-2"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-1"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-10"
                                      className="bg-primary mask mask-star-2 mask-half-2"
                                    />
                                    <p className="pl-2 text-sm font-bold">
                                      4.5
                                    </p>
                                  </div>
                                </span>
                              </h1>
                              <p className="py-6 ">
                                <span className="font-bold text-2xl">
                                  Address
                                </span>
                                : {address}
                              </p>
                              <p className="py-4">
                                <span className="font-bold pr-2 text-2xl">
                                  About:
                                </span>
                                Sonu Nigam is an Indian singer, music director
                                and actor. He has been described in the media as
                                one of the most popular and successful playback
                                singers of Hindi Cinema and Kannada Cinema.
                              </p>
                              <p className="pb-5">
                                Spacial Quality in music:
                                <span className="font-bold text-xl px-2">
                                  Vocal
                                </span>
                              </p>
                              <p className="pb-5">
                                No of Student taught:
                                <span className="font-bold text-xl px-2">
                                  2500
                                </span>
                              </p>
                              <p className="pb-5">
                                Spacial achiements (if any):
                                <span className="font-bold text-xl px-2">
                                  Guitar
                                </span>
                              </p>
                              <p className="pb-5">
                                Chose type of class:
                                <span className="font-bold text-xl px-2">
                                  (Physical/Online)
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="pb-8">
                            <div className="  Rectangle_Slot  ">
                              <div className="Rectangle_upper">
                                <span className="Fees"> Fees:</span>
                                <span class="Hourly px-4 pt-5">Hourly</span>
                                <span class="Weekly-3-days ">
                                  <span class="text-style-1">Weekly</span>(3
                                  days)
                                </span>
                                <span class="Monthly-12-days px-4">
                                  <span class="text-style-1">Monthly</span>(12
                                  days)
                                </span>
                                <div>
                                  <span className="span pl-16">1000</span>
                                  <span className="span pl-6">2,500</span>
                                  <span className="span pl-14">10,500</span>
                                </div>
                              </div>
                              <span class="Book-a-time-slot px-5">
                                Book a time slot
                              </span>
                              <div>
                                <span class="Morning px-5">Morning</span>
                              </div>
                              <div className="px-5">
                                <div className="flex">
                                  <div class="Rectangle_box ">
                                    <span class="-AM py-2">10:00 AM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-AM py-2">10:30 AM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-AM py-2">11:00 AM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-AM py-2">11:30 AM</span>
                                  </div>
                                </div>
                                <div>
                                  <span class="Afternoon">Afternoon</span>
                                </div>
                                <div className="flex">
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">12:00 PM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">01:30 PM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">03:00 PM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">04:00 PM</span>
                                  </div>
                                </div>
                                <div>
                                  <span class="Evening">Evening</span>
                                </div>
                                <div className="flex">
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">05:00 PM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">06:30 PM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">08:00 PM</span>
                                  </div>{" "}
                                  <div class="Rectangle_box ">
                                    <span class="-PM py-2">08:30 PM</span>
                                  </div>
                                </div>
                              </div>
                              <div className="pl-24">
                                <div class="Rectangle_button ">
                                  <button>
                                    <span class="BOOK-NOW">BOOK NOW</span>
                                  </button>
                                </div>
                              </div>
                              {/* <figure>
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
                          </figure> */}
                              {/* <div className="">
                            <h2 className="text-2xl pl-5  text-primary">
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
                          </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Read more  down section end*/}
                </div>
              </div>
            </div>
            {/* Error on that section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPops;
