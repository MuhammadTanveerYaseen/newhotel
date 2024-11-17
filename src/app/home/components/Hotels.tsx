import React from "react";
import Image from "next/image";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    name: "Hotel A Multan One",
    description: "Experience luxury by the ocean with stunning views and premium amenities.",
    imgUrl: "/photos/IMG-20241110-WA0023.jpg",
    slug: "AMultan",
  },
  {
    id: 2,
    name: "Hotel Multan One",
    description: "Find peace in the mountains with cozy rooms and spectacular scenery.",
    imgUrl: "/photos/IMG-20241110-WA0016.jpg",
    slug: "HotelMultanOne",
  },
  {
    id: 3,
    name: "Mid City Hotel",
    description: "Enjoy the vibrant city life with premium rooms and exceptional service.",
    imgUrl: "/photos/IMG-20241110-WA0002.jpg",
    slug: "MidcityHotel",
  },
  {
    id: 4,
    name: "Serena Hotel",
    description: "Relax in a serene desert escape with luxurious accommodations.",
    imgUrl: "/photos/IMG-20241110-WA0035.jpg",
    slug: "SerenaHotel",
  },
];

export default function OurHotels() {
  return (
    <section className="py-12 px-6 md:px-10 lg:px-20 bg-gray-100">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Our Hotels</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={hotel.imgUrl}
              alt={`Image of ${hotel.name}`}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
              <p className="text-gray-600 mt-2">{hotel.description}</p>
              <Link
                href={`/${hotel.slug}`}
                className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
