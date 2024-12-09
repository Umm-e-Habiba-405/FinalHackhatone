import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  code: string;
  label?: string;
};

type ProductGridProps = {
  title?: string;
};

export const ProductGrid: React.FC<ProductGridProps> = ({ title, ...rest }) => {
  const products: Product[] = [
    {
      id: "1",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1168.png",
      category: "Chairs",
      code: "Y523201",
    },
    {
      id: "2",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1168.png",
      category: "Chairs",
      code: "Y523202",
      label: "New Arrival",
    },
    {
      id: "3",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 3.png",
      category: "Chairs",
      code: "Y523203",
    },
    {
      id: "4",
      name: "Cantilever chair",
      price: 42.0,
      image: "/image 1169.png",
      category: "Chairs",
      code: "Y523204",
      label: "Hussain",
    },
  ];

  return (
    
    <section className=" bg-whiteHex ">
      <h2 className="text-center text-[42px] font-bold text-indigo-900 ">Featured Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-2  mx-72 w-[1200px] h-[361] ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 text-center relative"
          >
            {product.label && (
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.label}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm">Code: {product.code}</p>
            <p className="text-indigo-600 font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
