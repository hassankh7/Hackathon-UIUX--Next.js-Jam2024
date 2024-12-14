

import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo6 from "@/app/assets/Logo Sofa.png"
import Productimage1 from "@/app/assets/Pink big Sofa.png"
import Productimage2 from "@/app/assets/Image (2).png"
import Productimage3 from "@/app/assets/Image (4).png"
import Productimage4 from "@/app/assets/Image (3).png"
import Productimage5 from "@/app/assets/Image (5).png"
import Productimage6 from "@/app/assets/Image (6).png"
import Productimage7 from "@/app/assets/item-category 1.png"
import Productimage8 from "@/app/assets/Image (3).png"
import Productimage9 from "@/app/assets/Image (1).png"
import Productimage10 from "@/app/assets/Image (5).png"
import Productimage11 from "@/app/assets/Image (6).png"

// Facebook Discount Images
import fbImage1 from "@/app/assets/Image (5).png"
import fbImage2 from "@/app/assets/Image (4).png"
import fbImage3 from "@/app/assets/Image (1).png"
import fbImage4 from "@/app/assets/Image.png"
import fbImage5 from "@/app/assets/Image (2).png"
import fbImage6 from "@/app/assets/Image (6).png"





import Header from "../components/header"
import Footer from "../components/footer"


import Librarychair1 from "@/app/assets/Image.png"

const Shop =() => {
    return(
        <div>
            <Header/>
            <div className="bg-white shadow">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
   <div className="flex items-center">
    <Image src={logo6} alt="logo5"/>
    <span className="text-xl font-bold">Comforty</span>
   </div>
   <div className="flex  ">
   <nav className="flex justify-between space-x-4">
    <Link href="/"  className="text-gray-600 hover:text-gray-800">Home</Link>
    <Link href="/shop"  className="text-gray-600 hover:text-gray-800">Shop</Link>
    <Link href= "/product" className="text-gray-700">Product</Link>
    <Link href="/card" className="text-gray-700 hover:text-gray-800">Pages</Link>
    <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
    <Link href="/contact" className="text-gray-700">Contact</Link>
   </nav>
   </div>
   </div>
   </div>
    <h1 className="text-2xl font-bold mb-4">All Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
            <Image src={Librarychair1} alt="Library Stool Chair"  />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
        </div>
            </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage1} alt="Library Stool Chair"/>
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage2} alt="Library Stool Chair"  />
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage3} alt="Library Stool Chair" />
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage4} alt="Library Stool Chair" />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage5} alt="Library Stool Chair" />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">Top</span>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage6} alt="Library Stool Chair"/>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage7} alt="Library Stool Chair" />
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage8} alt="Library Stool Chair"/>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
            <Image src={Productimage9} alt="Library Stool Chair" />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage10} alt="Library Stool Chair"  />
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
                <Image src={Productimage11} alt="Library Stool Chair" className="w-full"/>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Library Stool Chair</h3>
                <p className="text-gray-500">$20</p>
            </div>
        </div>
    </div>
    <div className="mt-16 text-center">
        <h2 className="text-xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
        <div className="flex justify-center items-center">
            <input type="email" placeholder="Email Address..." className="border border-gray-300 p-2 rounded-l-lg" />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg">SUBMIT</button>
        </div>
    </div>
    <div className="mt-16 text-center">
        <h2 className="text-[39px] font-bold mb-4">Follow Products And Discounts On Instagram</h2>
        <div className="flex justify-center space-x-4">
            <Image src={fbImage1} alt="fbproduct 1" className="w-24 h-24 object-cover rounded-lg" />
            <Image src={fbImage2} alt="fbproduct2" className="w-24 h-24 object-cover rounded-lg" />
            <Image src={fbImage3} alt="fbproduct3" className="w-24 h-24 object-cover rounded-lg" />
            <Image src={fbImage4} alt="fbproduct4" className="w-24 h-24 object-cover rounded-lg" />
            <Image src={fbImage5} alt="fbproduct5" className="w-24 h-24 object-cover rounded-lg" />
            <Image src={fbImage6} alt="fbproduct6" className="w-24 h-24 object-cover rounded-lg" />
        </div>
    </div>
<Footer/>
</div>
)
}

export default Shop;