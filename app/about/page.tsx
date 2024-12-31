import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/Footer";

export default function About () {
    return (
        <>
         {/* Navbar  open*/}
         <Navbar />
         {/* Navbar close */}


         {/* Hero section open*/}

         {/* For large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white pt-4"><b>About Us</b></h1>
        <p className="font-medium text-[19px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing<br />
         elit.Molestiae modi cum ipsam ad, illo possimus<br />
          laborum ut reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
        <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/about"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">About Us</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[70px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>About Us</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur<br /> adipisicing
         elit.Molestiae modi cum<br /> ipsam ad, illo possimus laborum ut<br /> reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
           <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/about"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">About Us</h1></Link>
       </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        {/* First section open*/}
         {/* For large screen */}

         <div className="sm:hidden md:block">
         <div className="mt-12">
                  <h1 className="font-semibold text-[48px] leading-[72px] text-center text-pink-600">About Us For Our Website</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-center text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque?</p>
                </div>
            <div className="flex pt-6">
                <div className="flex-1 mt-12">
                    <Image src={"/Images/f1.PNG"} alt="flower1" height={100} width={100} className="h-[400px] w-[400px] ml-32"/>
                </div>
                <div className="flex-1 mt-12 mr-10">
                <h1 className="font-semibold text-[48px] leading-[72px] text-pink-600">About Us</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae<br /> modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati.<br /> Ducimus, quas.
                    Corrupti, pariatur eaque? Lorem ipsum dolor sit<br /> amet consectetur adipisicing
                    elit.Molestiae  modi cum ipsam ad,<br /> illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.<br />
                    Corrupti, pariatur eaque?</p> 
                    <Link href={"/contact"}><button className="h-[60px] w-[150px] bg-pink-600 text-white mt-4 rounded-[40px] hover:bg-slate-500">Contact Us</button></Link>
                </div>
            </div>
         </div>

         {/* For mobile screen */}

         <div className="md:hidden sm:block">
         <div className="mt-12">
                  <h1 className="font-semibold text-[48px] leading-[72px] text-center text-pink-600">About Us For Our Website</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-center text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque?</p>
                </div>
            <div className="pt-6">
                <div className="mt-12">
                    <Image src={"/Images/f1.PNG"} alt="flower1" height={100} width={100} className="h-[400px] w-[426px]"/>
                </div>
                <div className="mt-12">
                <h1 className="font-semibold text-[48px] leading-[72px] text-center text-pink-600">About Us</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-center text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae  modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque?</p> 
                    <Link href={"/contact"}><button className="h-[60px] w-[150px] bg-pink-600 ml-[140px] text-white mt-4 rounded-[40px] hover:bg-slate-500">Contact Us</button></Link>
                </div>
            </div>
         </div>
         {/* First section close*/}


         {/* Second section open*/}
         {/* For large screen */}

         <div className="sm:hidden md:block">
         <div className="flex pt-6">
         <div className="flex-1 mt-12 ml-32">
                <h1 className="font-semibold text-[48px] leading-[72px] text-pink-600">Our Story</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae<br /> modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati.<br /> Ducimus, quas.
                    Corrupti, pariatur eaque? Lorem ipsum dolor sit<br /> amet consectetur adipisicing
                    elit.Molestiae  modi cum ipsam ad,<br /> illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.<br />
                    Corrupti, pariatur eaque?</p> 
                    <Link href={"/contact"}><button className="h-[60px] w-[150px] bg-pink-600 text-white mt-4 rounded-[40px] hover:bg-slate-500">Contact Us</button></Link>
                </div>
                <div className="flex-1 mt-12 mr-10 mb-8">
                    <Image src={"/Images/f2.PNG"} alt="flower1" height={100} width={100} className="h-[400px] w-[400px]"/>
                </div>
            </div>
         </div>

         {/* For mobile screen */}

         <div className="md:hidden sm:block">
         <div className="pt-6">
         <div className="mt-12">
                <h1 className="font-semibold text-[48px] text-center leading-[72px] text-pink-600">Our Story</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-center text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae  modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque?</p> 
                    <Link href={"/contact"}><button className="h-[60px] w-[150px] ml-[140px] text-center bg-pink-600 text-white mt-4 rounded-[40px] hover:bg-slate-500">Contact Us</button></Link>
                </div>
                <div className="mt-12 mb-8">
                    <Image src={"/Images/f2.PNG"} alt="flower1" height={100} width={100} className="h-[400px] w-[426px]"/>
                </div>
            </div>
         </div>
          {/* Second section close*/}


        {/* Footer open*/}
        <Footer />
        {/* Footer close */}
        </>
    )
}