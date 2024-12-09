export const Footer = () => {
    return (
        <footer className="bg-banner pt-12 pb-6 flex justify-around">
        <div className="container  ml-32">
        <h3 className="text-[25px] text-left font-bold  mt-12 ">Hekto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
           
            <form className="mt-5">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 rounded border border-gray-300 mb-2"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded w-full">
                Sign Up
              </button>
              <p className="text-gray-600 text-[16px]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
            </form>
            
            <div className="ml-20">
                <h2 className="font-bold text-[21px] leading-10">catogries</h2>
                <p>Laptops & Computers</p>
                <p>Cameras & Photography</p>
                <p>Smart Phones & Tablets</p>
                <p>Video Games & Consoles</p>
                <p>Waterproof Headphones</p>
            </div>
            <div className="ml-5">
                <h1 className="font-bold text-[21px] leading-10">Custome Care</h1>
                <p>My Account</p>
                <p>Discount</p>
                <p>ReturnsOrders History</p>
                <p>Orders History</p>
                <p>Order Tracking</p>
            </div>
            <div>
                <h1 className="font-bold text-[21px] leading-10">pages</h1>
                <p>Blog</p>
                <p>Browse the Shop</p>
                <p>Category</p>
                <p>Pre-Built Pages</p>
                <p>Visual Composer Elements</p>
                <p>WooCommerce Pages</p>
            </div>

          </div>
          <div className="border-t pt-6 text-center text-gray-500 text-[16px]">
          ©2024 Hekto. All rights reserved.
        </div>
          </div>
         
      
          </footer>
          
          
         
    )};