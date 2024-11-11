"use client"
import Link from 'next/link';
import React from 'react';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   LinkedinShareButton,
//   WhatsappShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   LinkedinIcon,
//   WhatsappIcon
// } from 'react-share';

function Footer() {

  return (
    <div>
      <footer className="bg-gray-900 backdrop-blur border-t py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo and Company Info */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Link href="/">
                <div className="text-lg font-bold">Hotel Booking</div>
              </Link>
              <p className="text-sm mt-2">The best place for your staycation</p>
            </div>
            {/* Footer Links */}
            <div className="w-full md:w-1/3 flex justify-center space-x-4">
              <Link href="/" className="text-sm hover:font-semibold transition-transform duration-300">
                Home
              </Link>
             
              <Link href="#price" className="text-sm hover:font-semibold transition-transform duration-300">
              <Link href={"https://wa.me/03301000444?text=I%20want%20to%20book%20the%20Standard%20Room"}>Book Now</Link>
              </Link>
              <Link href="/ContactUs" className="text-sm hover:font-semibold transition-transform duration-300">
                Contact
              </Link>
            </div>
            {/* Social Icons */}
            {/* <div className="w-full md:w-1/3 flex justify-end space-x-4">
              <FacebookShareButton url={shareUrl} title={title} className="transition-colors duration-300">
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title} className="transition-colors duration-300">
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={title} className="transition-colors duration-300">
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={title} className="transition-colors duration-300">
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div> */}
          </div>
          {/* Copyright */}
          <div className="mt-6 text-center text-sm text-yellow-600">
            © {new Date().getFullYear()} Hotel Booking. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
