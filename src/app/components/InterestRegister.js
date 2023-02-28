'use client';
import React from "react";

const InterestRegister = ({isEnglish}) => {
    return (
        <>
            {isEnglish ? 
                <div className="flex flex-col md:flex-row  lg:flex-row lg:justify-between lg:mt-6">
                    <div className="bg-white p-4 rounded-md border-l-8 border-b-8 lg:h-1/3 lg:mt-24 md:w-[360px] md:h-auto border-[#FFE600] mt-5 shadow-md">
                        <div className="text-left">
                            <p className="font-normal text-md">Are you a <span className="font-bold">Supplier</span> or a <span className="font-bold">Manufacturer</span></p>
                            <p className="font-normal text-md">Reach <span className="font-bold">New Markets</span></p>
                        </div>

                        <div className="flex flex-row text-right justify-start mt-6 gap-2">
                            <p>Register your interest</p>
                            <img className="lg:w-[18px] lg:h-[20px]" src="/icons/lonceng.png" alt=""/>
                        </div>

                        <div>
                            <form className="flex flex-col" action="">
                            <div className="mt-3">
                                <input type="text" placeholder="YOUR NAME OR COMPANY NAME" className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-gray-100 rounded-lg placeholder-black text-center font-normal text-xs" />
                            </div>
                            <div className="mt-3">
                                <input type="text" placeholder="PHONE NUMBER" className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-gray-100 rounded-lg placeholder-black text-center font-normal text-xs" />
                            </div>

                            <div className="mt-3">
                                <button className="bg-[#151515] w-full lg:w-[270px] h-[35px] rounded-md text-[#fdfeff] font-normal text-xs">SEND</button>
                            </div>

                            <p className="text-[#2cdca0] text-center lg:text-[8.5px] lg:text-left mt-4">We appreciate your interest, we will let you know when we Start</p>
                            <p className="text-[#db2336] text-center lg:text-[10px] lg:text-left mt-2">There is a previous request, we appreciate your interest</p>
                            </form>
                        </div>
                    </div>

                    <div className="mt-4 md:flex md:justify-center">
                         <img className="md:w-[620px] md:h-[480px]" src="/icons/icon4.png" alt=""/>
                    </div>
                </div>

                :

                <div className="flex flex-col  md:flex-row lg:justify-between lg:mt-6">
                    <div className="md:flex md:justify-center mt-4">
                        <img className="lg:w-[620px] lg:h-[480px]" src="/icons/icon4.png" alt=""/>
                    </div>

                    <div className="bg-white p-4 rounded-md border-r-8 border-b-8 md:h-1/6 border-[#FFE600] md:mt-4 lg:mt-20 shadow-md">
                        <div className="text-right">
                            <p className="font-semibold">هل أنت مورد أو مصع </p>
                            <p className="font-semibold">تطمح للوصول لأسواقى حديدة </p>
                        </div>

                        <div className="flex flex-row text-right justify-end mt-4 gap-2">
                            <img className="lg:w-[18px] lg:h-[20px]" src="/icons/lonceng.png" alt=""/>
                            <p>سجل إهتمامك </p>
                        </div>

                        <div>
                            <form className="flex flex-col" action="">
                            <div className="mt-3">
                                <input type="text" placeholder="أسمك أو إسسم النشاط التجاري " className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-gray-100 rounded-lg placeholder-black text-center font-normal text-xs" />
                            </div>
                            <div className="mt-3">
                                <input type="text" placeholder="رقم جوالك " className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-gray-100 rounded-lg placeholder-black text-center font-normal text-xs" />
                            </div>

                            <div className="mt-3">
                                <button className="bg-[#151515] w-full lg:w-[270px] h-[35px] rounded-md text-[#fdfeff] font-normal text-xs">أرسل</button>
                            </div>

                            <p className="text-[#2cdca0] text-[14px] text-center mt-4">نقدر إهتماملك. بتعطيلك خبر عند الانطلاف </p>
                            <p className="text-[#db2336] text-[14px] text-center mt-2">يوجد طلب سابق نقدر إهتمامك </p>
                            </form>
                        </div>
                    </div>
            </div>
            }
        </>
    )
}

export default InterestRegister;