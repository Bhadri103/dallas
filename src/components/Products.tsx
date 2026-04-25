import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Award,
  Droplets,
  Zap,
  Leaf,
  Settings,
  Activity,
  Target,
  MapPin,
  ChevronDown,  
  ChevronUp, 
  ArrowRight,
} from "lucide-react";
import {
  dallasProducts,
  drProofProducts,
  ceramikhaProducts,
  heroSlides,
  matrixProducts,
  brandCategories,
  wallPlasterTechData,
} from "../data/productsData";
import Banner from './images/Banner.jpeg'
const ProductsPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeApplication, setActiveApplication] = useState<string | null>(
    null
  );

  useEffect(() => {
    // Scroll to top when the component mounts (for the main products list)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Hero Slider logic for the main products page
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Component for displaying individual product cards in the list
  const ProductCard = ({ product }) => (
    <div className="relative">
      <div
        className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)} // Navigate to separate details page
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow justify-between">
          {" "}
          {/* Added justify-between */}
          <h3 className="text-xl font-bold mb-4 text-center">
            {product.name}
          </h3>{" "}
          {/* Added mb-4 for spacing */}
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
    </div>
  );
  const heroSlides = [
    {
      image: Banner,
      title: "Lifetime Guaranteed Protection",
      subtitle: "Advanced Engineering Meets Quality",
    },
    {
      image: Banner,
      title: "Factory Direct Pricing",
      subtitle: "Superior Performance, Unmatched Value",
    },
    {
      image: Banner,
      title: "Trusted by 10,000+ Customers",
      subtitle: "Quality Construction Solutions Since 2015",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
         <section className="relative h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroSlides[currentSlide].image}
              alt="Dallas Products"
              className="w-full h-full object-contain transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
            <div>
              <h2 className="text-2xl md:text-6xl font-bold mb-4">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-xl md:text-2xl opacity-90">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === idx ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Main Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Brand Categories */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-red-600">Product Brands</span>
              </h2>
              <p className="text-xl text-gray-600">
                Quality over quantity - High-performance construction materials
              </p>
            </div>

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
                        <h3 className="text-2xl font-bold mb-2">
                          {brand.name}
                        </h3>
                        <p className="text-sm">{brand.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Dallas Products */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <h3 className="mx-6 text-2xl md:text-3xl font-bold text-[#E63946] bg-white px-4 py-2 rounded-full shadow-lg">
                Dallas
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dallasProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Dr. Proof Products */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <h3 className="mx-6 text-2xl md:text-3xl font-bold text-red bg-white px-4 py-2 rounded-full shadow-lg">
                  Dr. Proof Solutions
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drProofProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Ceramikha Products */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

                <h3 className="mx-6 text-2xl md:text-3xl font-bold text-red bg-white px-4 py-2 rounded-full shadow-lg">
                  Ceramikha Solutions
                </h3>

                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ceramikhaProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            {/* Ceramikha Products */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

                <h3 className="mx-6 text-2xl md:text-3xl font-bold text-red bg-white px-4 py-2 rounded-full shadow-lg">
                  Matrix Solutions
                </h3>

                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {matrixProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
             

            <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              @keyframes highlight {
                0% {
                  box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.4);
                  transform: scale(1);
                }
                50% {
                  box-shadow: 0 0 30px 10px rgba(255, 170, 0, 0.3);
                  transform: scale(1.02);
                }
                100% {
                  box-shadow: 0 0 0 0 rgba(255, 68, 68, 0);
                  transform: scale(1);
                }
              }

              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  transform: translateX(100%);
                  opacity: 0;
                }
              }

              .animate-fadeIn {
                animation: fadeIn 0.3s ease-out;
              }

              .animate-highlight {
                animation: highlight 0.8s ease-out;
              }

              .animate-shimmer {
                animation: shimmer 2s ease-in-out infinite;
              }
            `}</style>
          </div>
        </section>

        {/* Why Choose Dallas Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-[#E63946]">Dallas?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Unmatched Quality, Value, and Innovation in Construction
                Materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8 text-yellow-500" />,
                  title: "Direct Factory-to-Customer Pricing",
                  description: "Eliminates intermediaries for best value",
                  stat: "Up to 40% savings",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-500" />,
                  title: "Scientifically Engineered & Lifetime Guaranteed",
                  description: "Advanced research and testing",
                  stat: "15+ years R&D",
                },
                {
                  icon: <Droplets className="w-8 h-8 text-cyan-500" />,
                  title: "Superior Waterproofing Technology",
                  description: "Prevents dampness, mold, and chemical damage",
                  stat: ">95% water resistance",
                },
                {
                  icon: <Zap className="w-8 h-8 text-orange-500" />,
                  title: "Cost-Effective & High Performance",
                  description: "Excellent value with superior strength",
                  stat: "2x stronger than regular plaster",
                },
                {
                  icon: <Settings className="w-8 h-8 text-gray-600" />,
                  title: "Continuous Innovation",
                  description: "Formula updates every six months",
                  stat: "6-month update cycle",
                },
                {
                  icon: <Activity className="w-8 h-8 text-purple-500" />,
                  title: "Highly Equipped Manufacturing",
                  description: "Automated quality controls",
                  stat: "99.8% quality rate",
                },
                {
                  icon: <Target className="w-8 h-8 text-red-500" />,
                  title: "Customizable Solutions",
                  description: "Adapted to specific construction needs",
                  stat: "1000+ custom projects",
                },
                {
                  icon: <Leaf className="w-8 h-8 text-green-500" />,
                  title: "Eco-Friendly Production",
                  description: "Sustainable materials and processes",
                  stat: "Carbon neutral by 2025",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-[#E63946]">Service Areas</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expanding our reach across India, bringing quality products
                closer to you.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Chennai",
                "Bangalore",
                "Mumbai",
                "Delhi",
                "Hyderabad",
                "Pune",
                "Kolkata",
                "Ahmedabad",
                "Jaipur",
                "Lucknow",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-red-50 text-black-800 px-6 py-3 rounded-full flex items-center shadow-sm"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-700 text-lg mb-4">
                Don't see your city listed? Contact us to inquire about delivery
                to your location!
              </p>
              <a
                href="/products" 
                className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                Know more
              </a>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-[#E63946]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Find quick answers to common queries about our products and
                services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What makes Dallas Wall Plaster waterproof?",
                  a: "Dallas Wall Plaster is formulated with advanced polymer additives and specific hydrophobic agents that create a dense, non-porous structure, preventing water penetration and ensuring lasting dampness resistance. This unique composition is a result of over 15 years of R&D.",
                },
                {
                  q: "Do I need special tools or skilled labor for application?",
                  a: "No! One of the key advantages of Dallas products like Wall Plaster and Wall Putty is their ease of application. They are designed for standard construction practices and do not require specialized tools or highly skilled labor, saving you time and cost.",
                },
                {
                  q: "How does the lifetime guarantee work for Dallas Wall Plaster?",
                  a: "Our Lifetime Guarantee for Dallas Wall Plaster covers its waterproof performance for the entire lifespan of the structure. In the unlikely event of dampness returning due to product failure, we commit to providing material replacement and re-application support, subject to our terms and conditions.",
                },
                {
                  q: "What is the 'Dallas Watertreater' and why is it important?",
                  a: "Dallas Watertreater is a proprietary water modification solution designed to optimize the performance of our products. When mixed with water used for our plasters and putties, it enhances workability, improves hydration, and ensures better bonding and overall strength of the final application. It is crucial for achieving optimal results.",
                },
                {
                  q: "Are Dallas products eco-friendly?",
                  a: "Yes, Dallas is committed to sustainable practices. Our products are manufactured with environmentally conscious materials and processes, striving for low VOC (Volatile Organic Compounds) content. We are working towards achieving carbon neutrality by 2025.",
                },
                {
                  q: "Can I get a customized solution for a large project?",
                  a: "Absolutely. For large-scale or unique construction projects, Dallas offers customized product solutions and technical consultation. Our team of experts can work with you to tailor specific formulations and application strategies to meet your project's precise requirements. Contact our sales team for more details.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <button
                    className="flex justify-between items-center w-full text-left font-bold text-gray-800 text-lg"
                    onClick={() =>
                      setActiveApplication(
                        activeApplication === `faq-${index}`
                          ? null
                          : `faq-${index}`
                      )
                    }
                  >
                    {faq.q}
                    {activeApplication === `faq-${index}` ? (
                      <ChevronUp className="w-5 h-5 text-red-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                  {activeApplication === `faq-${index}` && (
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ProductsPage;
