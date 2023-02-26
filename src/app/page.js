'use client';
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalVendor from "./components/ModalVendor";
import InvestModal from './components/InvestModal';
import Headline from './components/Headline';
import ServiceComponent from './components/ServiceComponent';
import InterestRegister from './components/InterestRegister';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInvestModal, setIsOpenInvestModal] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false)

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

  const switchToEnglish = () => {
    setIsEnglish(true)
  }

  const switchToArabic = () => {
    setIsEnglish(false)
  }


  return (
    <div className="container px-5">
      
      <Header isEnglish={isEnglish} onOpenModal={handleOpenModal} openInvestModal={handleOpenInvestModal} onEnglish={switchToEnglish} onArabic={switchToArabic} />

      <Headline isEnglish={isEnglish}/>

      <div className="mt-6 lg:mt-[150px]">
        <ServiceComponent isEnglish={isEnglish}/>
      </div>

      {/* <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-6"> */}
        <InterestRegister isEnglish={isEnglish}/>
      {/* </div> */}

     
      <ModalVendor isOpen={isOpen} onClose={handleClose} onOverlayClick={handleOverlayClick}>
        <div className='p-[40px]'>
          {isEnglish ?
            <div className={isEnglish ? 'flex flex-row justify-between' : 'flex flex-row gap-4 justify-center'}>
            <div className='bg-[#d8d8d8] border-b-4 border-[#e8261f] px-2 py-1'>
              <h2 className='font-bold text-xl'>Build</h2>
            </div>
            <div>
              <h2 className='font-bold text-xl translate-y-2 '>Vendor</h2>
              <h2 className='font-bold text-xl translate-y-2 '>Registeration</h2>
            </div>
          </div>
          :
          <div className='flex flex-row gap-4 justify-center'>
            <div className='bg-[#d8d8d8] border-b-4 border-[#e8261f] px-2 py-1'>
              <h2 className='font-bold text-xl'>Build</h2>
            </div>
            <div>
              <h2 className='font-bold text-xl translate-y-2'>تسجيل البائعين </h2>
            </div>
          </div>
          }
        
          <div className='mt-16'>
            <form action="">
              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'Seller Name' : 'أسم البائع'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'Seller Number' : 'رفم الاتصال'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'Company Name' : 'اسم النشاط التجاري'} className="w-full  lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'CR numer' : 'رقم السجل التجاري'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div class="relative inline-block w-full text-left mt-3">
                <select class="block text-center appearance-none w-full  lg:h-[45px] bg-gray-200 text-[#7b7b7b] font-normal text-xs  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option>{isEnglish ? 'Company Headquarters' : 'مقر النشاط'}</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <img className='w-[20px]' src="/icons/arrow.png" alt=""/>
                </div>
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'Website' : 'المووع الالكروي'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'E-mail' : 'البريد الإلككروي'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-thin text-xs" />
              </div>

              <div className='flex flex-col'>
                <div className='mt-3'>
                  <button className='w-full bg-[#ffe600] rounded-md py-4'>{isEnglish ? 'SUBMIT' : 'تقديم الطلب'}</button>
                </div>
                <div className='mt-2'>
                  <button className='bg-[#b4b4b4] w-full rounded-md py-1 text-[#ffffff]'>{isEnglish ? 'cancel' : 'الغاء'}</button>
                </div>
              </div>

              <p className='text-center mt-3 text-[14px]'>{isEnglish ? 'Your Form has been registered. A Vendor Relations will contact you' : 'تم تسجيل طلبك سيتواصل معك ممثل علاقات البائعين'}</p>
            </form>
          </div>
        </div>
      </ModalVendor>

      <InvestModal isOpen={isOpenInvestModal} onClose={handleCloseInvestModal} onOverlayClick={investModalOverlayClick}>
        <div className='p-[40px]'>
          {isEnglish ? 
              <div className='flex flex-row gap-4 justify-center'>
              <div>
                <h2 className='font-bold text-xl translate-y-2'>Invest In</h2>
              </div>
              <div className='bg-[#d8d8d8] border-b-4 border-[#e8261f] px-2 py-1'>
                <h2 className='font-bold text-xl'>Build</h2>
              </div>
            </div>
          :

            <div className='flex flex-row gap-4 justify-center'>
              <div className='bg-[#d8d8d8] border-b-4 border-[#e8261f] px-2 py-1'>
                <h2 className='font-bold text-xl'>Build</h2>
              </div>
              <div>
                <h2 className='font-bold text-xl translate-y-2'>إستثمر ي </h2>
              </div>
            </div>
          }
        
          <div className='mt-16'>
            <form action="">
              <div className='mt-3'>
                <input type="text" placeholder={isEnglish? "Investor's Name" : "اسم المستتصر"} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish? 'contact number' : 'رقم الاتصال'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'Business Name' : 'اسم النشاط التجارى'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'web url' : 'عنوان الويب'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <input type="text" placeholder={isEnglish ? 'Investor Address' : 'مقر المستثمر'} className="w-full lg:h-[45px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs" />
              </div>

              <div className='mt-3'>
                <textarea placeholder={isEnglish ? 'Record your message' : 'سجل رسالتك'} className="w-full lg:h-[80px] p-4 text-black bg-gray-200 rounded-md placeholder-[#7b7b7b] text-center font-normal text-xs overflow-hidden resize-none" name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className='flex flex-col'>
                <div className='mt-3'>
                  <button className={isEnglish ? 'w-full bg-[#e8261f] rounded-md py-4 text-[#ffffff] text-xs' : 'w-full bg-[#0f100f] rounded-md py-4 text-[#ffffff]'}>{isEnglish ? 'Register an interest' : 'لسجيل إهممام'}</button>
                </div>
                <div className='mt-2'>
                  <button className='bg-[#b4b4b4] w-full rounded-md py-2 text-[#ffffff] text-xs'>{isEnglish ? 'cancel' : 'الغاء'}</button>
                </div>
              </div>
            </form>
          </div>
          <p className='text-center mt-3 text-[14px] text-[#52d5ba]'>{isEnglish ? 'Your interest has been registered, the team will contact you' : 'تم تسجيل إهنمامك سيتواصل مملك فريف بيلد'}</p>
        </div>
      </InvestModal>

     <Footer isEnglish={isEnglish}/>
    </div>
  );
}
