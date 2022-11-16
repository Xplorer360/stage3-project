import React from "react";
import frame1 from "./img/frame1.png";
import frame2 from "./img/frame2.png";
import frame3 from "./img/frame3.png";
import frame4 from "./img/frame4.png";
import frame5 from "./img/frame5.png";
import frame6 from "./img/frame6.png";
import frame7 from "./img/frame7.png";
import frame8 from "./img/frame8.png";
import frame9 from "./img/frame9.png";
import frame10 from "./img/frame10.png";
import frame11 from "./img/frame11.png";
import frame12 from "./img/frame12.png";
import frame13 from "./img/frame13.png";
import frame14 from "./img/frame14.png";
import frame15 from "./img/frame15.png";
import frame16 from "./img/frame16.png";
import star from "./img/star.png";
import {IoMdOptions} from "react-icons/io"

import { Footer } from "./footer";
import { Navbar } from "./nav";




export function Placespage(){
    const locations = [
        {
          id: 1,
          place: "Restaurant",
        },
        {
          id: 2,
          place: "Cottage",
        },
        {
          id: 3,
          place: "Castle",
        },
        {
          id: 4,
          place: "Fantast city",
        },
        {
          id: 5,
          place: "beach",
        },
        {
          id: 6,
          place: "Carbins",
        },
        {
          id: 7,
          place: "Off-grid",
        },
        {
          id: 8,
          place: "Farm",
        },
      ];
    return(
    <div>
        <Navbar/>
        <div className="py-[100px] max-w-screen mx-auto">
        <div className="mx-auto">
          <div>
            <div className="flex flex-wrap mx-auto w-[100%] items-center justify-center">
              {locations.map(({ place, id, index }) => (
                <a
                  href="#"
                  key={id}
                  className={`text-[#434343] text-[15px] sm:text-[16px] md:text-[20px] ${
                    index === locations.length - 1 ? `mr-0` : `mr-3 md:mr-8`
                  } hover:text-opacity-70`}
                >
                  {place}
                </a>
              ))}
  
              <div className="flex items-center gap-4 rounded-[8px] px-4 py-2 border-2">
                <button className="">Location</button>
                <IoMdOptions  />
              </div>
            </div>
            </div>
            </div>
            </div>
            <section className="   flex flex-col items-center justify-center space-y-8 py-10 md:grid md:grid-cols-4 md:gap-3 md:px-20">
                   
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img className="w-64" src={frame1}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
        </div>
                   <div id="maindiv" class="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame2}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p class="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame3}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame4}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame5}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame6}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p className=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame7}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame8}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p className=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame9}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame10}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame11}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame12}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame13}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame14}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame15}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   <div id="maindiv" className="flex flex-col border p-3 rounded-md">
           <div>
               <img src={frame16}/>
           </div>
           <div className=" mt-5 flex flex-col items-center justify-center space-x-3">
               <div className="flex flex-col space-y-2">
                   <div className="flex flex-row items-center justify-between space-x-2 "><p class=" text-xs ">Desert king</p>
                   <p className="text-xs font-bold"> IMBT per night</p></div>
                   <div className="flex flex-row items-center justify-between space-x-4 text-xs">
                   <p >2345km away</p>
                   <p className="">availiable for 2weeks stay</p>
                   
               </div>
                   <div className=" mt-2 flex flex-row items-center justify-left space-x-2">
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star}/>
                       <img src={star} />
                       <img src={star}/>
                   </div>
               </div>
               
           </div>
                   </div>
                   
               </section>
               <Footer/>
               
</div>

    )
}