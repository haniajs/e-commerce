import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Contact () {
    return (
        <>
        {/* Navbar  open*/}
        <Navbar />
        {/* Navbar  close*/}


        {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.PNG')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white pt-4"><b>Contact Us</b></h1>
        <p className="font-medium text-[19px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing<br />
         elit.Molestiae modi cum ipsam ad, illo possimus<br />
          laborum ut reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
        <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/contact"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Contact Us</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.PNG')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[70px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Contact Us</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur<br /> adipisicing
         elit.Molestiae modi cum<br /> ipsam ad, illo possimus laborum ut<br />
          reiciendis obcaecati. Ducimus, quas.<br /> Corrupti, pariatur eaque?</p>
           <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/contact"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Contact Us</h1></Link>
       </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        {/* subHero section open*/}
         
         {/* For large screen*/}

         <div className="mt-20 sm:hidden md:block">
            <h1 className="font-semibold text-[36px] leading-[54px] text-center text-pink-600">Get In Touch With Us</h1>
            <p className="font-normal text-[16px] leading-[24px] text-center text-gray-400 mt-2">For More Information About Our Product & Services. Please Feel Free To Drop Us<br />
             An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        {/* For Mobile screen*/}

        <div className="mt-20 sm:block md:hidden">
            <h1 className="font-semibold text-[36px] leading-[54px] text-center text-pink-600">Get In Touch With Us</h1>
            <p className="font-normal text-[16px] leading-[24px] text-center text-gray-400 mt-2">For More Information About Our Product & Services. Please Feel Free To Drop Us
             An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

         {/* subHero section close*/}

         {/* Form section open*/}

         {/* For large screen*/}
         <div className="sm:hidden md:block">
         <div className="flex  mt-[150px]">
            <div className="flex-1 ml-[200px]">

                <div className="flex gap-x-4">
                <FaLocationDot className="h-6 w-6"/>
                <div>
                    <h1 className="font-medium text-[24px] leading-[36px]">Address</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-gray-400">236 5th SE Avenue, New<br /> York NY10000, United <br />States
                    </p>
                    </div>
                </div>

                <div className="flex gap-x-4 mt-12">
                <FaPhoneAlt className="h-6 w-6"/>
                <div>
                    <h1 className="font-medium text-[24px] leading-[36px]">Phone</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-gray-400">Mobile: +(84) 546-6789<br />
                    Hotline: +(84) 456-6789
                    </p>
                    </div>
                </div>

                <div className="flex gap-x-4 mt-12">
                <GoClockFill className="h-6 w-6"/>
                <div>
                    <h1 className="font-medium text-[24px] leading-[36px]">Working Time</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-gray-400">Monday-Friday: 9:00 -<br /> 22:00
                   <br /> Saturday-Sunday: 9:00 -<br /> 21:00</p>
                    </div>
                </div>
               </div>

            <div className="flex-1 mr-28">
                <form action="">
                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Your name</label><br />
                    <input type="text" placeholder="Abc" className="h-[75px] w-[528.75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Email address</label><br />
                    <input type="text" placeholder="Abc@def.com" className="h-[75px] w-[528.75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Subject</label><br />
                    <input type="text" placeholder="This is an optional" className="h-[75px] w-[528.75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Message</label><br />
                    <textarea placeholder="Hi! i'd like to ask about" className="h-[120px] w-[528.75px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"></textarea><br />

                    <button className="bg-pink-600 h-[55px] w-[237px] rounded-[5px] text-white mb-20 hover:bg-slate-500">Submit</button>
                </form>
            </div>
         </div>
         </div>



         {/* For Mobile screen*/}
         <div className="sm:block md:hidden">
            <div className="mt-[150px]">
                <div>
                <form action="">
                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Your name</label><br />
                    <input type="text" placeholder="Abc" className="h-[75px] w-[420px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Email address</label><br />
                    <input type="text" placeholder="Abc@def.com" className="h-[75px] w-[420px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Subject</label><br />
                    <input type="text" placeholder="This is an optional" className="h-[75px] w-[420px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"/><br />

                    <label htmlFor="" className="font-medium text-[16px] leading-[24px]">Message</label><br />
                    <textarea placeholder="Hi! i'd like to ask about" className="h-[120px] w-[420px] border border-[#9F9F9F] rounded-[10px] mt-4 p-4 pl-4 mb-8"></textarea><br />

                    <button className="bg-pink-600 h-[55px] w-[237px] rounded-[5px] text-white ml-[90px] hover:bg-slate-500">Submit</button>
                </form>
                </div>
                <div className="ml-[100px] mt-[40px]">
                <div className="flex gap-x-4">
                <FaLocationDot className="h-6 w-6"/>
                <div>
                    <h1 className="font-medium text-[24px] leading-[36px]">Address</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-gray-400">236 5th SE Avenue, New<br /> York NY10000, United <br />States
                    </p>
                    </div>
                </div>

                <div className="flex gap-x-4 mt-12">
                <FaPhoneAlt className="h-6 w-6"/>
                <div>
                    <h1 className="font-medium text-[24px] leading-[36px]">Phone</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-gray-400">Mobile: +(84) 546-6789<br />
                    Hotline: +(84) 456-6789
                    </p>
                    </div>
                </div>

                <div className="flex gap-x-4 mt-12">
                <GoClockFill className="h-6 w-6"/>
                <div>
                    <h1 className="font-medium text-[24px] leading-[36px]">Working Time</h1>
                    <p className="font-normal text-[16px] leading-[24px] mb-8 text-gray-400">Monday-Friday: 9:00 -<br /> 22:00
                   <br /> Saturday-Sunday: 9:00 -<br /> 21:00</p>
                    </div>
                    </div>
                </div>
            </div>
         </div>

         {/* Form section close*/}

        {/* Footer  open*/}
        <Footer />
        {/* Footer  close*/}
        </>
    );
}