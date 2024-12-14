
import React from "react"
import Image from "next/image"
import  Image5  from "@/app/assets/Image (4).png"
import  Image6  from "@/app/assets/Image (5).png"
import  Image7  from "@/app/assets/Image (6).png"
import  Itembig  from "@/app/assets/item-category 1.png"
import  Item1  from "@/app/assets/Image (3).png"
import  Item2  from "@/app/assets/item-category-2.png"
import  Item3  from "@/app/assets/item-category-2.png"
import  Item4  from "@/app/assets/Image (1).png"

const TopCategories = () => {
    return(
        <div className="container mx-auto p-4">
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative">
                  <Image src={Image5} alt="Wing Chair"/>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                        <h3 className="text-lg">Wing Chair</h3>
                        <p className="text-sm">5.4k Products</p>
                    </div>
                </div>
                <div className="relative">
                <Image src={Image6} alt="Wooden Chair"/>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                        <h3 className="text-lg">Wooden Chair</h3>
                        <p className="text-sm">3.2k Products</p>
                    </div>
                </div>
                <div className="relative">
                    <Image src={Image7} alt="Desk Chair"/>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                        <h3 className="text-lg">Desk Chair</h3>
                        <p className="text-sm">1.6k Products</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="mb-8">
                        <h2 className="text-[60px] font-bold mb-4">Explore New and Popular Styles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="col-span-2">
              <Image src={Itembig} alt="Orange Chair" className="w-full h-auto "/>
              </div>
        <div className="grid grid-cols-2 gap-4">
        <Image src={Item1} alt="White Chair" className="w-full h-auto rounded-lg"/>
        <Image src={Item2} alt="White2" className="w-full h-auto rounded-lg"/>
        <Image src={Item3} alt="Gray Chair" className="w-full h-auto rounded-lg"/>
        <Image src={Item4} alt="White Chair" className="w-full h-auto rounded-lg"/>
         </div>
         </div>
         </section>
        </div>
    )
}


export default TopCategories