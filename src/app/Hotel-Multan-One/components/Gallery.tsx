"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  title: string;
  imgUrl: string;
  size: "small" | "medium" | "large";
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "1", imgUrl: "/HotelMultanOne/IMG-20241106-WA0095.jpg", size: "small" },
  { id: 2, title: "2", imgUrl: "/HotelMultanOne/IMG-20241106-WA0097.jpg", size: "medium" },
  { id: 3, title: "3", imgUrl: "/HotelMultanOne/IMG-20241106-WA0100.jpg", size: "small" },
  { id: 4, title: "4", imgUrl: "/HotelMultanOne/IMG-20241106-WA0102.jpg", size: "small" },
  { id: 5, title: "5", imgUrl: "/HotelMultanOne/IMG-20241106-WA0103.jpg", size: "small" },
  
  
  // Add more items as needed
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryItems.length);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section className="py-12 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[150px]">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer ${
              item.size === "large" ? "row-span-3" : item.size === "medium" ? "row-span-2" : "row-span-1"
            }`}
            onClick={() => openModal(index)}
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
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

      {/* Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-[70%] h-[70%]">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <button
              className="absolute top-1/2 left-4 text-white text-2xl font-bold z-10"
              onClick={showPreviousImage}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 text-white text-2xl font-bold z-10"
              onClick={showNextImage}
            >
              &#10095;
            </button>
            <Image
              src={galleryItems[currentIndex].imgUrl}
              alt={galleryItems[currentIndex].title}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
            <p className="text-center text-white text-xl mt-4">
              {galleryItems[currentIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
