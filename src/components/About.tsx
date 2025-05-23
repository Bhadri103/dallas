import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">About Us</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow rounded-tl-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Factory Operations" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red rounded-br-3xl"></div>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-4">Our <span className="text-red">Mission</span> & <span className="text-yellow">Vision</span></h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded in 2005, Mackado Plast has been a pioneering force in the plastic manufacturing industry. 
            We specialize in creating innovative plastic solutions that address the evolving needs of diverse industries.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is to deliver high-quality, sustainable plastic products while maintaining the highest standards 
            of environmental responsibility. We continuously invest in research and development to stay at the forefront 
            of technological advancements in the plastic engineering sector.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red">
              <h4 className="font-bold text-lg mb-2">Quality Excellence</h4>
              <p className="text-gray-600">Committed to delivering products that exceed industry standards.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow">
              <h4 className="font-bold text-lg mb-2">Innovation</h4>
              <p className="text-gray-600">Continuously evolving through research and technological advancement.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red">
              <h4 className="font-bold text-lg mb-2">Sustainability</h4>
              <p className="text-gray-600">Eco-friendly practices at every stage of production.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow">
              <h4 className="font-bold text-lg mb-2">Customer Focus</h4>
              <p className="text-gray-600">Tailoring solutions to meet specific client requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;