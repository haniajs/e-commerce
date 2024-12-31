import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Checkout () {
    return (
        <>
        {/* Navbar open */}
        <Navbar />       
        {/* Navbar close */}
        

         {/* Hero section open*/}

         {/* For large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white pt-4"><b>Checkout</b></h1>
        <p className="font-medium text-[19px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing<br />
         elit.Molestiae modi cum ipsam ad, illo possimus<br />
          laborum ut reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
        <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/checkout"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Checkout</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[70px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Checkout</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur<br /> adipisicing
         elit.Molestiae modi cum<br /> ipsam ad, illo possimus laborum ut<br /> reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
           <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/checkout"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Checkout</h1></Link>
       </div>
         </div>
         </div>
        
        {/* Hero section close*/}
          
         {/* First section open*/}

          {/* For large screen */}
           <div className="sm:hidden md:block">
            <div className="flex mt-20 mb-20">
                <div className="flex-1 border-black border-r-2 ml-10">
                    <h1 className="text-pink-600 font-semibold text-[24px] leading-[24px]">Name Of Flowers</h1>
                    <p className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Rose</p>
                    <p className="text-gray-400 font-medium mt-24 text-[18px] leading-[24px]">Sunflower</p>
                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Tulip</p>
                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Pink-rose</p>
                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Jasmine</p>
                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Lilly</p>
                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Merigold</p>
                </div>
                <div className="flex-1 border-black border-r-2 ml-10">
                    <h1 className="text-pink-600 font-semibold text-[24px] leading-[24px]">Descriptions</h1>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
                </div>
                <div className="flex-1 ml-10">
                    <h1 className="text-pink-600 font-semibold text-[24px] leading-[24px]">Price Of Flowers</h1>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 400.000</p>
                    <p  className="text-gray-400 font-medium mt-24 text-[18px] leading-[24px]">$ 600.000</p>
                    <p  className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">$ 500.000</p>
                    <p  className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">$ 300.000</p>
                    <p  className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">$ 700.000</p>
                    <p  className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">$ 400.000</p>
                    <p  className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">$ 800.000</p>
                </div>
            </div>
            <Link href={"/about"}><button className="h-[60px] w-[150px] text-white bg-pink-600 rounded-[30px] hover:bg-slate-500 ml-[550px] mb-20">About Now</button></Link>
           </div>

           {/* For mobile screen */}

           <div className="md:hidden sm:block">
            <div className="mt-20 mb-20">
                <div className="text-center">
                    <h1 className="text-pink-600 font-semibold text-[24px] leading-[24px]">Name Of Flowers, Description And Price</h1>
                    <p className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Rose</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 400.000</p>

                    <p className="text-gray-400 font-medium mt-24 text-[18px] leading-[24px]">Sunflower</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 600.000</p>

                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Tulip</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 500.000</p>

                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Pink-rose</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 300.000</p>

                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Jasmine</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 700.000</p>

                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Lilly</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 400.000</p>

                    <p className="text-gray-400 font-medium mt-20 text-[18px] leading-[24px]">Merigold</p>
                    <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus
          laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <p  className="text-gray-400 font-medium mt-4 text-[18px] leading-[24px]">$ 800.000</p>
                </div>
            
            </div>
            <Link href={"/about"}><button className="h-[60px] w-[150px] ml-[150px] text-white bg-pink-600 rounded-[30px] hover:bg-slate-500  mb-20">About Now</button></Link>
           </div>
           {/* First section close*/}

        {/* Footer open */}
        <Footer />
        {/* Footer close */}
        </>
    )
}