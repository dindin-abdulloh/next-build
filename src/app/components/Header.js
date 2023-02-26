'use client';
import React from "react";


const Header = ({ onOpenModal, openInvestModal, onEnglish, isEnglish, onArabic }) => {
    return (
        <div className="flex flex-row justify-between mt-[150px] relative">
       
          {isEnglish ? 
          <>
        <div className="absolute lg:bottom-0 lg:top-[-33px] top-[-100px] lg:left-0 z-10">
          <div className="bg-[#000000] border-b-8 border-[#f37121] w-[150px] h-[85px] px-2">
            <h1 className="text-[#ffffff] font-bold text-[55px]">Build</h1>
          </div>
        </div>

        <div className="flex flex-row gap-3 absolute right-0">
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
          <div className="flex flex-row gap-3">
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

        <div className="absolute lg:bottom-0 lg:top-[-33px] top-[-100px] lg:right-0 z-10">
          <div className="bg-[#000000] border-b-8 border-[#f37121] w-[150px] h-[85px] px-2">
            <h1 className="text-[#ffffff] font-bold text-[55px]">Build</h1>
          </div>
        </div>
        </>
        }
      </div>
    )
}

export default Header;