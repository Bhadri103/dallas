import React, { useEffect } from 'react';
import { Factory, Truck, Crop as Drop, Building2, ShoppingBag, Stethoscope, Car, Zap, Package } from 'lucide-react';

const applicationData = [
  {
    id: 1,
    title: "Industrial Manufacturing",
    description: "Durable components for industrial machinery and equipment.",
    icon: Factory,
    color: "bg-red"
  },
  {
    id: 2,
    title: "Logistics & Packaging",
    description: "Protective packaging solutions for secure transport and storage.",
    icon: Truck,
    color: "bg-yellow"
  },
  {
    id: 3,
    title: "Water Management",
    description: "Reliable piping systems for water supply and irrigation networks.",
    icon: Drop,
    color: "bg-red"
  },
  {
    id: 4,
    title: "Construction",
    description: "Lightweight yet strong materials for modern construction projects.",
    icon: Building2,
    color: "bg-yellow"
  },
  {
    id: 5,
    title: "Consumer Goods",
    description: "High-quality plastic components for everyday consumer products.",
    icon: ShoppingBag,
    color: "bg-red"
  },
  {
    id: 6,
    title: "Healthcare",
    description: "Medical-grade plastics for healthcare equipment and devices.",
    icon: Stethoscope,
    color: "bg-yellow"
  },
  {
    id: 7,
    title: "Automotive",
    description: "Specialized parts that meet the stringent requirements of the automotive industry.",
    icon: Car,
    color: "bg-red"
  },
  {
    id: 8,
    title: "Electronics",
    description: "Precision components for electronic devices and equipment.",
    icon: Zap,
    color: "bg-yellow"
  },
  {
    id: 9,
    title: "Agriculture",
    description: "Innovative solutions for modern farming and agricultural practices.",
    icon: Package,
    color: "bg-red"
  }
];

const Applications = () => {
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
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Applications</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our products find applications across a wide range of industries, providing innovative solutions to diverse challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applicationData.map((app, index) => {
          const IconComponent = app.icon;
          
          return (
            <div 
              key={app.id}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-200 hover:border-red transition-colors duration-300 animate-on-scroll card-hover"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className={`${app.color} p-3 inline-flex rounded-full mb-4`}>
                <IconComponent size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{app.title}</h3>
              <p className="text-gray-600">{app.description}</p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 bg-gray-100 rounded-lg p-8 shadow-inner animate-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Custom <span className="text-red">Applications</span></h3>
            <p className="text-gray-700 mb-4">
              Beyond our standard offerings, we specialize in developing custom plastic solutions 
              tailored to the unique requirements of your specific application or industry.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of engineers works closely with clients to understand their challenges and 
              design innovative solutions that address their specific needs.
            </p>
            <a 
              href="#contact" 
              className="btn-primary px-6 py-2 rounded-md font-medium inline-block"
            >
              Discuss Your Requirements
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Custom Solutions" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow rounded-br-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;