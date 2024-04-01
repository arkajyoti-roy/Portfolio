/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
const box = () => {
  return (
    <div className="sm: flex flex-wrap justify-between px-8  pb-2">
      <a href="#edu">
        <div className="h-20 w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium pt-7 text-center rounded-2xl text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <button >Educations</button>
        </div>
      </a>
      <a href="#ski">
        <div className="h-20 w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium pt-7 text-center rounded-2xl text-sm px-3.5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <button>Skills</button>
        </div>
      </a>
      <a href="#pro">
        <div className="h-20 w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium pt-7 text-center rounded-2xl text-sm px-3.5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <button>Projects</button>
        </div>
      </a>
      <a href="#soc">
        <div className="h-20 w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium pt-7 text-center rounded-2xl text-sm px-3.5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <button>Social Media</button>
        </div>
      </a>
    </div>
  );
};

export default box;
