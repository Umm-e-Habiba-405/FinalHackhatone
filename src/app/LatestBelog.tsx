import React from 'react'

const LatestBelog = () => {
  return (
    <div>
      <img src="/image 1174.png" alt=""  className=' ml-96'/>
      <div className="py-12">
  <h2 className="text-center text-[40px] font-bold text-indigo-900 mb-8">
    Latest Blog
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        id: 1,
        author: "Saber Ali",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More of this less hello samlande lied much over tightly circa horse taped mightly",
        image: "/Frame 3 (2).png",
        link: "#",
      },
      {
        id: 2,
        author: "Surfavioun",
        date: "21 August 2020",
        title: "Top essential trends in 2021",
        description:
          "More of this less hello samlande lied much over tightly circa horse taped mightly",
        image: "/2dcYhvbHV-M.png",
        link: "#",
      },
      {
        id: 3,
        author: "Saber Ali",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More of this less hello samlande lied much over tightly circa horse taped mightly",
        image: "/Frame 4.png",
        link: "#",
      },
    ].map((blog) => (
      <div
        key={blog.id}
        className="bg-white shadow-md rounded-lg overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="mr-2">✍ {blog.author}</span>
            <span>📅 {blog.date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
          <a
            href={blog.link}
            className="text-indigo-600 font-medium hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

      
    </div>
  )
}

export default LatestBelog
