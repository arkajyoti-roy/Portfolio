import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import "./App.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}


  const Projects = () => {

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

  return (


    <div className="slider-container" id="pro">
  <h2 className="text-center font-semibold pb-5">Projects</h2>
     <div className="">
      <Slider {...settings}>
       
          <div className="!box-border !h-96 !w-72 !p-8 !border-2 !rounded-xl !ml-14 bg-white">

            <div className="box-border h-44 w-56  border-2 rounded-xl">
              <img src="./img/workstream.jpeg" alt="workstream" className="rounded-xl" />
            </div>

                    <div className="pt-3">
                      
                      <h1 className="text-2xl font-bold text-center">WorkStream</h1>
                      <h2 className="text-center text-sm">Office Management System</h2>
                    </div>

                  <div className="flex justify-between cursor-pointer">

                       <a href="https://github.com/arka445/WorkStream" target="_blank">  <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium text-center text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub</button></a>
   
                      <a href="https://workstream2.000webhostapp.com/log.php" target="_blank"> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium text-center text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live</button></a>

                  </div>


           </div>



           <div className="!box-border !h-96 !w-72 !p-8 !border-2 !rounded-xl !ml-16 bg-white">

              <div className="box-border h-44 w-56  border-2 rounded-xl">
                  <img src="./img/aroma.jpeg" alt="aroma" className="rounded-xl" />
              </div>
         

              <div className="pt-3">
                      
                      <h1 className="text-2xl font-bold text-center">Aroma</h1>
                      <h2 className="text-center text-sm">Coffee Shop Website</h2>
                    </div>

               <div className="flex justify-between cursor-pointer">

                 <a href="https://github.com/arka445/aroma" target="_blank"> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium text-center text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub</button></a>
   
                 <a href="https://arka445.github.io/aroma/" target="_blank"> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium text-center text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live</button></a>

               </div>

         </div>



           <div className="!box-border !h-96 !w-72 !p-8 !border-2 !rounded-xl !ml-16 bg-white">
 
                  <div className="box-border h-44 w-56  border-2 rounded-xl">
                        <img src="./img/jobhunt.jpeg"  alt="jobhunt" className="rounded-xl" />
                  </div>
                        
                  <div className="pt-3">
                      
                      <h1 className="text-2xl font-bold text-center">Job Hunt</h1>
                      <h2 className="text-center text-sm">Online Job Portal</h2>
                    </div>
 
                             <div className="flex justify-between cursor-pointer">

                                <a href="https://github.com/arka445/JobHunt" target="_blank"> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium text-center text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub</button></a>

                                 <a href="https://arka445.github.io/JobHunt/" target="_blank"> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 pb-8 focus:ring-blue-300 font-medium text-center text-sm px-3.5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live</button></a>

                              </div>

          </div>


         

      </Slider>
      </div>
    </div>
    );
};
export default Projects

