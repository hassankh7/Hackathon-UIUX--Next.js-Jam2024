
import React from "react";
import Link  from "next/link";
import Image from "next/image";
import logo7 from "@/app/assets/Logo Sofa.png"
import Header from "../components/header";
import Footer from "../components/footer";

const Contact =() => {

    return(
        <div className="flex flex-col justify-between items-center min-h-screen bg-white">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <Header/>
            <div className="bg-gray-100">
                    <header className="bg-white shadow-md">
                        <div className="container mx-auto flex justify-between items-center py-4 px-6">
                            <div className="flex justify-between items-center ">
                                <Image src={logo7} alt ="logosofa" className="w-8 h-8"/>
                                <span className="text-xl font-bold">Comforty  </span>
                            </div>
                            <nav className="flex space-x-4">
                                <Link href="/" className="text-gray-700">Home</Link>
                                <Link href="/shop" className="text-gray-700">Shop</Link>
                                <Link href="/product" className="text-gray-700">Product</Link>
                                <Link href="/card" className="text-gray-700">Pages</Link>
                                <Link href="/about" className="text-gray-700">About</Link>
                                <Link href="/contact" className="text-gray-700">Contact</Link>
                            </nav>
                            </div>
                            </header>
                            </div>           
        <div className="w-full max-w-4xl p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Get In Touch With Us</h1>
            <p className="text-center text-gray-600 mb-8">
                For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
            <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                    <div className="flex items-start mb-6">
                        <i className="fas fa-map-marker-alt text-2xl text-black mr-4"></i>
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Address</h2>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-6">
                        <i className="fas fa-phone-alt text-2xl text-black mr-4"></i>
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Phone</h2>
                            <p>Mobile: + (84) 546-6789</p>
                            <p>Hotline: + (84) 456-6789</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <i className="fas fa-clock text-2xl text-black mr-4"></i>
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Working Time</h2>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                {/* Ye second Form Hie  */}
                <div className="md:w-1/2">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Your name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Abc" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email address</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Abc@def.com" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Subject</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="This is an optional" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Message</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Hi! I'd like to ask about"></textarea>
                        </div>
                        <button type="submit" className="w-full p-2 bg-teal-500 text-white rounded">Submit</button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-100 p-8 flex justify-around">
                <div className="text-center">
                    <i className="fas fa-trophy text-3xl text-black mb-2"></i>
                    <h3 className="text-lg font-semibold">High Quality</h3>
                    <p className="text-gray-600">crafted from top materials</p>
                </div>
                <div className="text-center">
                    <i className="fas fa-shield-alt text-3xl text-black mb-2"></i>
                    <h3 className="text-lg font-semibold">Warranty Protection</h3>
                    <p className="text-gray-600">Over 2 years</p>
                </div>
                <div className="text-center">
                    <i className="fas fa-headset text-3xl text-black mb-2"></i>
                    <h3 className="text-lg font-semibold">24 / 7 Support</h3>
                    <p className="text-gray-600">Dedicated support</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Contact 
