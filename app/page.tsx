import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Home () {
  return (
    <div>
      <Navbar />
      <Hero />
      

      {/* First section open*/}
         {/* For large screen */}

         <div className="sm:hidden md:block">
         <div className="mt-12">
                  <h1 className="font-semibold text-[48px] leading-[72px] text-center text-pink-600">Our New Collections</h1>
                </div>
            <div className="flex pt-6">
                <div className="flex-1 mt-12">
                    <Image src={"/Images/f2.PNG"} alt="flower1" height={100} width={100} className="h-[400px] w-[400px] ml-32"/>
                </div>
                <div className="flex-1 mt-12 mr-10">
                <h1 className="font-semibold text-[48px] leading-[72px] text-pink-600">About Us</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae<br /> modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati.<br /> Ducimus, quas.
                    Corrupti, pariatur eaque? Lorem ipsum dolor sit<br /> amet consectetur adipisicing
                    elit.Molestiae  modi cum ipsam ad,<br /> illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.<br />
                    Corrupti, pariatur eaque?</p> 
                    <Link href={"/about"}><button className="h-[60px] w-[150px] bg-pink-600 text-white mt-4 rounded-[40px] hover:bg-slate-500">Learn More</button></Link>
                </div>
            </div>
         </div>

         {/* For mobile screen */}

         <div className="md:hidden sm:block">
         <div className="mt-12">
                  <h1 className="font-semibold text-[48px] leading-[72px] text-center text-pink-600">Our New Collections</h1>
                </div>
            <div className="pt-6">
                <div className="mt-12">
                    <Image src={"/Images/f2.PNG"} alt="flower1" height={100} width={100} className="h-[400px] w-[426px]"/>
                </div>
                <div className="mt-12">
                <h1 className="font-semibold text-[48px] leading-[72px] text-center text-pink-600">About Us</h1>
                  <p className="font-medium text-[18px] leading-[34px] text-center text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Molestiae  modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                    Corrupti, pariatur eaque?</p> 
                    <Link href={"/about"}><button className="h-[60px] w-[150px] bg-pink-600 ml-[140px] text-white mt-4 rounded-[40px] hover:bg-slate-500">Learn More</button></Link>
                </div>
            </div>
         </div>
         {/* First section close*/}


         {/* Second section open*/}

         {/* For large screen*/}

         <div className="sm:hidden md:block">
          <div className="flex bg-gray-200 h-[600px] mt-20">
            <div className="flex-1 pt-[180px] pl-6 pr-4">
              <h1 className="font-extrabold text-[35px] leading-[34px] text-pink-600">Different Variety Of Flowers Are Avaliable</h1>
              <p className="font-medium text-[16px] leading-[24px] pt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                 Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.</p>
                 <Link href={"/shop"}><button className="h-[50px] w-[150px] bg-pink-600 text-white mt-4 rounded-[10px]">Shop Now</button></Link>
            </div>
            <div className="flex-1 pt-10">
              <Image src={"/Images/f3.PNG"} alt="flower3" height={100} width={100} className="h-[500px] w-[350px]"/>
            </div>
            <div className="flex-1 pt-6">
            <Image src={"/Images/f12.PNG"} alt="flower3" height={100} width={100} className="h-[500px] w-[350px]"/>
            </div>
          </div>
         </div>

         {/* For mobile screen*/}


         <div className="md:hidden sm:block">
          <div className="bg-gray-200 h-[1500px] mt-20">
            <div className="pt-[40px] pl-6 pr-4">
              <h1 className="font-extrabold text-[35px] leading-[34px] text-pink-600">Different Variety Of Flowers Are Avaliable</h1>
              <p className="font-medium text-[16px] leading-[24px] pt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                 Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.</p>
                 <Link href={"/shop"}><button className="h-[50px] w-[150px] bg-pink-600 text-white mt-4 rounded-[10px]">Shop Now</button></Link>
            </div>
            <div className="pt-10">
              <Image src={"/Images/f3.PNG"} alt="flower3" height={100} width={100} className="h-[500px] w-[350px] ml-8"/>
            </div>
            <div className="pt-6">
            <Image src={"/Images/f12.PNG"} alt="flower3" height={100} width={100} className="h-[500px] w-[350px] ml-8"/>
            </div>
          </div>
         </div>

         {/* Second section close*/}

        {/* Third section open */}

        {/* For large screen */}

        <div className="sm:hidden md:block">
          <div className="flex border-pink-600 border-4 mt-20 h-[500px] mr-20 ml-20 mb-4">
            <div className="flex-1">
              <h1 className="font-bold text-[45px] leading-[35px] text-pink-600 mt-[160px] ml-16">Our Gallery</h1>
              <p className="font-medium text-[18px] leading-[24px] text-gray-400 ml-16 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                 Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.</p>
                 <Link href={"/shop"}><button className="h-[50px] w-[200px] rounded-[10px] bg-pink-600 text-white mt-4 ml-16 hover:bg-slate-500">Shop Now</button></Link>
            </div>
            <div className="flex-1">
              <Image src={"/Images/f8.PNG"} alt="flower13" height={400} width={400} className="h-[492px] w-[600px]"/>
            </div>
          </div>
        </div>

        {/* For mobile screen */}
        
        <div className="md:hidden sm:block">
          <div className="border-pink-600 border-4 mt-20 h-[900px] mr-6 ml-6 mb-4">
            <div className="">
              <h1 className="font-bold text-[45px] leading-[35px] text-pink-600 mt-10 text-center">Our Gallery</h1>
              <p className="font-medium text-[18px] leading-[24px] text-gray-400 mt-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas.
                 Corrupti, pariatur eaque? Lorem ipsum dolor sit amet consectetur adipisicing
                 elit.</p>
                 <Link href={"/shop"}><button className="h-[50px] w-[200px] rounded-[10px] bg-pink-600 text-white mt-4 ml-20 hover:bg-slate-500">Shop Now</button></Link>
            </div>
            <div className="">
              <Image src={"/Images/f8.PNG"} alt="flower13" height={400} width={400} className="h-[519px] w-[400px] mt-16"/>
            </div>
          </div>
        </div>

        {/* Third section open */}
      

      {/* Footer open */}
      <Footer />
      {/* Footer close */}
      </div>
  );
}