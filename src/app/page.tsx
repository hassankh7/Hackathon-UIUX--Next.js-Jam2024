import React from "react"
import Link from "next/link"

import Header, { Navbar } from "./components/header"
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

      <Link href ="/productpage">Home</Link>
    </div>
  )
} 

export default Home