import React from "react";
import grid1 from "../../img/grid1.png";
import grid2 from "../../img/grid2.png";
import grid3 from "../../img/grid3.png";
import grid4 from "../../img/grid4.png";
import grid5 from "../../img/grid5.png";
import grid6 from "../../img/grid6.png";
import grid7 from "../../img/grid7.png";
function Kategoriyalar() {
  return (
    // <section className="w-[90%] m-auto mt-[60px]">
    <>
      <div className=" w-[90%] m-auto mt-[4em]  flex items-center justify-between gap-2 bg-[rgb(14,65,90)] h-[6em] px-7 max-[1350px]:text-[0.9em] max-[1223px]:text-[0.7em] max-[950px]:text-[0.6em]  max-[848px]:text-[0.5em] max-[668px]:text-[0.4em] max-[561px]:w-[100%] max-[339px]:text-[0.3em] ">
        <h1 className="text-[2.5em] text-[#FFF] font-normal border-r border-[#FFF] pr-9 max-[561px]:border-none">
          HAMKOR BO’LING
        </h1>
        <p className="text-[#FFF] text-[1em] normal w-[35%] max-[561px]:hidden">
          SIZNI HAMKORLIKKA TAKLIF QILAMIZ ISHLAB CHIQARUVCHILAR VA
          DISTRIBYUTORLAR
        </p>

        <button className="w-[17em] h-[3em] rounded-[40px] bg-transparent border-[1px] border-[#FFF] text-[#FFF] ">
          HOZIR MUROJAT QILING
        </button>
      </div>

      {/* <div className="mt-9">
        <h2 className="font-bold text-[1.5em] tracking-wide text-black">
          Ommabop Kategoriyalar
        </h2> */}

      {/* <div className="grid grid-cols-6 grid-rows-2 gap-2 mt-7">
          <div className="w-full h-auto bg-[#7e919d] row-start-1 row-end-3 col-start-1 col-end-2">
            <img className="w-[100%]" src={grid1} alt="" />
            <p className="p-5 font-normal text-[#FFF] text-[20px] tracking-wide">
              Ledlar
            </p>
          </div>
          <div className="w-full h-auto bg-[#bbe7e2] relative row-start-1 row-end-2 col-start-2 col-end-3">
            <p className="font-normal tracking-wide text-black text-[20px] p-3">
              Akumlatorlar
            </p>
            <img
              className="absolute bottom-0 right-5 w-[80%] "
              src={grid2}
              alt=""
            />
          </div>
          <div className="w-full h-auto bg-[#bcd7e0] relative row-end-3 col-start-2 col-end-3">
            <p className="font-normal tracking-wide text-black text-[20px] p-3">
              Ulagichlar
            </p>
            <img
              className="absolute bottom--5 right-5 w-[80%] "
              src={grid3}
              alt=""
            />
          </div>

          <div className="w-full h-auto bg-[#bcd7e0] relative row-start-1 row-end-3 col-start-3 col-end-5">
            <p className="p-4 font-normal tracking-wide text-black text-[20px]">
              O’lchov asboblari
            </p>
            <img
              className="absolute bottom-[-10px] right-7 w-[80%]"
              src={grid4}
              alt=""
            />
          </div>

          <div className="flex gap-5 w-full h-[160px] bg-[#ade6f5] relative p-5 row-start-1 row-end-2 col-start-5 col-end-7">
            <p className="font-normal tracking-wide text-black text-[20px] w-[45%]">
              Avtomatik Boshqaruv
            </p>
            <img
              className="absolute top-[-12px] right-[40px]  w-[37%]"
              src={grid5}
              alt=""
            />
          </div>

          <div className="w-full h-[160px] bg-[#bbe7e2] relative p-2 row-start-2 row-end-3 col-start-5 col-end-6">
            <p className="font-normal tracking-wide text-black text-[20px]">
              Avto zapchas
            </p>
            <img
              className="absolute bottom-[-10px]  w-[90%]"
              src={grid6}
              alt=""
            />
          </div>

          <div className="w-full h-[160px] bg-[#7e919d] p-2 row-start-2 row-end-3 col-start-6 col-end-7">
            <p className="font-normal tracking-wide text-[#FFF] text-[20px]">
              Rezistorlar
            </p>
            <div className="flex items-center justify-center">
              <img className=" w-[90%]" src={grid7} alt="" />
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
    // </section>
  );
}

export default Kategoriyalar;
