import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Factory } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Factory size={32} className="text-red" />
              <span className="text-2xl font-bold">
                <span className="text-red">MACKADO</span>
                <span className="text-yellow">PLAST</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading manufacturer of high-quality plastic products serving diverse industries with innovative solutions since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-300">Products</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#applications" className="text-gray-400 hover:text-white transition-colors duration-300">Applications</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">PVC Pipes</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Industrial Containers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Precision Parts</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Protective Packaging</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Medical Plastics</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Automotive Components</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates, industry insights, and product information.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red"
              />
              <button
                type="submit"
                className="w-full bg-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} MackadoPlast. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;