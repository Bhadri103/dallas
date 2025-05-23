import React from 'react';
import Slider from '../components/Slider';

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

const Home = () => {
  return (
    <div className="pt-20">
      <Slider slides={homeSlides} effect="fade" />
      
      {/* Rest of the home page content will go here */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Dallas Wallcare
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Founded in 2019, we are committed to transforming India's construction landscape 
          with our premium waterproof wall care solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;