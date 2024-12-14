// Allah Ke Name Se Shuru

import React from "react"
import Link from "next/link"


const Header = () => {
    return(
        <div className="w-full h-[65px] py-[14px] px-[300px] bg-[#272343] flex justify-between items-center">
        <span className="text-white">Free shipping on all orders over $50</span>    

        <div className="flex justify-end items-center gap-6">
        <select className="bg-[#272343] text-white">
            <option value="eng">Eng</option>
        </select>

          {/* FAQs Link */}
            <Link href="/faqs" className="text-white hover:underline text-sm">FAQs</Link>

         {/* Need Help Section  */}
        <div className="flex items-center text-white space-x-1 ">
         <span className="text-lg">!</span>
       <a href="#help" className="hover:underline text-sm">Need Help</a>
       </div>

        </div>
        </div>
    )
}

export default Header



