/* eslint-disable no-unused-vars */
import React from "react";

const Social = () => {
  return (
    <div id="soc" className="-mb-11">
      <h1 className="text-center font-semibold pb-8 ">Contact me:</h1>

      <div className="flex flex-wrap justify-between px-8  pb-2">
        <a
          href="https://www.linkedin.com/in/arkajyoti-roy-gdp/"
          target="_blank"
        >
          {" "}
          <div className="w-8">
            {" "}
            <button>
              {" "}
              <img src="./img/linkedin.png" alt="linkedin" />
            </button>
          </div>
        </a>
        <a href="https://github.com/arkajyoti-roy" target="_blank">
          {" "}
          <div className="w-8">
            <button>
              {" "}
              <img src="./img/github.png" alt="github" />
            </button>
          </div>
        </a>
        <a href="mailto:arkajyotiroy273@gmail.com" target="_blank">
          {" "}
          <div className="w-8">
            {" "}
            <button>
              {" "}
              <img src="./img/gmail.png" alt="gmail" />
            </button>
          </div>
        </a>
        <a href="http://wa.me/+918974335084" target="_blank">
          {" "}
          <div className="w-8">
            <button>
              {" "}
              <img src="./img/whatsapp.png" alt="whatsapp" />
            </button>
          </div>{" "}
        </a>
      </div>
    </div>
  );
};

export default Social;
