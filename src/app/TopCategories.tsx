// pages/index.tsx
import React from "react";

const TopCategories = () => {
  const categories = [
    {
      id: "1",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/image 23.png",
      label: "View Shop",
    },
    {
      id: "2",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/image 1169.png",
    },
    {
      id: "3",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/image 1168.png",
    },
    {
      id: "4",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/image 1166.png",
    },
  ];

  return (

    
    <div className=" bg-whiteHex  ">
      
      <h2 className=" text-[40px] font-bold text-indigo-900 -mt-40 text-center">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[1000px] ml-96 ">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-md p-6 text-center relative"
          >
            {category.label && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {category.label}
              </span>
            )}
            <div className="flex items-center justify-center mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="h-42 w-[150px] bg-banner rounded-full"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-700">
              {category.name}
            </h2>
            <p className="text-indigo-600 font-bold mt-2">
              ${category.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
