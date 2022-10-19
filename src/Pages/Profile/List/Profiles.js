import React from "react";

const Profiles = ({ teachers }) => {
  const { name, img, post, experience, address, fees } = teachers;
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
                  src={img}
                />
              </div>
              <div className="items-center text-center text-2xl font-bold">
                <span>{name}</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold dark:text-purple-400">
                {post}
              </h3>

              <p className="leading-snug dark:text-gray-400 text-xl font-semibold">
                Address: {address}
              </p>
              <p className="dark:text-gray-400 text-xl font-semibold">
                fees:{fees}
              </p>
              <p>Experience: {experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
