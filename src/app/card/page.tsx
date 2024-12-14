

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Cardchair from "@/app/assets/Image (2).png"
import logo5 from "@/app/assets/Logo Sofa.png"

const Card = () => {
    return(
        <div>
         <Header/>
             <header className="bg-white shadow">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
   <div className="flex items-center">
    <Image src={logo5} alt="logo5"/>
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
   <div className="flex items-center space-x-4">
    <span className="text-gray-600">
     Contact: 0800 555-0111
    </span>
    <div className="relative">
     <button className="text-gray-600 hover:text-gray-800">
      <i className="fas fa-shopping-cart">
      </i>
      Cart
     </button>
     <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-green-500 rounded-full">
     </span>
    </div>
   </div>
  </div>
 </header>
 <main className="container mx-auto px-4 py-8">
  <div className="flex flex-col lg:flex-row lg:space-x-8">
   <div className="flex-1">
    <h2 className="text-2xl font-bold mb-4">
     Bag
    </h2>
    <div className="bg-white p-4 shadow rounded mb-4 flex items-center">
     <Image src={Cardchair} alt="Orange chair" className="w-24 h-24 object-cover mr-4" height="100"width="100"/>
     <div className="flex-1">
      <h3 className="text-lg font-semibold">
       Library Stool Chair
      </h3>
      <p className="text-gray-600">
       Ashen Slate/Cobalt Bliss
      </p>
      <p className="text-gray-600">
       Size: L Quantity: 1
      </p>
     </div>
     <div className="text-right">
      <p className="text-lg font-semibold">
       MRP: $90
      </p>
      <div className="flex space-x-2 mt-2">
       <button className="text-gray-600 hover:text-gray-800">
        <i className="fas fa-heart">
        </i>
       </button>
       <button className="text-gray-600 hover:text-gray-800">
        <i className="fas fa-trash">
        </i>
       </button>
      </div>
     </div>
    </div>
    <div className="bg-white p-4 shadow rounded mb-4 flex items-center">
     <img alt="Gray chair" className="w-24 h-24 object-cover mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/zOqFEchFGYKXElNs6pi4f97KGQI8l31nmjRArBM89dbUeH5TA.jpg" width="100"/>
     <div className="flex-1">
      <h3 className="text-lg font-semibold">
       Library Stool Chair
      </h3>
      <p className="text-gray-600">
       Ashen Slate/Cobalt Bliss
      </p>
      <p className="text-gray-600">
       Size: L Quantity: 1
      </p>
     </div>
     <div className="text-right">
      <p className="text-lg font-semibold">
       MRP: $90
      </p>
      <div className="flex space-x-2 mt-2">
       <button className="text-gray-600 hover:text-gray-800">
        <i className="fas fa-heart">
        </i>
       </button>
       <button className="text-gray-600 hover:text-gray-800">
        <i className="fas fa-trash">
        </i>
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="w-full lg:w-1/3">
    <div className="bg-white p-4 shadow rounded">
     <h2 className="text-2xl font-bold mb-4">
      Summary
     </h2>
     <div className="flex justify-between mb-2">
      <span>
       Subtotal
      </span>
      <span>
       $180.00
      </span>
     </div>
     <div className="flex justify-between mb-2">
      <span>
       Estimated Delivery &amp; Handling
      </span>
      <span>
       Free
      </span>
     </div>
     <div className="flex justify-between mb-4"><span>
       Total
      </span>
      <span className="font-bold">
       $180.00
      </span>
     </div>
     <button className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
      Member Checkout
     </button>
    </div>
   </div>
  </div>
 </main>
 <Footer/>
</div>
    )
}

export default Card