'use client';
import React from "react";

const Headline = ({isEnglish}) => {
    return (
        <>
            {
                isEnglish ? 
                    <div className="lg:text-left text-center px-6 lg:px-0 mt-14 lg:mt-[200px]">
                        <p className="font-medium text-[20px] lg:text-[30px]">Get <span className="font-bold">Easier</span> To Build Products</p>
                        <p className="font-medium text-[20px] lg:text-[30px]">Marketplace for your Projects needs</p>
                        <p className="font-medium text-[20px] lg:text-[30px]">In SAUDI ARABIA</p>
                    </div>
                :
                
                <div className="lg:text-right text-center px-6 lg:px-0 mt-10 lg:mt-[200px]">
                    <p className="font-medium text-[20px] lg:text-[30px]">وصولك لمنتجات البناء أسهل</p>
                    <p className="font-medium text-[20px] lg:text-[30px]"> سوق متكامل لإحتياجات مشروعك </p>
                    <p className="font-medium text-[20px] lg:text-[30px]">في المملكة العربية السعودية </p>
                </div>
            }
            
        </>
    )
}

export default Headline;