"user client"
import React from "react";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "1", imgUrl: "/photos/IMG-20241110-WA0000.jpg", size: "small" },
  { id: 2, title: "2", imgUrl: "/photos/IMG-20241110-WA0003.jpg", size: "large" },
  { id: 3, title: "3", imgUrl: "/photos/IMG-20241110-WA0014.jpg", size: "medium" },
  { id: 4, title: "4", imgUrl: "/photos/IMG-20241110-WA0015.jpg", size: "medium" },
  { id: 5, title: "5", imgUrl: "/photos/IMG-20241110-WA0016.jpg", size: "small" },
  { id: 6, title: "6", imgUrl: "/photos/IMG-20241110-WA0017.jpg", size: "large" },
  { id: 7, title: "7", imgUrl: "/photos/IMG-20241110-WA0018.jpg", size: "medium" },
  // Add more items as needed
];

export default function GallerySection() {
  return (
    <section className="py-12 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[150px]">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 ${
              item.size === "large" ? "row-span-3" : item.size === "medium" ? "row-span-2" : "row-span-1"
            }`}
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity hover:opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center p-4 bg-black bg-opacity-70 rounded-lg">
                <p className="text-white font-semibold text-xl">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
