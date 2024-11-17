// app/contact/page.tsx
import React from "react";

const ContactPage: React.FC = () => {
  // Hotel data
  const hotels = [
    {
      name: "Hotel Multan One",
      address: "Near Gulzar Hospital Main Bosan Road Multan",
      phone: "033001000444",
      email: "contact@hotelmultanone.com",
    },
    {
      name: "Hotel A One",
      address: "HBL Street Near Mall of Gulgashat Bosan Road Multan",
      phone: "03238525552",
      email: "contact@hotelaone.com",
    },
    {
      name: "Hotel Serena Palace",
      address: "Opp MCC Ground Nawan Shehr Multan",
      phone: "03218630050",
      email: "contact@hotelserenapalace.com",
    },
    {
      name: "Hotel New MidCity",
      address: "Sial Arcade Sher Shah Road Near Multan Cantt",
      phone: "03138630050",
      email: "contact@hotelnewmidcity.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-6">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-white text-center mb-10 tracking-wide drop-shadow-lg animate-fadeIn">
        Contact Us
      </h1>

      {/* Hotels Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-16">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="relative bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-md opacity-75"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {hotel.name}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> {hotel.address}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong>{" "}
              <a
                href={`https://wa.me/${hotel.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {hotel.phone}
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${hotel.email}`}
                className="text-blue-600 hover:underline"
              >
                {hotel.email}
              </a>
            </p>
            <a
              href={`https://wa.me/${hotel.phone}?text=Hello! I would like to book a room.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transform transition duration-300 hover:scale-110"
            >
              Book via WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl mx-auto bg-white p-10 shadow-2xl rounded-lg relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-pink-500 to-purple-500 rounded-lg blur-md opacity-75"></div>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
