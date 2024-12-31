import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import Footer from "@/components/Footer";

export default function Shop () {


    interface Card{
        name: string,
        description: string,
        image: string,
        price: string,
      }
     
      const data: Card[] = [
        {
          name: "Branches Of Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f1.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Branches Of Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f2.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Pink Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f3.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Lilly Flower",
          price: "Rp 2.500.000",
          image: "/Images/f4.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Lilly Flower",
          price: "Rp 2.500.000",
          image: "/Images/f5.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Orange Flower",
          price: "Rp 2.500.000",
          image: "/Images/f6.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Pink And Yellow Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f7.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Branches Of Flowers",
          price: "Rp 2.500.000",
          image: "/Images/f8.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Pink Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f9.PNG",
          description: "Stylish cafe chair",
        },
        {
          name: "Purple Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f10.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Sun Flower",
          price: "Rp 2.500.000",
          image: "/Images/f11.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Tulip Flower",
          price: "Rp 2.500.000",
          image: "/Images/f12.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f13.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Pink Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f14.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f15.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
          name: "Rose Flower",
          price: "Rp 2.500.000",
          image: "/Images/f16.PNG",
          description: "A creative designer who loves creating stunning visuals.",
        },
        {
            name: "Rose Flower",
            price: "Rp 2.500.000",
            image: "/Images/f17.PNG",
            description: "A creative designer who loves creating stunning visuals.",
          },
          {
            name: "Tulip Flower",
            price: "Rp 2.500.000",
            image: "/Images/f18.PNG",
            description: "A creative designer who loves creating stunning visuals.",
          },
      ];
    
    return (
        <>
        {/* Navbar  open*/}
        <Navbar />
        {/* Navbar  close*/}


         {/* Hero section open*/}

         {/* for large screen*/}

         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-full h-[400px] sm:hidden md:block">
        <div className="pt-[80px] pl-12">
        <h1 className="font-medium text-[48px] leading-[72px] text-left text-white pt-4"><b>Shops</b></h1>
        <p className="font-medium text-[19px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing<br />
         elit.Molestiae modi cum ipsam ad, illo possimus<br />
          laborum ut reiciendis obcaecati. Ducimus, quas.<br />
           Corrupti, pariatur eaque?</p>
        <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/contact"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Shops</h1></Link>
       </div>
       </div>
        </div>



         {/* for small screen*/}
         <div className="bg-cover bg-center bg-[url('/Images/hero.png')] w-[427] h-[416px] md:hidden sm:block">
         <div className="pt-[70px] pl-4">
            <h1 className="font-medium text-[48px] leading-[72px] text-left text-white"><b>Shops</b></h1>
            <p className="font-medium text-[18px] leading-[34px] text-left text-white">Lorem ipsum dolor sit amet consectetur<br /> adipisicing
         elit.Molestiae modi cum<br /> ipsam ad, illo possimus laborum ut<br />
          reiciendis obcaecati. Ducimus, quas.<br /> Corrupti, pariatur eaque?</p>
           <div className="flex gap-x-2 justify-start items-left text-white mt-4">
       <Link href={"/"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Home</h1></Link>
       <IoIosArrowForward className="h-6 w-6 items-left"/>
       <Link href={"/contact"}><h1 className="font-semibold text-[18px] leading-[24px] text-left">Shops</h1></Link>
       </div>
         </div>
         </div>
        
        {/* Hero section close*/}


        {/* Sub hero section open*/}
         {/* For large screen */}

        <div className="sm:hidden md:block">
            <div className="mt-12">
                <h1 className="font-medium text-[48px] leading-[72px] text-center text-pink-600">Our Products</h1>
                <p className="font-medium text-[19px] leading-[34px] text-center mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing
         elit.Molestiae modi cum ipsam ad, illo possimus laborum ut
          reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?</p>
            </div>
        </div>

        {/* For small screen */}

        <div className="md:hidden sm:block">
            <div className="mt-12">
                <h1 className="font-medium text-[48px] leading-[72px] text-center text-pink-600">Our Products</h1>
                <p className="font-medium text-[19px] leading-[34px] text-center mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing
         elit.Molestiae modi cum ipsam ad, illo possimus laborum ut
          reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?</p>
            </div>
        </div>
        {/* Sub hero section close*/}




         {/* First section open */}

          {/* For large screen */}

           <div className="sm:hidden md:block">
            <div className="flex flex-wrap gap-x-4 gap-y-5 pt-[40px] pr-4 pl-6 pb-[40px]">
            {data.map((card, index) => (
              
            <div key={index} className="flex flex-col rounded-[10px] p-4 h-[550px] w-[380px] shadow-xl border">
               <Link href={"/card"}> <Image 
                  src={card.image} alt="card" width={100} height={100}
                  className="h-[400px] w-[400px] rounded-[10px]"
                /></Link>
                <div className="card-body">
                  <h5 className="font-bold text-[18px] leading-[24px] pt-2">
                    {card.name}
                  </h5>
                  <p className="font-medium text-[16px] leading-[24px] text-gray-400">{card.description}</p>
                  <h5 className="font-bold text-[18px] leading-[24px] pt-2">
                  price: ${card.price}
                  </h5>
            </div>
            </div>
                    ))}
                    </div>
                    </div>

            {/* For mobile screen */}

            <div className="md:hidden sm:block">
            <div className="flex flex-wrap gap-x-4 gap-y-5 pt-[40px] pr-4 pl-6 pb-[40px]">
            {data.map((card, index) => (
              
            <div key={index} className="flex flex-col rounded-[10px] p-4 h-[550px] w-[380px] shadow-xl border">
               <Link href={"/card"}> <Image
                  src={card.image} alt="card" width={100} height={100}
                  className="h-[400px] w-[400px] rounded-[10px]"
                /> </Link>
                <div className="card-body">
                  <h5 className="font-bold text-[18px] leading-[24px] pt-2">
                    {card.name}
                  </h5>
                  <p className="font-medium text-[16px] leading-[24px] text-gray-400">{card.description}</p>
                  <h5 className="font-bold text-[18px] leading-[24px] pt-2">
                  price: ${card.price}
                  </h5>
            </div>
            </div>
                    ))}
                    </div>
                    </div>
            {/* First section close */}


            {/* Second section open */}
            {/* For large screen */}
            <div className="sm:hidden md:block">
                <div className="mt-12 ml-[500px] mb-20">
                  <Link href={"/contact"}> <button className="h-[90px] w-[250px] rounded-[40px] bg-pink-600 text-white hover:bg-slate-500">Shop Now</button></Link>
                </div>
            </div>

            {/* For mobile screen */}
            <div className="md:hidden sm:block">
                <div className="mt-12 ml-[85px] mb-20">
                  <Link href={"/contact"}> <button className="h-[90px] w-[250px] rounded-[40px] bg-pink-600 text-white hover:bg-slate-500">Shop Now</button></Link>
                </div>
            </div>
                    
        {/* Footer open */}
        <Footer />
        {/* Footer close */}
        </>
    );
}