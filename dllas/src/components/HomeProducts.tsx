import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Aafee from "./images/Aafee.png";
import Banner from "./images/Banner.png";
import Ceramikha from "./images/Ceramikha.png";
import DallasDrM1Bond from "./images/DallasDrM1Bond.jpeg";
import DallasGypsumPlasty from "./images/DallasGypsmPlasty.png";
import DallasGroutPlus from "./images/GroutPlus.png";
import DallasReadyPlaster from "./images/DallasReadyPlasty.png";
import DallasTileAdhensive from "./images/DallasTileAdhensive.png";
import SupremeGplastWhite from "./images/SupremeGplastWhite.png";
import makado from "./images/makado.png";
import matrixgypMatrix from "./images/matrixgypMatrix.png";
import matrixgypsmbond from "./images/matrixgypsmbond.png";

const ProductsPage = () => {
  const navigate = useNavigate();
  const brandCategories = [
    {
      id: "dallas",
      name: "Dallas",
      tagline: "India's 1st Next-Gen DampProof Wallcare Products",
      image: Banner,
      description: "India's leading waterproof construction materials",
    },
    {
      id: "Ceramikha",
      name: "Ceramikha",
      tagline: "Green Building, Safer Homes, Healthier Children",
      image: Ceramikha,
      description: "High-quality ceramic and finishing products",
    },
    {
      id: "drproof",
      name: "Dr. Proof",
      tagline: "India's 1st Next-Gen DampProof Dr. Proof",
      image: DallasDrM1Bond,
      description: "Professional waterproofing solutions",
    },
    {
      id: "Mackado",
      name: "Mackado",
      tagline: "India's 1st Next-Gen Wallcare products",
      image: makado,
      description: "Professional waterproofing solutions",
    },
    {
      id: "Matrix",
      name: "Matrix",
      tagline: "India's 1st Next-Gen Wallcare products",
      image: matrixgypMatrix,
      description: "Professional waterproofing solutions",
    },
  ];
  const dallasProducts = [
    {
      id: "wall-plaster",
      name: "Wall-Plaster",
      image: DallasReadyPlaster,
      price: "₹450/bag",
    },
    {
      id: "wall-putty",
      name: "Wall-Putty",
      image: SupremeGplastWhite,
      price: "₹350/bag",
    },
    {
      id: "gypsum-plaster",
      name: " Gypsum-Plaster",
      image: DallasGypsumPlasty,
      price: "₹380/bag",
    },
    {
      id: "tile-adhesive",
      name: " Tile-Adhesive",
      image: DallasTileAdhensive,
      price: "₹350/bag",
    },
    {
      id: "grout-plus",
      name: " Grout-Plus",
      image: DallasGroutPlus,
      price: "₹280/bag",
    },
  ];

  const ceramicaProducts = [
    {
      id: "ceramikha-gypsum-plaster",
      name: "Ceramikha",
      image: Ceramikha,
      price: "₹420/bag",
    },
  ];
  const matrixProducts = [
    {
      id: "matrixgypsmbond",
      name: "Gypsum Bond",
      image: matrixgypsmbond,
      price: "₹420/bag",
    },
    {
      id: "gypmatrix-gypsum-plaster",
      name: "GypMatrix",
      image: matrixgypMatrix,
      price: "₹420/bag",
    },
  ];

  // DrProof Products - Added click handler
  const drProofProducts = [
    {
      id: "dr-proof-m1-bond",
      name: "Dr. M1 Bond",
      image: DallasDrM1Bond,
      price: "₹580/bag",
    },
  ];

  return (
    <div className=" n ">
      <section className="pt-16 pb-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Products </span>
            </h2>
            <p className="text-xl text-gray-600">
              Quality over quantity - High-performance construction materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {brandCategories.map((brand) => (
              <div
                key={brand.id}
                className="bg-white pt-4 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
                onClick={() => {
                  if (brand.id.toLowerCase() === "mackado") {
                    // Open external website
                    window.open("https://www.mackadowallcare.com/", "_blank");
                  } else {
                    // Navigate to internal page
                    navigate(`/products`);
                  }
                }}
              >
                <div className="relative">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-28 object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">DALLAS</span> Products
              </h3>
              <p className="text-xl text-gray-600">
                India's 1st Next-Gen DampProof Wallcare Products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dallasProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white pt-3 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col" // Added flex flex-col for button positioning
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card's onClick from firing
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center" // Centered button
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">
                  CREAMI<span className="text-4xl text-yellow-600">kha</span>{" "}
                </span>{" "}
                Products
              </h3>
              <p className="text-xl text-gray-600">
                Green Building, Safer Homes, Healthier Children
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ceramicaProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center"
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Matrix</span> Products
              </h3>
              <p className="text-xl text-gray-600">
                India's 1st Next-Gen Wallcare products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matrixProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center"
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-red-600">Dr. PROOF</span> Products
              </h3>
              <p className="text-xl text-gray-600">
                India's 1st Next-Gen DampProof Dr. Proof
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drProofProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <h4 className="font-semibold text-center text-gray-800 text-lg mb-4">
                      {product.name}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="mt-auto inline-flex items-center justify-center bg-red-600 text-white text-md font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 self-center"
                    >
                      Know More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center justify-center bg-red-600 text-white  font-medium px-3 py-4 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore All Products
              <ArrowRight className="ml-2 w-3 h-3 " />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
