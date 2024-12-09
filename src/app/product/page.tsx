
 import React from "react";
import Link from "next/link";
import Image from "next/image";
import logosofa3 from "@/app/assets/Logo Sofa.png"
import Header from "../components/header";
import Footer from "../components/footer";

// Ab Image Import Karonga Main 
import Productchair from "@/app/assets/Pink big Sofa.png"
import Productchair1 from "@/app/assets/Image (2).png"
import Productchair2 from "@/app/assets/Image (4).png"
import Productchair3 from "@/app/assets/Image (3).png"
import Productchair4 from "@/app/assets/Image (5).png"
import Productchair5 from "@/app/assets/Image (6).png"


const Productpage =() => {
    return(
        <div>
            <Header/>

            <div className="bg-gray-100">
                    <header className="bg-white shadow-md">
                        <div className="container mx-auto flex justify-between items-center py-4 px-6">
                            <div className="flex items-center ">
                                <Image src={logosofa3} alt ="logosofa"/>
                                <span className="text-xl font-bold">Comforty</span>
                            </div>
                            <nav className="flex space-x-4">
                                <Link href="/" className="text-gray-700">Home</Link>
                                {/* <a href="#" className="text-gray-700">Shop</a> */}
                                <Link href= "/product" className="text-gray-700">Product</Link>
                                <Link href="/card" className="text-gray-700">Pages</Link>
                                <Link href="#" className="text-gray-700">About</Link>
                            </nav>
                            </div>
                            </header>
                            </div>           
              <div className="container mx-auto p-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        <div className="w-full md:w-1/2 p-4">
                        <Image src={Productchair} alt="Pink chair in a room" className="rounded-lg shadow-lg w-full" />
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <div className="flex items-center mb-4">
                                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">Hassan Khan</span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Library Stool Chair</h1>
                            <p className="text-xl text-green-500 mb-4">$20.00 USD</p>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-teal-600">
                                <i className="fas fa-shopping-cart mr-2"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">FEATURED PRODUCTS</h2>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Library Stool Chair</h3>
                            <a href="#" className="text-teal-500 hover:underline">View all</a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="text-center">
                        <Image src={Productchair1} alt="Black chair with a cushion" className="rounded-lg shadow-lg w-full mb-2" />
                                <p className="text-gray-700">Library Stool Chair</p>
                                <p className="text-gray-900 font-bold">$90</p>
                            </div>
                            <div className="text-center">
                        <Image src={Productchair2} alt="White chair on a blue background" className="rounded-lg shadow-lg w-full mb-2" />
                                <p className="text-gray-700">Library Stool Chair</p>
                                <p className="text-gray-900 font-bold">$90</p>
                            </div>
                            <div className="text-center">
                    <Image src={Productchair3} alt="Black chair on a green background" className="rounded-lg shadow-lg w-full mb-2" />
                                <p className="text-gray-700">Library Stool Chair</p>
                                <p className="text-gray-900 font-bold">$90</p>
                            </div>
                            <div className="text-center">
                        <Image src={Productchair4} alt="Orange chair on a blue background" className="rounded-lg shadow-lg w-full mb-2" />
                                <p className="text-gray-700">Library Stool Chair</p>
                                <p className="text-gray-900 font-bold">$90</p>
                            </div>
                            <div className="text-center">
                    <Image src={Productchair5} alt="Gray chair on a white background" className="rounded-lg shadow-lg w-full mb-2" />
                                <p className="text-gray-700">Library Stool Chair</p>
                                <p className="text-gray-900 font-bold">$90</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
        </div>
    )
}



export default Productpage