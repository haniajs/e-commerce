import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdLocalFlorist } from "react-icons/md";
import Link from "next/link";
import React from "react";

export default function Blog () {
    return (
        <>
        {/* Navbar open */}
        <Navbar />
        {/* Navbar close */}
        
         {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white pt-4"><b>Blog</b></h1>
        <p className="font-medium text-[19px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing<br />
         elit.Molestiae modi cum ipsam ad, illo possimus<br />
          laborum ut reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
        <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/about"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Blog</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[70px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Blog</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur<br /> adipisicing
         elit.Molestiae modi cum<br /> ipsam ad, illo possimus laborum ut<br /> reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
           <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/about"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Blog</h1></Link>
       </div>
         </div>
         </div>
        
        {/* Hero section close*/}

        
        {/* First section open */}
        {/* For large screen*/}
        <div className="sm:hidden md:block">
            <div>
                <Image src={"/Images/b1.PNG"} alt="blog1" height={400} width={800} className="h-[600px] w-[1000px] ml-[150px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[150px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[150px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[150px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4 mr-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[150px] mt-4 border-black border-b-4">Read More</button>
            </div>


            <div>
                <Image src={"/Images/b2.PNG"} alt="blog2" height={400} width={800} className="h-[600px] w-[1000px] ml-[150px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[150px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[150px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[150px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4 mr-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[150px] mt-4 border-black border-b-4">Read More</button>
            </div>


            <div>
                <Image src={"/Images/b3.PNG"} alt="blog3" height={400} width={800} className="h-[600px] w-[1000px] ml-[150px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[150px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[150px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[150px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4 mr-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[150px] mt-4 border-black border-b-4">Read More</button>
            </div>


            <div>
                <Image src={"/Images/b4.PNG"} alt="blog4" height={400} width={800} className="h-[600px] w-[1000px] ml-[150px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[150px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[150px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[150px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4 mr-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[150px] mt-4 border-black border-b-4">Read More</button>
            </div>

            <button className="h-[60px] w-[150px] text-white bg-pink-600 ml-[550px] mt-10 rounded-[30px] mb-16 hover:bg-slate-500">Read More</button>
        </div>


        {/* For mobile screen*/}

        <div className="md:hidden sm:block">
            <div>
                <Image src={"/Images/b1.PNG"} alt="blog1" height={400} width={800} className="h-[400px] w-[400px] ml-[10px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[10px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[10px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[10px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[10px] mt-4 border-black border-b-4">Read More</button>
            </div>


            <div>
                <Image src={"/Images/b2.PNG"} alt="blog2" height={400} width={800} className="h-[400px] w-[400px] ml-[10px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[10px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[10px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[10px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[10px] mt-4 border-black border-b-4">Read More</button>
            </div>


            <div>
                <Image src={"/Images/b3.PNG"} alt="blog3" height={400} width={800} className="h-[400px] w-[400px] ml-[10px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[10px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[10px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[10px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[10px] mt-4 border-black border-b-4">Read More</button>
            </div>


            <div>
                <Image src={"/Images/b4.PNG"} alt="blog4" height={400} width={800} className="h-[400px] w-[400px] ml-[10px] mt-20 rounded-[10px]"/>
                <div className="flex mt-4 gap-x-6 text-gray-400 ml-[10px]">
                <div className="flex">
                <IoPersonSharp className="h-6 w-8"/>
                <h1>Person</h1>
                </div>
                <div className="flex">
                <BsCalendar2DateFill className="h-6 w-8"/>
                <h1>01: 01: 2025</h1>
                </div>
                <div className="flex">
                <MdLocalFlorist className="h-6 w-8"/>
                <h1>Our Fields</h1>
                </div>
                </div>
                <h1 className="ml-[10px] font-semibold text-[34px] leading-[24px] text-pink-600 mt-4">Our Fields</h1>
                <p className="ml-[10px] font-medium text-[16px] leading-[24px] text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
           Corrupti, pariatur eaque?</p>
           <button className="font-medium text-[16px] leading-[24px] ml-[10px] mt-4 border-black border-b-4">Read More</button>
            </div>

            <button className="h-[60px] w-[150px] text-white bg-pink-600 ml-[150px] mt-10 rounded-[30px] mb-16 hover:bg-slate-500">Read More</button>
        </div>
        {/* First section close*/}

        {/* Footer open */}
        <Footer />
        {/* Footer close */}
        </>
    );
}