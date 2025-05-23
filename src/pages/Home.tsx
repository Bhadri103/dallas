import React from 'react';
import Slider from '../components/Slider';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';

const homeSlides = [
  {
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    title: "India's 1st Next-Gen Damp Proof Wall Care Products",
    description: "Revolutionizing construction with innovative waterproof solutions"
  },
  {
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    title: "Scientific Excellence",
    description: "Backed by advanced research and cutting-edge technology"
  },
  {
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg",
    title: "Trusted by Thousands",
    description: "Over 15,000 successful projects across South India"
  }
];

const features = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description: "Lifetime guaranteed products developed through advanced research"
  },
  {
    icon: Star,
    title: "Superior Technology",
    description: "Effective protection against dampness, mold, and chemical damage"
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Direct factory-to-customer pricing with personalized solutions"
  }
];

const Home = () => {
  return (
    <div className="pt-20">
      <Slider slides={homeSlides} effect="fade" />
      
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Dallas Wallcare
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Founded in 2019, we are committed to transforming India's construction landscape 
            with our premium waterproof wall care solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <a 
            href="/products" 
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Explore Our Products
            <ArrowRight className="ml-2" />
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;