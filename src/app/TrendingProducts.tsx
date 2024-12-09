import React from "react";

type TrendingProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  code: string;
  label?: string;
};

type TrendingProductsProps = {
  title?: string;
};

export const TrendingProducts: React.FC<TrendingProductsProps> = ({ title, ...rest }) => {
  const products: TrendingProduct[] = [
    {
      id: "1",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1170.png",
      category: "Chairs",
      code: "Y523201",
    },
    {
      id: "2",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1171.png",
      category: "Chairs",
      code: "Y523202",
      label: "New Arrival",
    },
    {
      id: "3",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1172.png",
      category: "Chairs",
      code: "Y523203",
    },
    {
      id: "4",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1173.png",
      category: "Chairs",
      code: "Y523204",
      
    },
  ];

  return (
    <section className="py-10 px-6 bg-white ">
           <h1 className="text-color text-center font-bold    text-[40px] "> {'Trending products'}</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-11 w-[1000px] h-[350px] mx-72">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-lg p-4 text-center relative"
          >
            {product.label && (
              <span className="absolute top-2 right-2 bg-green-500 text-color text-xs font-semibold px-2 py-1 rounded-full">
                {product.label}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="h-[244px] w-[247px] mx-auto mb-4 bg-back "
            />
            <h3 className="text-lg font-semibold text-color">
              {product.name}
            </h3>
            <div className=" text-center">
            {/* <p className="text-gray-500 text-sm">Code: {product.code}</p> */}
            <p className="text-indigo-600 font-bold mt-2 ">${product.price.toFixed(2)} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
