import React from "react";
import Link from "next/link";

export default function Hero () {
    return (
        <div>
         {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Flowers Makes <br /> Memories!</b></h1>
        <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="mt-4">
       <Link href={"/about"}><button className="h-[60px] w-[120px] bg-white rounded-[50px] text-pink-600 hover:bg-slate-500 hover:text-white"><b>Learn More</b></button></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[90px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Flowers Makes <br /> Memories!</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4">
            <Link href={"/about"}><button className="h-[60px] w-[120px] bg-white rounded-[50px] text-pink-600 hover:bg-slate-500 hover:text-white"><b>Learn More</b></button></Link>
            </div>
         </div>
         </div>
        
        {/* Hero section close*/}
        </div>
    );
}