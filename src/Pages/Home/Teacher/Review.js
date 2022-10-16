import React from "react";

const Review = () => {
  return (
    <div>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
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
            <div className="pt-2">
              <button className="btn   rounded-full  btn-sm  ">Reply</button>
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
                Anushika Sharma born 1 May 1988 is an indian actress and
                producer who works in Hindi films
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
