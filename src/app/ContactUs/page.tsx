// app/contact/page.tsx
import React from 'react';

const ContactPage: React.FC = () => {
  // Hotel data
  const hotels = [
    {
      name: 'Hotel Multan One',
      address: 'Near Gulzar Hospital Main Bosan Road Multan',
      phone: '033001000444',
      email: 'contact@hotelmultanone.com',
    },
    {
      name: 'Hotel A One',
      address: 'HBL Street Near Mall of Gulgashat Bosan Road Multan',
      phone: '03238525552',
      email: 'contact@hotelaone.com',
    },
    {
      name: 'Hotel Serena Palace',
      address: 'Opp MCC Ground Nawan Shehr Multan',
      phone: '03218630050',
      email: 'contact@hotelserenapalace.com',
    },
    {
      name: 'Hotel New MidCity',
      address: 'Sial Arcade Sher Shah Road Near Multan Cantt',
      phone: '03138630050',
      email: 'contact@hotelnewmidcity.com',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeIn">Contact Us</h1>

      {/* Hotels Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-2">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.address}</p>
            <p className="text-gray-600">Phone: {hotel.phone}</p>
            <p className="text-gray-600">Email: {hotel.email}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white p-8 shadow-lg rounded-lg animate-slideIn">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-5xl mt-12 animate-fadeIn">
        <iframe
          src="https://www.google.com/maps/place/Hotel+A-One+Multan/@30.2336537,71.4790641,17z/data=!4m21!1m11!3m10!1s0x393b35b83ca6d011:0xb5673e124dc11d5d!2sHotel+A-One+Multan!5m2!4m1!1i2!8m2!3d30.2336532!4d71.4791438!10e5!16s%2Fg%2F11tg0cz1sd!3m8!1s0x393b35b83ca6d011:0xb5673e124dc11d5d!5m2!4m1!1i2!8m2!3d30.2336532!4d71.4791438!16s%2Fg%2F11tg0cz1sd?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="400"
          loading="lazy"
          className="border-0 rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
