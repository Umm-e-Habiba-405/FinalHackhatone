import Image from 'next/image'
// import React from 'react'Image

const Hero = () => {
  return (
    <div>
       {/* Hero Section */}
       <section>
        <div className="container  flex items-center justify-between">
        <img src="image 32.png" alt="" className='-mt-64' />
          <div className="max-w-xl">
            <h3 className='-ml-16 text-pink-600 font-bold text-[25px]'> New Furniture for Castle</h3>
            <h1 className="text-4xl font-bold mt-4 -ml-16">
              New Furniture Collection Trends in 2024
            </h1>
            <p className="text-violet-600 text-[21px] mt-6 -ml-16">
              Discover our latest collection of modern furniture designs to enhance your living space.
            </p>
            <button className="bg-pink-500 text-white px-8 py-3  mt-6 rounded-md hover:bg-pink-600 -ml-16">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-16 right-0  text-white rounded-full px-4 py-2">
                <img  src="/Vector 14.png" alt="vectore"  className='w-[80px] h-[80px] text-center'/>
              <p className='-mt-11 px-3'> 50% off</p>
            </div>
            <img
              src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
              alt="Featured Chair"
              width={629}
              height={629}
              className="mt-24"
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
