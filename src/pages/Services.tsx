import React from 'react';
import Slider from '../components/Slider';

const serviceSlides = [
  {
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    title: "Professional Installation",
    description: "Expert application services for all our products"
  },
  {
    image: "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg",
    title: "Technical Support",
    description: "Dedicated assistance throughout your project"
  },
  {
    image: "https://images.pexels.com/photos/7218013/pexels-photo-7218013.jpeg",
    title: "Quality Assurance",
    description: "Rigorous testing and monitoring for optimal results"
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      <Slider slides={serviceSlides} />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Installation Services"
            description="Professional application of our products by trained experts"
          />
          <ServiceCard
            title="Technical Consultation"
            description="Expert advice for your specific construction needs"
          />
          <ServiceCard
            title="After-Sales Support"
            description="Ongoing assistance and maintenance guidance"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Services;