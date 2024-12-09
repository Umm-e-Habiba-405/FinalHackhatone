import React from "react";

const Discount = () => {
  return (
    <div>
      <h2 className=" text-[40px] font-bold text-indigo-900  mb-8  text-center mt-10">
        Latest Products
      </h2>
      <ul className="flex justify-center gap-5 ">
        <li className="text-pink-700">Wood chair</li>
        <li className="text-color">plastic chair</li>
        <li className="text-color">Sofa Collection</li>
      </ul>
      <div className="flex justify-center  w-[1220px] h-[597px]">
        <div className="ml-[520px] ">
          <h2 className="mt-10 text-color font-bold text-[25px]">
            20% Discount Of All Products
          </h2>
          <p className="text-pink-700 font-bold leading-9">Eams Sofa Compact</p>
          <p className="text-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <button className="bg-pink-600 text-white py-2 px-6 mt-5 font-bold">Shop Now</button>
        </div>

        <div>
          <img src="/tortuga-01-b 1.png" alt="" className="w-[1000px] h-[360px]" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
