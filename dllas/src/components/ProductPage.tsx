import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
const Aafee = "./images/Aafee.png";
const Banner = "./images/Banner.png";
const Ceramikha = "./images/Ceramikha.png";
const DallasGroutPlus = "./images/GroutPlus.png";
const DallasWallutty = "./images/DallasWallutty.png";
const DallasDrM1Bond = "./images/DallasDrM1Bond.jpeg";
const DallasGypsumPlasty = "./images/DallasGypsmPlasty.png";
const DallasReadyPlaster = "./images/DallasReadyPlasty.png";
const DallasSupremeGyplast = "./images/DallasSupremeGyplast.jpeg";
const DallasTileAdhensive = "./images/DallasTileAdhensive.png";

const ProductsPage = () => {
  // Brand Categories
  const brandCategories = [
    {
      id: "dallas",
      name: "Dallas",
      tagline: "Premium Construction Solutions",
      image: Banner,
      description: "India's leading waterPROOFconstruction materials",
    },
    {
      id: "ceramica",
      name: "Ceramica",
      tagline: "Advanced Ceramic Solutions",
      image: Ceramikha,
      description: "High-quality ceramic and finishing products",
    },
    {
      id: "drproof",
      name: "Dr. Proof",
      tagline: "Waterproofing Specialists",
      image: DallasDrM1Bond,
      description: "Professional waterproofing solutions",
    },
  ];

  // Dallas Products
  const dallasProducts = [
    {
      id: "dallas-wall-plaster",
      name: "Dallas Ready Plaster",
      image: DallasReadyPlaster,
      price: "₹450/bag",
    },
    {
      id: "dallas-wall-putty",
      name: "Dallas Wall Putty",
      image: DallasWallutty,
      price: "₹320/bag",
    },
    {
      id: "dallas-gypsum-plaster",
      name: "Dallas Gypsum Plaster",
      image: DallasGypsumPlasty, // Changed to match the import variable name
      price: "₹380/bag",
    },
    {
      id: "dallas-supreme-gyplast",
      name: "Dallas Supreme Gyplast",
      image: DallasSupremeGyplast,
      price: "₹420/bag",
    },
    {
      id: "dallas-grout-plus",
      name: "Dallas Grout Plus",
      image: DallasGroutPlus,
      price: "₹280/bag",
    },
    {
      id: "dallas-tile-adhesive",
      name: "Dallas Tile Adhesive",
      image: DallasTileAdhensive,
      price: "₹350/bag",
    },
  ];

  // Ceramikha Products
  const ceramicaProducts = [
    {
      id: "ceramica-gypsum-plaster",
      name: "Ceramikha Gypsum Plaster",
      image: Ceramikha,
      price: "₹420/bag",
    },
  ];

  // Dr. PROOFProducts
  const drProofProducts = [
    {
      id: "drproof-m1-bond",
      name: "Dr. M1 Bond",
      image: DallasDrM1Bond,
      price: "₹580/bag",
    },
    {
      id: "drproof-protective-coating",
      name: "Protective Coating",
      image: Aafee,
      price: "Custom Pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Product Brands</span>
            </h2>
      
          </div>

          {/* Brand Categories */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {brandCategories.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                      <p className="text-sm">{brand.tagline}</p>
                    </div>
                  </div>
                </div>
              <div className="p-6">
                  <p className="text-gray-600 text-center">
                    {brand.description}
                  </p>
                </div>  
              </div>
            ))}
          </div> */}

          {/* Dallas Products Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Dallas</span> Products
              </h3>
              <p className="text-gray-600">
                Premium waterPROOFconstruction solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dallasProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-center text-gray-800 text-lg">
                      {product.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ceramikha Products Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Ceramica</span> Products
              </h3>
              <p className="text-gray-600">
                Advanced ceramic and finishing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ceramicaProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-center text-gray-800 text-lg">
                      {product.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dr. PROOFProducts Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Dr. Proof</span> Products
              </h3>
              <p className="text-gray-600">
                Professional waterproofing specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drProofProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-center text-gray-800 text-lg">
                      {product.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center">
            <a
              href="/dallas-2/products"
              className="inline-flex items-center justify-center bg-red-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore All Products
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
