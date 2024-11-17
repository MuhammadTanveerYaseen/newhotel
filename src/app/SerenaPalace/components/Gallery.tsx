"use client";
import React, { useState } from "react";
import Image from "next/image";
interface GalleryItem {
  id: number;
  title: string;
  imgUrl: string;
  size: "small" | "medium" | "large";
}

// Define the type for gallery items

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Jelly-O Brownie Sweet", imgUrl: "/photos/IMG-20241110-WA0035.jpg", size: "small" },
  { id: 2, title: "Muffin Jelly Gingerbread", imgUrl: "/photos/IMG-20241110-WA0036.jpg", size: "large" },
  { id: 3, title: "Sesame Snaps Chocolate", imgUrl: "/photos/IMG-20241110-WA0037.jpg", size: "medium" },
  { id: 4, title: "Toffee Bear Claw", imgUrl: "/photos/IMG-20241110-WA0038.jpg", size: "medium" },
  { id: 5, title: "Danish Dessert Lollipop", imgUrl: "/photos/IMG-20241110-WA0042.jpg", size: "small" },
  // Add more items as needed
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Our Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[150px]">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer ${
              item.size === "large" ? "row-span-3" : item.size === "medium" ? "row-span-2" : "row-span-1"
            }`}
            onClick={() => openModal(item)}
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
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
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Conditionally render Image only if selectedImage is available */}
            {selectedImage.imgUrl && (
              <Image
                src={selectedImage.imgUrl}
                alt={selectedImage.title}
                width={800}
                height={600}
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            )}
            <p className="text-center text-white text-xl mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
