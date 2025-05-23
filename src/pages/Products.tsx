import React from 'react';
import Slider from '../components/Slider';
import ProductsComponent from '../components/Products';

const productSlides = [
  {
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg",
    title: "Dallas Wall Plast",
    description: "India's 1st Premium Dampproof Plaster"
  },
  {
    image: "https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg",
    title: "Dallas Groutt",
    description: "Advanced Dampproof Grouting Solution"
  },
  {
    image: "https://images.pexels.com/photos/6474041/pexels-photo-6474041.jpeg",
    title: "Dallas Supreme White",
    description: "Premium Dampproof Wallputty"
  }
];

const Products = () => {
  return (
    <div className="pt-20">
      <Slider slides={productSlides} />
      <div className="py-16">
        <ProductsComponent />
      </div>
    </div>
  );
};

export default Products;