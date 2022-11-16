import React from "react";

import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import CatHead from "./img/head.svg";

import houseicon from "./img/houseicon1.png";
import sub from "./img/sub.svg";


import frame1 from "./img/frame1.png";
import frame2 from "./img/frame2.png";
import frame3 from "./img/frame3.png";
import frame4 from "./img/frame4.png";
import frame5 from "./img/frame5.png";
import frame6 from "./img/frame6.png";
import frame7 from "./img/frame7.png";
import frame8 from "./img/frame8.png";
import star from "./img/star.png";
import images from "./img/3images.png";
import { Navbar } from "./nav";
import { Footer } from "./footer";

export function Home(){
    return(
        <div class="w-80%">
           <Navbar/> 
        <main class=" w-80% mt-10">
            <article className=" flex flex-col items-center justify-between space-y-10 md:flex md:flex-row md:items-center md:justify-between w-80%  p-20" >
        <section className=" flex flex-col md:w-1/2">
        <div>
            <h2 className=" text-2xl  mx-10 px-10 w-80 md:w-96  text-center md:text-3xl leading-10 font-semibold md:text-left">Rent a <span class="text-pink-800 font-bold">Place</span> away from <span class="text-pink-800 font-bold">Home</span> in the <span class="text-pink-800 font-bold">Metaverse</span></h2>
        </div>
        <div className=" flex flex-col items-center justify-center w-60 pl-20 mt-10 text-1xl font-semibold md:text-left text-grey-50 md:leading-9 md:60 font-sans"><p class=" w-full">We provide you access to luxury and afffordable houses</p> 
        <p className="">in the metaverse,
            get a chance to turn your imagination into reality in your comfort zone</p></div>
            <div className="flex flex-row  mt-10  w-1/2">
                <input className="border w-52 ml-10 rounded-l md:w-96 md:pr-10 pl-5 py-3 " placeholder="Search for location"/>
                <button className="bg-pink-800 text-white  rounded-r px-12 py-3">Search</button>
            </div>
        </section>
        <section className=" flex flex-row space-x-2  ">
            <div className="flex flex-col space-y-2 mr-0 mt-20">
            <img src={image1}/>
            <img src={image2}/>
            </div>
            <div className="flex flex-col space-y-2">
            <img src={image3}/>
            <img src={image4}/>
            </div>
        </section>
            </article>
            <article className="flex flex-row bg-pink-800 justify-between items-center py-3 mt-20">
                <div className="flex flex-row items-center justify-center pl-10 w-32">
                    <img src={houseicon}/>
                    <p className="text-white font-bold md:text-4xl">MBToken</p>
                    
                </div>
                <div >
                <img className="w-32 md:h-10" src={CatHead}/>
  
                </div>
                <div >
                <img className=" w-32 pr-10" src={sub}/>
                    
                </div>
            </article>
            <article >
                <h1 className=" text-4xl font-bold my-10 ">Inspiration for your next adventure</h1>
                <section className="   flex flex-col items-center justify-center space-y-8 py-10 md:grid md:grid-cols-4 md:gap-3 md:px-20">
                   
                    <div id="maindiv" className="flex flex-col border p-3 rounded-md">
            <div>
                <img className="w-64" src={frame1}/>
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
                    <p>availiable for 2weeks stay</p>
                    
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

                   
                    
                </section>         
            </article>
            <article className="flex flex-col items-center justify-center space-y-10 md:flex md:flex-row md:items-center md:justify-between  p-20  bg-pink-800">
                <section className="text-left px-20 md:px-5">
                    <h1 className="text-5xl font-bold text-white mb-10">Metabnb NFTs</h1>
                    <p className=" w-60 md:w-96 text-white leading-8 text-lg"> Discover our NFT gift cards collection. Loyal 
                        customers gets amazing gift cards which are
                        traded as NFTs.These NFTs gives our cutomer
                         access to loads of our exclusive services.</p>
                    <button className="text-pink-800 bg-white mt-10 px-10 py-3 rounded font-medium">Learn more</button>
                </section>
                <section>
                    <img src={images}/>
                </section>
            </article>
        </main>
        <Footer/>
        </div>
    )
}
