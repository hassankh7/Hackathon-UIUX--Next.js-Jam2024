import React from "react"
import Image from "next/image"
import Link from "next/link"
import logoSofa from "@/app/assets/Logo Sofa.png"




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
                    
        </div>
        </div>
    )
}

export default Navbar;