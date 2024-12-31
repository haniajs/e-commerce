import React from "react";
import Link from "next/link";

export default function Footer () {
  return (
    <>
    {/*  For large screen */}
    <div className="sm:hidden md:block">
    <div className="h-[360px] border-4 border-pink-600">
        <div className="flex w-full h-[260px] text-pink-600 pl-[80px] border-2 border-b-pink-600">
            <div className="flex-1 pt-10">
                <h1 className="font-bold text-[30px] leading-[35px]">&quot;Floral&quot;</h1>
                <p className="font-normal text-[16px] leading-[24px] pt-4"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Molestiae modi cum ipsam ad, illo possimus laborum ut
                   reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                   eaque? </b></p>
            </div>
            <div className="flex-1 pt-10 pl-[60px]">
                <h1 className="font-bold text-[25px] leading-[35px]">Links</h1><br />
                <Link href={"/"} className="font-normal text-[16px] leading-[24px] pt-0"><b>Home</b></Link><br />
                <Link href={"/about"} className="font-normal text-[16px] leading-[24px] mt-4"><b>About</b></Link><br />
                <Link href={"/shop"} className="font-normal text-[16px] leading-[24px]"><b>Shop</b></Link><br />
                <Link href={"/blog"} className="font-normal text-[16px] leading-[24px]"><b>Blog</b></Link><br />
                <Link href={"/contact"} className="font-normal text-[16px] leading-[24px]"><b>Contact</b></Link>
            </div>
            <div className="flex-1 pt-10">
                <h1 className="font-bold text-[25px] leading-[35px]">Resourses</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Ask For Help</b></h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Stay Connected</b></h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Sign Up</b></h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Login</b></h1>
            </div>
            <div className="flex-1 pt-10">
                <h1 className="font-bold text-[25px] leading-[35px]">Help</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Payment Options</b></h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Returns</b></h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4"><b>Privacy Policies</b></h1>
            </div>
        </div>
        <div className="text-center text-pink-600">
            <h1 className="font-medium text-[18px] leading-[35px] p-8"><b>2024 Data Fatching | All Right Reserved</b></h1>
        </div>
    </div>
    </div>



    {/*  For Mobile screen */}
    <div className="md:hidden sm:block">
        <div className="h-[940px] border-4 border-pink-600">
            <div className="text-center text-pink-600 border-2 border-b-pink-600 pb-6">
                <h1 className="font-bold text-[30px] leading-[35px] pt-8">&quot;Floral&quot;</h1>
                <p className="font-normal text-[16px] leading-[24px] pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Molestiae modi cum ipsam ad, illo possimus laborum ut
                   reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                   eaque? </p>
                 
                   <h1 className="font-bold text-[25px] leading-[35px] pt-6">Links</h1><br />
                <Link href={"/"} className="font-normal text-[16px] leading-[24px] pt-0">Home</Link><br />
                <Link href={"/about"} className="font-normal text-[16px] leading-[24px] mt-4">About</Link><br />
                <Link href={"/shop"} className="font-normal text-[16px] leading-[24px] mt-4">Shop</Link><br />
                <Link href={"/blog"} className="font-normal text-[16px] leading-[24px] mt-4">Blog</Link><br />
                <Link href={"/contact"} className="font-normal text-[16px] leading-[24px]">Contact</Link>

                <h1 className="font-bold text-[25px] leading-[35px] pt-6">Resourses</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Ask For Help</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Stay Connected</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Sign Up</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4 pb-8">Login</h1>

                <h1 className="font-bold text-[25px] leading-[35px] pt-6">Help</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Payment Options</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Returns</h1>
                <h1 className="font-normal text-[16px] leading-[24px] pt-4">Privacy Policies</h1>
            </div>

            <div className="text-center text-pink-600">
                <h1 className="font-medium text-[18px] leading-[35px] p-8">2024 Data Fatching | All Right Reserved</h1>
            </div>
        </div>
    </div>
    </>
  );
}