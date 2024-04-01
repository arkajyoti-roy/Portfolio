import React from 'react'
import "./App.css";
const Test = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1


  return (
    <div>
      <h2 className="text-center font-semibold pb-5">Projects</h2>

<div className='flex justify-center'>


               <div className="box-border h-80 w-72 p-8 border-2 rounded-xl">


               <div className="box-border h-44 w-56  border-2 rounded-xl">
              <img src="./img/workstream.jpeg" alt="workstream" className='object-cover' />
            </div>

                  <div className="flex justify-between cursor-pointer">

                       <a href="https://github.com/arka445/WorkStream" target='_blank'> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6">GitHub</button></a>
   
                      <a href="https://workstream2.000webhostapp.com/log.php"> <button className="box-border h-12 w-20 p-4 border-2 rounded-2xl mt-6">Live</button></a>

                  </div>



                </div>

</div>

    </div>
  )
}

export default Test
