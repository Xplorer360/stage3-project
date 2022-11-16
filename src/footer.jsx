import React from "react";
import footericon from "./img/footericon.png";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import copyright from "./img/copyright.png"
export function Footer(){
    return(
        <footer className="bg-black pb-10">
            <article className="grid grid-cols-2 grid-rows-3 gap-y-10 gap-x-12 pl-20  pt-11 md:flex md:flex-row md:items-center md:justify-around md:pt-28 ">
            <section className="flex flex-col space-y-20 ">
                <div>
                    <img src={footericon}/>
                    
                </div>
                <div className="flex flex-row space-x-10">
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={twitter}/> 
                </div>
                
            </section>
            <section className="text-white flex flex-col items-start space-y-5">
                <p className="font-bold ">Community</p>
                <a>NFT</a>
                <a>Tokens</a>
                <a>Landlords</a>
                <a>Discord</a>
            </section>
            <section className="text-white flex flex-col items-start space-y-5">
            <p className="font-bold ">Places</p>
                <a>Castle</a>
                <a>Farms </a>
                <a>Beach</a>
                <a>Learn more</a>
            </section >
            <section className="text-white flex flex-col items-start space-y-5 "> 
            <p className="font-bold ">About us</p>
                <a>Road map</a>
                <a>Creators </a>
                <a>Career</a>
                <a>Contact us</a>
            </section>
            </article>
            <div className="flex flex-row  space-x-2 ml-28">
                <img src={copyright}/>
                <p className="text-white">2022 Metabnb</p>
            </div>
        </footer>
    )
}