import React from "react";
import "./App.css";

const Body = () => {
  return (
    <div className="sm:flex justify-between pl-4 mt-20">
      {/* Image */}
      <div className="sm:w-32 sm:h-32 p-0 border-4 rounded-full max-[380px]:border-4 w-32 max-[640px]:border-4 w-32">
        <img
          src="./img/main.png"
          className="object-cover rounded-full h-32 w-32"
          alt=""
        />
      </div>

      {/* Details */}
      <div className="sm:pr-4 pt-4 sticky md:pr-4 md:pt-5 max-[380px]:pt-8 pr-8 min-[520px]:pr-4 pt-4 sticky">
        <h2 className="text-3xl font-semibold pb-1">Arkajyoti Roy</h2>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet nte?
        </p>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet nte?
        </p>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet nte?
        </p>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet nte?
        </p>
      </div>
    </div>
  );
};

export default Body;