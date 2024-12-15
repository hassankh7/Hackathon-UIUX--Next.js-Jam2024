

import React from "react";
import Image from "next/image";


import chairwhite from "@/app/assets/Image.png"
import chairGreen from "@/app/assets/Green Large Sofa.png"
import chairbrown from "@/app/assets/Black brown Chair.png"
import blackchair from "@/app/assets/Black Chair.png"


const About=() => {
    return(
        <div>
           

        <div className="font-sans">
        <section className="flex flex-col md:flex-row gap-20">
            <div className="bg-[#007580] text-white p-8 md:w-[672px] ">
                <h1 className="text-[32px] font-bold mb-4">About Us - Comforty</h1>
                <p className="mb-6 text-[20px]">
                    At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
                </p>
                {/* Ye Button ki div hie  */}
                 <div className="w pt-[150px] "> 
                <button className="bg-[#007580] text-white py-2 px-4 border-2 border-cyan-500 rounded">View collection</button>
                 </div> 
            </div>
            <div className="md:w-1/2">
                <Image src={chairwhite} alt="A stylish chair" className="w-full h-full object-cover"/>
            </div>
        </section>

        <section className="text-center py-12">
            <h2 className="text-2xl font-bold mb-8">What Makes Our Brand Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
                <div className="bg-white p-6 shadow-md rounded">
                    <i className="fas fa-shipping-fast text-[#007580] text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2 text-[#007580]">Next day as standard</h3>
                    <p className="text-[#007580]">&quot;Order before 3pm and get your order the next day as standard&quot;</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded">
                    <i className="fas fa-hands text-[#007580] text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2 text-[#007580]">Made by true artisans</h3>
                    <p className="text-[#007580]">Handmade crafted goods made with real passion and craftsmanship</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded">
                    <i className="fas fa-tags text-teal-700 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2 text-[#007580]">Unbeatable prices</h3>
                    <p className="text-[#007580]">For our materials and quality you wont find better prices anywhere&quot;</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded">
                    <i className="fas fa-recycle text-teal-700 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2 text-[#007580]">Recycled packaging</h3>
                    <p className="text-[#007580]">We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
            </div>
        </section>

        <section className="py-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Popular Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                <div className="text-center">
                <Image src={chairGreen} alt="The Poplar suede sofa" className="w-[500px] h-[300px] object-cover mb-4"/>
                    <h3 className="text-xl font-semibold">The Poplar suede sofa</h3>
                    <p className="text-lg">$99.00</p>
                </div>
                <div className="text-center">
                <Image src={chairbrown} alt="The Dandy chair" className="w-[500px] h-[500px] object-cover mb-4"/>
                    <h3 className="text-xl font-semibold">The Dandy chair</h3>
                    <p className="text-lg">$89.00</p>
                </div>
                <div className="text-center">
          <Image src={blackchair} alt="The Dandy chair" className="w-[500px] h-[500px] object-cover mb-4"/>
                    <h3 className="text-xl font-semibold">The Dandy chair</h3>
                    <p className="text-lg">$99.00</p>
                </div>
            </div>
        </section>
    </div>
    </div>
    )
}

export default About