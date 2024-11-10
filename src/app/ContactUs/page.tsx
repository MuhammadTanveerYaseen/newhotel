// app/contact/page.tsx
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeIn">Contact Us</h1>

      {/* Hotels Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {['Hotel Sunrise', 'Hotel Sunset', 'Hotel Oasis', 'Hotel Riviera'].map((hotel, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-2">{hotel}</h2>
            <p className="text-gray-600">123 Example St, City, Country</p>
            <p className="text-gray-600">Phone: +123 456 7890</p>
            <p className="text-gray-600">Email: contact@{hotel.toLowerCase().replace(' ', '')}.com</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091856!2d144.95373631560657!3d-37.81627974201111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4e9c71b%3A0xf0c0f7f1e8e7d5d2!2s123%20Example%20St%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1628253934541!5m2!1sen!2sus"
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
