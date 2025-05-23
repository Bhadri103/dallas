import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Innovative Solutions in <span className="text-yellow">Plastic</span> <span className="text-red">Engineering</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transforming industries with cutting-edge plastic solutions that combine durability, 
            sustainability, and innovation. Leading the way in plastic manufacturing excellence since 2005.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#products" 
              className="btn-primary px-8 py-3 rounded-md text-lg font-medium inline-block text-center"
            >
              Explore Products
            </a>
            
            <a 
              href="#contact" 
              className="btn-secondary px-8 py-3 rounded-md text-lg font-medium inline-block text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;