import React from "react";

const Shops = () => {
  return (
    <div className="mt-52 py-6 text-[20px] ">
      <h1 className="text-color text-center font-bold mt-52 text-[42px] "> What Shopex Offer!</h1>
      <div className="flex justify-center gap-6 mt-6">
        <div className=" bg-whiteHex w-[270px] h-[306px]">
          <img src="\free-delivery 1.png" alt="" className=" mt-11 ml-24"/>
          <p className=" mt-3 ml-20 text-color font-bold">24/7 Support</p>
          <p className="mt-3 ml-10 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima, 
          </p>
        </div>
        <div className=" bg-whiteHex w-[270px] h-[306px]">
        <img src="/cashback 1.png" alt=""className="mt-11 ml-24" />
          <p className=" mt-3 ml-20 text-color font-bold">24/7 Support</p>
          <p className="mt-3 ml-10 text-gray-500 text-[16px]" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima,um.
          </p>
        </div>
        <div className=" bg-whiteHex w-[270px] h-[306px]">
        <img src="/premium-quality 1.png" alt="" className="mt-11 ml-24"/>
          <p className=" mt-3 ml-20 text-color font-bold">24/7 Support</p>
          <p className="mt-3 ml-10 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima,.
          </p>
        </div>
        <div className=" bg-whiteHex  w-[270px] h-[306px]">
        <img src="/24-hours-support 1.png" alt=""  className="mt-11 ml-24"/>
          <p className=" mt-3 ml-20 text-color font-bold">24/7 Support</p>
          <p className="mt-3 ml-10 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem dicta voluptatibus minima,.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shops;
