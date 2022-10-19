import React from "react";

const Profiles = ({ teacher }) => {
  return (
    <div>
      <div className="w-full grid justify-center">
        <div className="max-w-lg p-4  dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="grid justify-center">
                <img
                  alt=""
                  className="w-52 h-52 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-gray-700 ring-offset-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?4"
                />
              </div>
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-purple-400">
                  Facere ipsa nulla corrupti praesentium pariatur architecto
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Repellat, excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
