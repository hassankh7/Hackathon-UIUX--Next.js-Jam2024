

import React from "react";
import Image from "next/image";
import Product1 from "@/app/assets/Image (1).png"
import Product2 from "@/app/assets/Image (2).png"
import Product3 from "@/app/assets/Image (3).png"
import Product4 from "@/app/assets/Image (4).png"
import Product5 from "@/app/assets/Image (5).png"
import Product6 from "@/app/assets/Image (3).png"
import Product7 from "@/app/assets/Image (6).png"
import Product8 from "@/app/assets/Image.png"
 
const OurProduct =() => {

    return(
        <div>
             <section>
                        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product1} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
                                <h3 className="text-lg font-bold">Luxury Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product2} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">Sale</div>
                                <h3 className="text-lg font-bold">Luxury Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product3} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <h3 className="text-lg font-bold">Luxury Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product4} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <h3 className="text-lg font-bold">Luxury Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product5} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
                                <h3 className="text-lg font-bold">Luxury Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product6} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">Sale</div>
                                <h3 className="text-lg font-bold">Luxury Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product7} alt="Luxury Stool Chair" className="w-full h-auto rounded-lg mb-4"/>
                                <h3 className="text-lg font-bold">Libary Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                            <div className="relative bg-white p-4 rounded-lg shadow">
                            <Image src={Product8} alt="L" className="w-full h-auto rounded-lg mb-4"/>
                                <h3 className="text-lg font-bold">Libaray Stool Chair</h3>
                                <p className="text-gray-500">$20</p>
                            </div>
                        </div>
                    </section>
        </div>

    )
}



export default OurProduct