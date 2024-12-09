import React from "react";

type Feature = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  code: string;
  label?: string;
};

type FeaturesGridProps = {
  title?: string;
};

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ title, ...rest }) => {
  const features: Feature[] = [
    {
      id: "1",
      name: "Comforty craft",
      price: 42.0,
      image: "/image 15.png",
      category: "Chairs",
      code: "Y523201",
    },
    {
      id: "2",
      name: "Comforty craft",
      price: 42.0,
      image: "/image 23.png" ,
      category: "Chairs",
      code: "Y523202",
      label: "New Arrival",
    },
    {
      id: "3",
      name: "Comforty craft",
      price: 42.0,
      image: "\image 32 (1).png",
      category: "Chairs",
      code: "Y523203",
    },
    {
      id: "4",
      name: "Comforty craft",
      price: 42.0,
      image: "/image 23.png",
      category: "Chairs",
      code: "Y523204",
      
    },
    {
      id: "4",
      name: "Comforty craft",
      price: 42.0,
      image: "image 1166.png",
      category: "Chairs",
      code: "Y523204",
      
    },
    {
      id: "4",
      name: "Comforty craftr",
      price: 42.0,
      image: "/image 15.png",
      category: "Chairs",
      code: "Y523204",
      
    },
  ];

  return (
    <section className="py-10 px-6  ">
      <h2 className=" text-[40px] font-bold text-indigo-900  mb-8 mt-3 text-center">{'Latest Products'}</h2>
      <div className="flex justify-center">
        <ul className="flex gap-10 ">
          <li className="text-pink-700">New Arrival</li>
          <li> Best Seller</li>
          <li>Featured</li>
          <li> Special Offer</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-3 w-[1000px] h-[300px] ml-80  ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-whiteHex rounded-lg shadow-lg p-4 text-center relative"
          >
            {feature.label && (
              <span className="absolute top-2 right-2 bg-green-500 text-bg text-xs font-semibold px-2 py-1 rounded-full">
                {feature.label}
              </span>
            )}
            <img
              src={feature.image}
              alt={feature.name}
              className="h-[150px]h-[150px]  mx-auto "
            />
            <div className="flex justify-around">
            <h3 className="text-lg font-semibold text-color">
              {feature.name}
            </h3>
            <p className="text-color text-sm  m-2">Code: {feature.code}</p>
            <p className="text-pink-700 font-bold mt-2">${feature.price.toFixed(2)}</p>
          </div>
          </div>
      
        ))}
      </div>
    </section>
    
  );
};
