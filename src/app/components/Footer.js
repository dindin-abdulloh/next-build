'use client';
import React from "react";


const Footer = ({isEnglish}) => {
    return (
        <>
            {isEnglish ? 
            <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-[90px] py-6">
                <div className="px-8">
                <p className="text-[#242424] font-normal">PARTNER@BUILD.COM.SA</p>
                </div>
                <div className="px-8 ">
                <p className="text-[#242424] font-normal">registered trademark in Saudi Arabia</p>
                </div>
            </div>
            :
            <div className="flex flex-col md:flex-row lg:flex-row justify-center mt-[90px] py-6">
                <div className="px-8 lg:border-r lg:border-[#242424]">
                <p className="text-[#242424] font-normal">PARTNER@BUILD.COM.SA</p>
                </div>
                <div className="px-8 ">
                <p className="text-[#242424] font-normal">علامة تجارية مسجلة فى المماكة العربية السمودية </p>
                </div>
            </div>
        }
        </>
    )
}

export default Footer;
