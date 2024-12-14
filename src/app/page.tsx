import React from "react"
// import Link from "next/link"

import Header from "./components/header"
import Navbar from "./components/Navbar"
import TopCategries from "./components/top-categories"
import OurProduct from "./components/our-products"
import Footer from "./components/footer"


const Home =() => {
  return(
    <div>
      <Header/>
      <Navbar/>
      <TopCategries/>
      <OurProduct/>
      <Footer/>

    </div>
  )
} 

export default Home