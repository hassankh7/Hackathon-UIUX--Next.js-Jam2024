

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo8 from "@/app/assets/Logo Sofa.png"
import Header from "../components/header";
import Footer from "../components/footer";

const Faqs =() => {

    return(
        <div>
        <Header/>

        <div className=  "bg-gray-100 ">
                <header className="bg-white shadow-md flex justify-center">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        <div className="flex items-center ">
                            <Image src={logo8} alt ="logosofa"/>
                            <span className="text-xl font-bold">Comforty</span>
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
                        <div className="flex justify-center items-center">
                    <h1 className="text-[50px] font-bold mb-4 ml-24">Questions Looks Here</h1>
                    </div>
                    <div className="ml-72">
                    <p className="text-gray-600 mb-8 text-center max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <div className="flex justify-between items-center">
                    <div className="flex justify-center">
                                <h3 className="text-lg font-semibold">What types of chairs do you offer?</h3>
                                <i className="fas fa-plus"></i>

                    </div>
                            </div>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">How can we get in touch with you?</h3>
                                <i className="fas fa-plus"></i>
                            </div>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">Do your chairs come with a warranty?</h3>
                                <i className="fas fa-plus"></i>
                            </div>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">What will be delivered? And When?</h3>
                                <i className="fas fa-plus"></i>
                            </div>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">Can I try a chair before purchasing?</h3>
                                <i className="fas fa-plus"></i>
                            </div>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">How do I clean and maintain my Comforty chair?</h3>
                                <i className="fas fa-plus"></i>
                            </div>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
    )
}
export default Faqs