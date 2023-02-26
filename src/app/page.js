'use client';

import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalVendor from "./components/ModalVendor";
import InvestModal from './components/InvestModal';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInvestModal, setIsOpenInvestModal] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOpenInvestModal = () => {
    setIsOpenInvestModal(true)
  }

  const handleCloseInvestModal = () => {
    setIsOpenInvestModal(false)
  }

  const investModalOverlayClick = () => {
    setIsOpenInvestModal(false);
  };


  return (
    <div className="container px-5">
      
      <Header onOpenModal={handleOpenModal} openInvestModal={handleOpenInvestModal} />

      <div className="lg:text-right text-center px-6 lg:px-0 mt-3 lg:mt-[200px]">
        <p className="font-medium text-[20px] lg:text-[30px]">وصولك لمنتجات البناء أسهل</p>
        <p className="font-medium text-[20px] lg:text-[30px]"> سوق متكامل لإحتياجات مشروعك </p>
        <p className="font-medium text-[20px] lg:text-[30px]">في المملكة العربية السعودية </p>
      </div>

      <div className=" lg:mt-[150px]">
        <div className="flex flex-col lg:flex-row lg:justify-end lg:gap-20">
          <div className="flex flex-row justify-center gap-1 mt-2">
            <div className="text-right">
              <h4 className="font-bold text-[18px] lg:text-[25px]">الطلبات الهندسية </h4>
              <p className="font-normal text-[14px] lg:text-[17px]">إستخراح الكميات و التسعير</p>
            </div>
            <div className="bg-[#b9b9b9] rounded-md py-[5px]">
              <img src="/icons/helmet.png" alt=""/>
            </div>
          </div>


          <div className="flex flex-row justify-center gap-1 mt-2">
            <div className="text-right">
              <h4 className="font-bold text-[18px] lg:text-[25px]">طلبات التسعير</h4>
              <p className="font-normal text-[14px] lg:text-[17px]">أرسل طلباتك لمورديك أسرع </p>
            </div>
            <div className="bg-[#b9b9b9] rounded-md py-[5px]">
              <img className="w-[70px] h-[58px]" src="/icons/icon-2.png" alt=""/>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-1 mt-2">
            <div className="text-right">
              <h4 className="font-bold text-[18px] lg:text-[25px]">سوق البناء </h4>
              <p className="font-normal text-[14px] lg:text-[17px]">تسوق منتجات البناء </p>
            </div>
            <div className="bg-[#b9b9b9] rounded-md py-[5px]">
              <img className="w-[70px] h-[58px]" src="/icons/icon3.png" alt=""/>
            </div>
          </div>
        </div>
      </div>

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

     
      <ModalVendor isOpen={isOpen} onClose={handleClose} onOverlayClick={handleOverlayClick}>
        <div className='p-[40px]'>
          <div className='flex flex-row gap-4 justify-center'>
            <div className='bg-[#d8d8d8] border-b-4 border-[#e8261f] px-2 py-1'>
              <h2 className='font-bold text-xl'>Build</h2>
            </div>
            <div>
              <h2 className='font-bold text-xl translate-y-2'>تسجيل البائعين </h2>
            </div>
          </div>
        
          <div className='mt-16'>
            <form action="">
              <div className='mt-3'>
                <input type="text" placeholder="أسم البائع " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="رفم الاتصال " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="اسم النشاط التجاري" className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="رقم السجل التجاري " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div class="relative inline-block w-full text-left mt-3">
                <select class="block text-center appearance-none w-full lg:w-[315px] lg:h-[45px] bg-gray-200 text-[#7b7b7b] font-normal text-xs  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>مقر النشاط </option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"/></svg>
                </div>
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="المووع الالكروي " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="البريد الإلككروي " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-thin text-xs" />
              </div>

              <div className='flex flex-col'>
                <div className='mt-3'>
                  <button className='w-full bg-[#ffe600] rounded-md py-4'>تقديم الطلب </button>
                </div>
                <div className='mt-2'>
                  <button className='bg-[#b4b4b4] w-full rounded-md py-1 text-[#ffffff]'>الغاء </button>
                </div>
              </div>

              <p className='text-center mt-3 text-[14px]'>تم تسجيل طلبك سيتواصل معك ممثل علاقات البائعين </p>
            </form>
          </div>
        </div>
      </ModalVendor>

      <InvestModal isOpen={isOpenInvestModal} onClose={handleCloseInvestModal} onOverlayClick={investModalOverlayClick}>
      <div className='p-[40px]'>
          <div className='flex flex-row gap-4 justify-center'>
            <div className='bg-[#d8d8d8] border-b-4 border-[#e8261f] px-2 py-1'>
              <h2 className='font-bold text-xl'>Build</h2>
            </div>
            <div>
              <h2 className='font-bold text-xl translate-y-2'>إستثمر ي </h2>
            </div>
          </div>
        
          <div className='mt-16'>
            <form action="">
              <div className='mt-3'>
                <input type="text" placeholder="اسم المستتصر" className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="رقم الاتصال " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="اسم النشاط التجارى " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="عنوان الويب " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder="مقر المستثمر " className="w-full lg:w-[315px] lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <textarea placeholder="سجل رسالتك " className="w-full lg:w-[315px] lg:h-[80px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs overflow-hidden resize-none" name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className='flex flex-col'>
                <div className='mt-3'>
                  <button className='w-full bg-[#0f100f] rounded-md py-4 text-[#ffffff]'>لسجيل إهممام </button>
                </div>
                <div className='mt-2'>
                  <button className='bg-[#b4b4b4] w-full rounded-md py-1 text-[#ffffff]'>الغاء </button>
                </div>
              </div>

              <p className='text-center mt-3 text-[14px] text-[#52d5ba]'>تم تسجيل إهنمامك سيتواصل مملك فريف بيلد </p>
            </form>
          </div>
        </div>
      </InvestModal>

     <Footer/>
    </div>
  );
}
