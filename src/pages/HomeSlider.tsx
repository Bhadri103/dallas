import React from "react";
import Slider from "../components/Slider";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight, Shield, Star, Users } from "lucide-react";
import HomeProducts from "../components/HomeProducts";
import Banner1 from "../images/Wallputt.png";
import DallasBanner from "../images/DallasBanner.png";
import ceramikhaBanner from "../images/Ceramic.png";
const Aafee = "./images/Aafee.png";
const Banner = "./images/Banner.jpeg";
const Ceramikha = "./images/Ceramikha.png";
const DallasGroutPlus = "./images/GroutPlus.png";
const DallasWallutty = "./images/DallasWallutty.png";
const DallasDrM1Bond = "./images/DallasDrM1Bond.jpeg";
const DallasGypsumPlasty = "./images/DallasGypsmPlasty.png";
const DallasReadyPlaster = "./images/DallasReadyPlasty.png";
const DallasSupremeGyplast = "./images/SupremeGplastSingle.png";
const DallasTileAdhensive = "./images/DallasTileAdhensive.png";
const SupremeGplast = "./images/SupremeGplastWhite.png";

// const homeSlides = [
//   {
//     image: Banner1,
//     title: "India's 1st Next-Gen Damp Proof Wall Care Products",
//     description:
//       "Revolutionizing construction with innovative waterproof solutions",
//   },
//   {
//     image: DallasBanner,
//     title: "Scientific Excellence",
//     description: "Backed by advanced research and cutting-edge technology",
//   },
//   {
//     image: ceramikhaBanner,
//     title: "Trusted by Thousands",
//     description: "Over 15,000 successful projects across South India",
//   },
// ];


const homeSlides = [
  {
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    title: "India's 1st Next-Gen Damp Proof Wall Care Products",
    description:
      "Revolutionizing construction with innovative waterproof solutions",
  },
  {
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    title: "Scientific Excellence",
    description: "Backed by advanced research and cutting-edge technology",
  },
  {
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg",
    title: "Trusted by Thousands",
    description: "Over 15,000 successful projects across South India",
  },
];

const features = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description:
      "Lifetime guaranteed products developed through advanced research",
  },
  {
    icon: Star,
    title: "Superior Technology",
    description:
      "Effective protection against dampness, mold, and chemical damage",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Direct factory-to-customer pricing with personalized solutions",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white via- -50 to-gray-100 min-h-screen">
      <Slider slides={homeSlides} effect="fade" />

      <div className="container mx-auto px-6 py-20 ">
        <AnimatedSection>
          <div className="w-4/5 mx-auto">
            <div className="marquee-container pl-6 mb-6">
              <p className="marquee text-lg sm:text-xl md:text-2xl text-blue-500 font-bold">
                Recognized as India's only manufacturer of Next-Gen buildings
                that meet international standards
              </p>
            </div>

            <div className="pl-6">
              <p className="text-base sm:text-lg md:text-xl text-center font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
                DALLAS, an international waterproof building product, is set
                apart not just by endorsements from doctors or engineers—it's a
                scientifically made scientist product
              </p>
            </div>
          </div>
        </AnimatedSection>
        <HomeProducts />
      </div>
    </div>
  );
};

export default Home;
