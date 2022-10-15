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
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="review-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;