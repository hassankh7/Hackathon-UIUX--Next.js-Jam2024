import React from "react"
import Image from "next/image"
import Link from "next/link"

// Ye Sab Images Hie Export Ki Hie Mene 
import logoSofa from "@/app/assets/Logo Sofa.png"
import brand0 from "@/app/assets/Logo.png"
import brand1 from "@/app/assets/Logo (1).png"
import brand2 from "@/app/assets/Logo (2).png"
import brand3 from "@/app/assets/Logo (3).png"
import brand4 from "@/app/assets/Logo (4).png"
import brand5 from "@/app/assets/Logo (5).png"
import brand6 from "@/app/assets/Logo (6).png"
import Sofa from "@/app/assets/BigSofa.png" 

import  Imagechair  from "@/app/assets/Image.png"
import  Image2  from "@/app/assets/Image (1).png"
import  Image3  from "@/app/assets/Image (2).png"
import  Image4  from "@/app/assets/Image (3).png"



const Navbar =() => {
    return(
        <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
                <div className="bg-gray-100">
                    <header className="bg-white shadow-md">
                        <div className="container mx-auto flex justify-between items-center py-4 px-6">
                            <div className="flex  items-center ">
                                <Image src={logoSofa} alt ="logosofa" className="h-8 md:h-10"/>
                                <span className="text-xl font-bold">Comforty</span>
                            </div>
                            <nav className="flex space-x-4">
                                <Link href="/" className="text-gray-700 hover:text-gray-400">Home</Link>
                                <Link href="/shop" className="text-gray-700  hover:text-gray-400">Shop</Link>
                                <Link href= "/product" className="text-gray-700  hover:text-gray-400">Product</Link>
                                <Link href="/card" className="text-gray-700  hover:text-gray-400">Pages</Link>
                                <Link href="/about" className="text-gray-700  hover:text-gray-400">About</Link>
                                <Link href="/contact" className="text-gray-700  hover:text-gray-400">Contact</Link>
                            </nav>
                            <div className="flex items-center space-x-4 ">
                                <a href="#" className="text-gray-700 text-sm md:text-base"><i className="fas fa-heart "></i></a>
                                <a href="#" className="text-gray-700 text-sm md:text-base"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="text-gray-700 text-sm md:text-base">Login</a>
                            </div>
                        </div>
                    </header>
                    <main className="py-8 px-6 ">
                        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md w-[1550px] h-[850px]">
                            <div className="md:w-1/2">
                            <h5 className="text-gray-700 mb-4">WELCOME TO CHAIRY</h5>
                                <h1 className="text-[80px] font-bold mb-4">Best Furniture <br/>Collection For Your<br/>Interior.</h1>
                                
                                <button className="bg-teal-500 text-white px-12 py-4 rounded hover:bg-green-300">Shop Now</button>
                            </div>
                            {/* Sofie ke Image ka Div hie Ye  */}
                            <div className="flex justify-center w-[435px] h-[584px] ">
                            <Image src={Sofa} alt="sofa" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center space-x-4 py-8">
                            <Image src={brand0} alt="Zapier1" className="w-16 md:w-24" />
                         <Image src={brand1} alt="Zapier" className="w-16 md:w-24"/>
                        <Image  src= {brand2} alt="Pipedrive" className="w-16 md:w-24"/>
                         <Image  src={brand3} alt="CIB Bank" className="w-16 md:w-24"/>
                         <Image src={brand4} alt="Burnt Toast" className="w-16 md:w-24"/>
                        <Image src={brand5} alt="PandaDoc" className="w-16 md:w-24" />
                        <Image src={brand6} alt="Moz" className="w-16 md:w-24"/>
                        </div>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 md:text-left">Featured Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                <div className="bg-white p-4 rounded-lg shadow-md">
                            <Image src={Imagechair} alt="Library Stool Chair"/>
                                    <h3 className="text-lg font-bold">Library Stool Chair</h3>
                                    <p className="text-gray-700">$20</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                            <Image src={Image2} alt="Library Stool Chair"/>
                                    <h3 className="text-lg font-bold">Library Stool Chair</h3>
                                    <p className="text-gray-700"><span className="line-through">$30</span> $20</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <Image src={Image3} alt="Library Stool Chair"/>
                                    <h3 className="text-lg font-bold">Library Stool Chair</h3>
                                    <p className="text-gray-700">$20</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                               <Image src={Image4}  alt="Library Stool Chair" />
                                    <h3 className="text-lg font-bold">Library Stool Chair</h3>
                                    <p className="text-gray-700">$20</p>
                                </div>
                            </div>
                        </section>
                    </main>
        </div>
        </div>
    )
}

export default Navbar;