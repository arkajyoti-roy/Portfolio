/* eslint-disable no-unused-vars */
import React from "react";
import { BiAlignRight } from "react-icons/bi";
import "./App.css"

const Header=()=>{
  return (
    <div className="flex justify-between shadow-sm w-full bg-white">
      {/* <div className= "hember"> */}
      <div className="flex items-center justify-center"> 
        <img src="./img/react.png" alt="logoo" className="logo ml-4" />
        <h3 className="wel font-bold">Welcome</h3>
     <i className="ri-align-right hem"></i>
     
      </div>

      <div className=" text-2xl mt-4 pr-1">
      <BiAlignRight />
      </div>
    </div>
  );
};

export default Header;
