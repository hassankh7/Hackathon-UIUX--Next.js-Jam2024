// Allah Ke Name Se Shuru

import React from "react"
import Image from "next/image"
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
import  Image5  from "@/app/assets/Image (4).png"



const Header = () => {
    return(
        <div className="w-full h-[65px] py-[14px] px-[300px] bg-[#272343] flex justify-between items-center">
        <span className="text-white">Free shipping on all orders over $50</span>    

        <div className="flex justify-end gap-6">
        <select className="bg-[#272343] text-white">
            <option value="eng">Eng</option>
        </select>

          {/* FAQs Link */}
            <a href="#faqs" className="text-white hover:underline">FAQs</a>

         {/* Need Help Section  */}
        <div className="flex items-center text-white space-x-1">
         <span className="text-lg">!</span>
       <a href="#help" className="hover:underline">Need Help</a>
       </div>

        </div>
        </div>
    )
}

export default Header



export const Navbar =() => {
    return(
        <div>
        
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
                <div className="bg-gray-100">
                    <header className="bg-white shadow-md">
                        <div className="container mx-auto flex justify-between items-center py-4 px-6">
                            <div className="flex items-center ">
                                <Image src={logoSofa} alt ="logosofa"/>
                                <span className="text-xl font-bold">Comforty</span>
                            </div>
                            <nav className="flex space-x-4">
                                <a href="#" className="text-gray-700">Home</a>
                                <a href="#" className="text-gray-700">Shop</a>
                                <a href="#" className="text-gray-700">Product</a>
                                <a href="#" className="text-gray-700">Pages</a>
                                <a href="#" className="text-gray-700">About</a>
                            </nav>
                            <div className="flex items-center space-x-4 ">
                                <a href="#" className="text-gray-700"><i className="fas fa-heart"></i></a>
                                <a href="#" className="text-gray-700"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="text-gray-700">Login</a>
                            </div>
                        </div>
                    </header>
                    <main className="py-8 px-6 ">
                        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md w-[1550px] h-[850px]">
                            <div className="md:w-1/2">
                            <h5 className="text-gray-700 mb-4">WELCOME TO CHAIRY</h5>
                                <h1 className="text-[80px] font-bold mb-4">Best Furniture <br/>Collection For Your<br/>Interior.</h1>
                                
                                <button className="bg-teal-500 text-white px-4 py-2 rounded">Shop Now</button>
                            </div>
                            {/* Sofie ke Image ka Div hie Ye  */}
                            <div className="flex justify-center w-[435px] h-[584px] ">
                            <Image src={Sofa} alt="sofa" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center space-x-4 py-8">
                            <Image src={brand0} alt="Zapier1" />
                         <Image src={brand1} alt="Zapier"/>
                        <Image  src= {brand2} alt="Pipedrive"/>
                         <Image  src={brand3} alt="CIB Bank"/>
                         <Image src={brand4} alt="Burnt Toast"/>
                        <Image src={brand5} alt="PandaDoc" />
                        <Image src={brand6} alt="Moz"/>
                        </div>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
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