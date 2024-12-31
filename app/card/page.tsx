import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card () {
    return (
        <>
        {/* Navbar open */}
        <Navbar />
        {/* Navbar close */}

         {/* Hero section open*/}

         {/* For large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white pt-4"><b>Cart</b></h1>
        <p className="font-medium text-[19px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing<br />
         elit.Molestiae modi cum ipsam ad, illo possimus<br />
          laborum ut reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
        <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/card"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">cart</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[70px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Cart</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur<br /> adipisicing
         elit.Molestiae modi cum<br /> ipsam ad, illo possimus laborum ut<br /> reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
           <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/card"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Cart</h1></Link>
       </div>
         </div>
         </div>
        
        {/* Hero section close*/}
        

         {/* First section open */}

          {/* For large screen */}
          <div className="sm:hidden md:block">
            <div className="flex mt-20 mb-20">
                <div className="flex-1">
                <Image src={"/Images/f3.PNG"} alt="flower3" height={100} width={100} className="ml-20 h-[400px] w-[500px] rounded-[10px]"/>
                </div>
                <div className="flex-1">
                    <h1 className="text-pink-600 font-semibold text-[32px] leading-[24px] mt-4">Branches And Buds Of Rose Flowers</h1>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing
         elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
         elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">This rose flower is available in multi colours their fragnence is excellent 
                        it can refresh your mood. 
                    </p>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">Thank You for visiting our website give some feedback about our website.</p>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">Price : $ 400.000</p>
                   <Link href={"/checkout"}><button className="h-[60px] w-[150px] rounded-[30px] bg-pink-600 text-white hover:bg-slate-500 mt-4">Checkout</button></Link>
                </div>
            </div>
          </div>

         
         {/* For mobile screen */}

          <div className="md:hidden sm:block">
            <div className="mt-20 mb-20">
                <div className="">
                <Image src={"/Images/f3.PNG"} alt="flower3" height={100} width={100} className="ml-4 h-[400px] w-[400px] rounded-[10px]"/>
                </div>
                <div className="text-center mt-10">
                    <h1 className="text-pink-600 font-semibold text-[32px] leading-[24px] mt-4">Branches And Buds Of Rose Flowers</h1>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing
         elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
         elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">This rose flower is available in multi colours their fragnence is excellent 
                        it can refresh your mood. 
                    </p>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">Thank You for visiting our website give some feedback about our website.</p>
                    <p className="mt-4 text-gray-400 font-medium text-[16px] leading-[24px]">Price : $ 400.000</p>
                   <Link href={"/checkout"}><button className="h-[60px] w-[150px] rounded-[30px] bg-pink-600 text-white hover:bg-slate-500 mt-4">Checkout</button></Link>
                </div>
            </div>
          </div>
        

        {/* Footer open */}
        <Footer />
        {/* Footer close */}
        </>
    )
}