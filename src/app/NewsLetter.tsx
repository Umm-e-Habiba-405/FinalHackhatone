export function Newsletter() {
    return (
      <section className=" py-16">
        <div className="relative bg-pink-100 py-52">
  <div className="absolute inset-0">
    <img
      src="/Rectangle 102.png" // Replace with your image path
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="relative z-10 text-center">
    <h1 className="text-[25px] md:text-xl font-bold text-gray-800 mb-4">
      Get Latest Update By Subscribe Our Newsletter
    </h1>
    <form className="flex justify-center space-x-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-64 md:w-80 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

      </section>
    );
  }
  