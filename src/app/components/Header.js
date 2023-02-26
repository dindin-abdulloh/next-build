'use client';
import React from "react";


const Header = ({ onOpenModal, openInvestModal, onEnglish, isEnglish, onArabic }) => {
    return (
        <div className="flex flex-col justify-center md:flex md:flex-row md:justify-between mt-[60px] md:relative">
       
          {isEnglish ? 
          <>
        <div className="flex justify-center md:justify-start">
          <img src="/icons/logo.png" alt=""/>
        </div>

        <div className="flex flex-row justify-center mt-4 pt-0 md:pt-10 gap-3 md:absolute md:right-0">
            <button onClick={onArabic} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
              ARABIC
            </button>
            <button onClick={openInvestModal} className="bg-[#f37121] px-3 py-1 rounded-md text-white">
              Invest In Build
            </button>
            <button onClick={onOpenModal} className="bg-[#ffe600] px-5 py-1 rounded-md text-black">
              SELLER
            </button>
          </div>
        </>
        :
        <>
          <div className="flex justify-center md:absolute lg:bottom-0 md:top-[-27px] md:right-0 lg:top-[-33px]  lg:right-0 z-10 md:invisible visible">
            {/* <div className="bg-[#000000] border-b-8 border-[#f37121] w-[150px] h-[85px] px-2">
              <h1 className="text-[#ffffff] font-bold text-[55px]">Build</h1>
            </div> */}
            <img src="/icons/logo.png" alt=""/>
          </div>

          <div className="flex justify-center flex-row gap-3 mt-4">
            <button onClick={onEnglish} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
              ENGLISH
            </button>
            <button onClick={openInvestModal} className="bg-[#f37121] px-3 py-1 rounded-md text-white">
              اسنثمر معن
            </button>
            <button onClick={onOpenModal} className="bg-[#ffe600] px-5 py-1 rounded-md text-black">
              البائعين
            </button>
          </div>

        <div className="absolute lg:bottom-0 md:top-[-27px] md:right-0 lg:top-[-33px]  lg:right-0 z-10 invisible  md:visible">
          {/* <div className="bg-[#000000] border-b-8 border-[#f37121] w-[150px] h-[85px] px-2">
            <h1 className="text-[#ffffff] font-bold text-[55px]">Build</h1>
          </div> */}
          <img src="/icons/logo.png" alt=""/>
        </div>
        </>
        }
      </div>
    )
}

export default Header;