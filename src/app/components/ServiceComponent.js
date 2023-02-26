'use client';
import React from "react";


const ServiceComponent = ({isEnglish}) => {
    return (
        <>
            {isEnglish ? 
                 <div className="flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-start lg:gap-20">
                    <div className="flex flex-row justify-between px-10 md:px-0 md:justify-center gap-2 mt-2">
                        <div className="bg-[#b9b9b9] rounded-md py-[5px]">
                            <img className="w-[70px] h-[58px]" src="/icons/icon3.png" alt=""/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-[18px] lg:text-[25px]">Marketplac</h4>
                            <p className="font-normal text-[14px] lg:text-[17px]">Shop building products</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between px-6 md:px-0 md:justify-center gap-2 mt-2">
                        <div className="bg-[#b9b9b9] rounded-md py-[5px]">
                            <img className="w-[70px] h-[58px]" src="/icons/icon-2.png" alt=""/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-[18px] lg:text-[25px]">RFQ</h4>
                            <p className="font-normal text-[14px] lg:text-[17px]">Send your Rfq to your suppliers</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between px-4 md:px-0 md:justify-center gap-2 mt-2">
                        <div className="bg-[#b9b9b9] rounded-md py-[5px]">
                            <img src="/icons/helmet.png" alt=""/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-[18px] lg:text-[25px]">Engineering RFQ</h4>
                            <p className="font-normal text-[14px] lg:text-[17px]">Get the Product From BOQ and pricing</p>
                        </div>
                    </div>   
               </div>

               :

               <div className="flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-end md:gap-8 lg:gap-20 md:mt-5">
                    <div className="flex flex-row justify-between px-12 md:px-0 md:justify-center gap-1 md:gap-2 mt-2">
                        <div className="text-right">
                            <h4 className="font-bold text-[18px] lg:text-[25px]">الطلبات الهندسية </h4>
                            <p className="font-normal text-[14px] lg:text-[17px]">إستخراح الكميات و التسعير</p>
                        </div>
                        <div className="bg-[#b9b9b9] rounded-md py-[5px]">
                            <img src="/icons/helmet.png" alt=""/>
                        </div>
                    </div>
       
       
                    <div className="flex flex-row justify-between px-12 md:px-0 md:justify-center md:gap-2 gap-1 mt-2">
                        <div className="text-right">
                            <h4 className="font-bold text-[18px] lg:text-[25px]">طلبات التسعير</h4>
                            <p className="font-normal text-[14px] lg:text-[17px]">أرسل طلباتك لمورديك أسرع </p>
                        </div>
                        <div className="bg-[#b9b9b9] rounded-md py-[5px]">
                            <img className="w-[70px] h-[58px]" src="/icons/icon-2.png" alt=""/>
                        </div>
                    </div>
       
                    <div className="flex flex-row justify-between px-12 md:px-0 md:justify-center md:gap-2 gap-1 mt-2">
                        <div className="text-right">
                            <h4 className="font-bold text-[18px] lg:text-[25px]">سوق البناء </h4>
                            <p className="font-normal text-[14px] lg:text-[17px]">تسوق منتجات البناء </p>
                        </div>
                        <div className="bg-[#b9b9b9] rounded-md py-[5px]">
                            <img className="w-[70px] h-[58px]" src="/icons/icon3.png" alt=""/>
                        </div>
                    </div>
               </div>
            }
        </>
       
    )
}

export default ServiceComponent;