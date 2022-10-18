import React from "react";
import { FaThumbsUp, FaThumbsDown, FaFlag } from "react-icons/fa";

const Review = () => {
  return (
    <div className="">
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle w-full grid justify-end">
        <div className="modal-box">
          <label
            for="review-modal"
            className="btn btn-sm tbn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="font-bold text-lg">Comments(8)</h3>
          <div className="flex pl-6">
            <div className=" ">
              <input
                type="text"
                placeholder="Testing"
                className="input input-bordered input-sm w-96 max-w-xs "
              />
            </div>
            <div className=" pl-2">
              <button className="btn btn-sm ">Submit</button>
            </div>
          </div>
          <div className="hero w-fit">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar">
                <div className="w-10 rounded-full  ">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
                <h1 className="text-sm font-bold pl-2">Gourang Chohan.</h1>
                <span className="pl-2 text-sm ">3 days ago</span>
              </div>
            </div>
          </div>
          <div className="pl-14 ">
            <p className="text-sm font-semibold">
              Anushika Sharma born 1 May 1988 is an indian actress and producer
              who works in Hindi films
            </p>
            <div className="pt-2 flex">
              <button className="btn   rounded-full  btn-sm  ">Reply</button>
              <p className=" pl-2 pt-2">
                <FaThumbsUp />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-3">
                <FaThumbsDown />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-2">
                <FaFlag />
              </p>
              <p className="pl-1 pt-1">Flag in appearance.</p>
            </div>
            <div className="hero w-fit">
              <div className="hero-content flex-col lg:flex-row">
                <div className="avatar">
                  <div className="w-10 rounded-full  ">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                  </div>
                  <h1 className="text-sm font-bold pl-2">Rayan jhonson.</h1>
                  <span className="pl-2 text-sm ">3 days ago</span>
                </div>
              </div>
            </div>
            <div className="pl-12">
              <p className="text-sm font-semibold">
                Indian actress and producer who works in Hindi films
              </p>
              <div className="pt-2 flex">
                <button className="btn   rounded-full  btn-sm  ">Reply</button>
                <p className=" pl-2 pt-2">
                  <FaThumbsUp />
                </p>
                <p className="pl-1 pt-1">178 .</p>
                <p className=" pl-2 pt-3">
                  <FaThumbsDown />
                </p>
                <p className="pl-1 pt-1">178 .</p>
                <p className=" pl-2 pt-2">
                  <FaFlag />
                </p>
              </div>
            </div>
          </div>
          <div className="hero w-fit">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar">
                <div className="w-10 rounded-full  ">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
                <h1 className="text-sm font-bold pl-2">Shumit Sharma.</h1>
                <span className="pl-2 text-sm ">3 days ago</span>
              </div>
            </div>
          </div>
          <div className="pl-12">
            <p className="text-sm font-semibold">
              It is unfortunate while a majority of medical feternity spend time
              in treating the Covid patuents. a few are busy in scaring people.
            </p>
            <div className="pt-2 flex">
              <button className="btn   rounded-full  btn-sm  ">Reply</button>
              <p className=" pl-2 pt-2">
                <FaThumbsUp />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-3">
                <FaThumbsDown />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-2">
                <FaFlag />
              </p>
            </div>
          </div>
          <div className="hero w-fit">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar">
                <div className="w-10 rounded-full  ">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
                <h1 className="text-sm font-bold pl-2">Ramesh Sharma.</h1>
                <span className="pl-2 text-sm ">3 days ago</span>
              </div>
            </div>
          </div>
          <div className="pl-12">
            <p className="text-sm font-semibold">
              Everyday once scary news. i think we all humans need to live in
              fear our last breath.
            </p>
            <div className="pt-2 flex">
              <button className="btn   rounded-full  btn-sm  ">Reply</button>
              <p className=" pl-2 pt-2">
                <FaThumbsUp />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-3">
                <FaThumbsDown />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-2">
                <FaFlag />
              </p>
            </div>
          </div>
          <div className="hero w-fit">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar">
                <div className="w-10 rounded-full  ">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
                <h1 className="text-sm font-bold pl-2">
                  Gopalakrishnan Rajagopalan.
                </h1>
                <span className="pl-2 text-sm ">3 days ago</span>
              </div>
            </div>
          </div>
          <div className="pl-12">
            <p className="text-sm font-semibold">
              So this has nothing to do with Covid! But it is linked! this is
              not news but scare.it was present for decodes.but now getting
              linked Who benefits? Certainly not common man.
            </p>
            <div className="pt-2 flex">
              <button className="btn   rounded-full  btn-sm  ">Reply</button>
              <p className=" pl-2 pt-2">
                <FaThumbsUp />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-3">
                <FaThumbsDown />
              </p>
              <p className="pl-1 pt-1">178 .</p>
              <p className=" pl-2 pt-2">
                <FaFlag />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
