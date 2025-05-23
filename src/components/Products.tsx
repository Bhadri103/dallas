import React, { useEffect } from 'react';

const productData = [
  {
    id: 1,
    name: "Premium PVC Pipes",
    description: "High-quality PVC pipes designed for durability and corrosion resistance. Perfect for plumbing and drainage systems.",
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Industrial Containers",
    description: "Heavy-duty plastic containers for industrial storage solutions. Chemical resistant and available in various sizes.",
    image: "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Precision Molded Parts",
    description: "Custom-designed plastic components manufactured with precision for various industrial applications.",
    image: "https://images.pexels.com/photos/6474041/pexels-photo-6474041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Protective Packaging",
    description: "Innovative packaging solutions that provide superior protection for sensitive products during transit.",
    image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Medical Grade Plastics",
    description: "Specialized plastic materials meeting the stringent requirements of the healthcare and medical industry.",
    image: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Automotive Components",
    description: "Lightweight yet durable plastic parts designed specifically for the automotive sector.",
    image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Products = () => {
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
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Our Products</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our extensive range of high-quality plastic products designed to meet the diverse needs of various industries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card bg-white rounded-lg overflow-hidden shadow-md animate-on-scroll card-hover"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <button className="mt-4 px-4 py-2 bg-red text-white rounded hover:bg-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="#contact" className="inline-block btn-primary px-8 py-3 rounded-md text-lg font-medium">
          Request Custom Solutions
        </a>
      </div>
    </div>
  );
};

export default Products;