"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  
  }

  return (
     <>
     {/*  For large screen */}
     <div className="sm:hidden md:block">
        <div className="w-full h-[80px] flex border-4 border-pink-600">
            <div>
                <h1 className="text-pink-600 p-8 font-medium text-[40px] leading-[20px]"><b>&quot;Floral&quot;</b></h1>
            </div>
            <div className="pl-[450px]">
                <nav className="pt-6 flex gap-x-8">
                    <Link href={"/"} className="text-pink-600 font-medium text-[18px] leading-[24px] hover:border-b"><b>Home </b> </Link>
                    <Link href={"/about"} className="text-pink-600 font-medium text-[18px] leading-[24px] hover:border-b"><b>About </b> </Link>
                    <Link href={"/shop"} className="text-pink-600 font-medium text-[18px] leading-[24px] hover:border-b"><b>Shop </b> </Link>
                    <Link href={"/blog"} className="text-pink-600 font-medium text-[18px] leading-[24px] hover:border-b"><b>Blog </b> </Link>
                    <Link href={"/contact"} className="text-pink-600 font-medium text-[18px] leading-[24px] hover:border-b"><b>Contact </b> </Link>
                    <Link href={"/"}><b><IoSearchOutline className="h-6 w-6 text-pink-600"/></b></Link>
                    <Link href={"/checkout"}><b><IoIosHeartEmpty className="h-6 w-6 text-pink-600"/></b></Link>
                    <Link href={"/card"}><b><IoCartOutline className="h-6 w-6 text-pink-600"/></b></Link>
                </nav>
            </div>
        </div>
     </div>





      {/*  For Mobile screen */}

  <nav className="h-[80px] p-6 md:hidden w-[427px] border-4 border-pink-600">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="flex gap-x-2">
        <h1 className="font-medium text-[35px] leading-[20px] text-pink-600"><b>&quot;Floral&quot;</b></h1>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-pink-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex flex-grow items-center justify-center space-x-2 ${
            isMenuOpen ?  "flex flex-col space-y-4 absolute top-[90px] right-0 w-[300px] bg-white p-4" : "hidden"
          }`}
        >


<Link href="/" className="text-pink-600 font-medium border-b border-pink-600 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
            <b>Home</b>
          </Link>
          <Link href="/about" className="text-pink-600 font-medium border-b border-pink-600 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
          <b>About</b>
          </Link>
          <Link href="/shop" className="text-pink-600 font-medium border-b border-pink-600 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
          <b>Shop</b>
          </Link>
          <Link href="/blog" className="text-pink-600 font-medium border-b border-pink-600 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
          <b>Blog</b>
          </Link>
          <Link href="/contact" className="text-pink-600 font-medium border-b border-pink-600 text-[17px] leading-[25px] hover:bg-[#F5F5F5] hover:border-b-2 p-2">
          <b>Contact</b>
          </Link>
          <Link href={"/"}><b><IoSearchOutline className="h-6 w-6 text-pink-600"/></b></Link>
          <Link href={"/checkout"}><b><IoIosHeartEmpty className="h-6 w-6 text-pink-600"/></b></Link>
          <Link href={"/card"}><b><IoCartOutline className="h-6 w-6 text-pink-600"/></b></Link>

</div>
      </div>
    </nav>
     </>
  );
}