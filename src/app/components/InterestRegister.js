'use client';
import React from "react";

const InterestRegister = ({isEnglish}) => {
    return (
        <>
            {isEnglish ? 
                <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6">
                    <div>
                        <div className="text-left mt-[65px]">
                            <p className="font-normal text-2xl">Are you a <span className="font-bold">Supplier</span> or a <span className="font-bold">Manufacturer</span></p>
                            <p className="font-normal text-2xl">Reach <span className="font-bold">New Markets</span></p>
                        </div>

                        <div className="flex flex-row text-right justify-start mt-12 gap-2">
                            <p>Register your interest</p>
                            <img className="lg:w-[18px] lg:h-[20px]" src="/icons/lonceng.png" alt=""/>
                        </div>

                        <div>
                            <form className="flex flex-col" action="">
                            <div className="mt-3">
                                <input type="text" placeholder="YOUR NAME OR COMPANY NAME" className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-[#ffffff] rounded-lg placeholder-black text-center font-normal text-xs" />
                            </div>
                            <div className="mt-3">
                                <input type="text" placeholder="PHONE NUMBER" className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-[#ffffff] rounded-lg placeholder-black text-center font-normal text-xs" />
                            </div>

                            <div className="mt-3">
                                <button className="bg-[#151515] w-full lg:w-[270px] h-[35px] rounded-md text-[#fdfeff] font-normal text-xs">SEND</button>
                            </div>

                            <p className="text-[#2cdca0] text-center lg:text-[8.5px] lg:text-left mt-4">We appreciate your interest, we will let you know when we Start</p>
                            <p className="text-[#db2336] text-center lg:text-[10px] lg:text-left mt-2">There is a previous request, we appreciate your interest</p>
                            </form>
                        </div>
                    </div>

                    <div className="mt-4">
                         <img className="lg:w-[620px] lg:h-[480px]" src="/icons/icon4.png" alt=""/>
                    </div>
                </div>

                :

                <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6">
                <div>
                     <img className="lg:w-[620px] lg:h-[480px]" src="/icons/icon4.png" alt=""/>
                </div>

                <div>
                    <div className="text-right mt-[65px]">
                        <p className="font-semibold">هل أنت مورد أو مصع </p>
                        <p className="font-semibold">تطمح للوصول لأسواقى حديدة </p>
                    </div>

                    <div className="flex flex-row text-right justify-end mt-9 gap-2">
                        <img className="lg:w-[18px] lg:h-[20px]" src="/icons/lonceng.png" alt=""/>
                        <p>سجل إهتمامك </p>
                    </div>

                    <div>
                        <form className="flex flex-col" action="">
                        <div className="mt-3">
                            <input type="text" placeholder="أسمك أو إسسم النشاط التجاري " className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-[#ffffff] rounded-lg placeholder-black text-center font-normal text-xs" />
                        </div>
                        <div className="mt-3">
                            <input type="text" placeholder="رقم جوالك " className="w-full lg:w-[270px] lg:h-[40px] p-4 text-black bg-[#ffffff] rounded-lg placeholder-black text-center font-normal text-xs" />
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