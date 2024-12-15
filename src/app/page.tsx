import React from "react"
// import Link from "next/link"

import Hero from "./components/Hero"
import TopCategries from "./components/top-categories"
import OurProduct from "./components/our-products"



const Home =() => {
  return(
    <div>
    
      <Hero/>
      <TopCategries/>
      <OurProduct/>
    </div>
  )
} 

export default Home