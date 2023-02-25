import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container px-5">
      
      <Header />

      <div className="lg:text-right text-center px-6 lg:px-0 mt-3 lg:mt-[200px]">
        <p className="font-medium text-[20px] lg:text-[30px]">وصولك لمنتجات البناء أسهل</p>
        <p className="font-medium text-[20px] lg:text-[30px]"> سوق متكامل لإحتياجات مشروعك </p>
        <p className="font-medium text-[20px] lg:text-[30px]">في المملكة العربية السعودية </p>
      </div>

      <div className=" lg:mt-[150px]">
        <div className="flex flex-col lg:flex-row justify-end lg:gap-20">
        <div className="flex flex-row gap-1 mt-2">
            <div className="text-right">
              <h4 className="font-bold text-[18px] lg:text-[25px]">الطلبات الهندسية </h4>
              <p className="font-normal text-[14px] lg:text-[17px]">إستخراح الكميات و التسعير</p>
            </div>
            <div className="bg-[#b9b9b9] rounded-md py-[5px]">
              <img src="/icons/helmet.png" alt=""/>
            </div>
          </div>


          <div className="flex flex-row gap-1 mt-2">
            <div className="text-right">
              <h4 className="font-bold text-[18px] lg:text-[25px]">طلبات التسعير</h4>
              <p className="font-normal text-[14px] lg:text-[17px]">أرسل طلباتك لمورديك أسرع </p>
            </div>
            <div className="bg-[#b9b9b9] rounded-md py-[5px]">
              <img className="w-[70px] h-[58px]" src="/icons/icon-2.png" alt=""/>
            </div>
          </div>

          <div className="flex flex-row  gap-1 mt-2">
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

     <Footer/>
    </div>
  );
}
