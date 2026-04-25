import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowDown, Sparkles, Zap, Shield, Award, Lock } from 'lucide-react';

const AttractiveHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      id: 1,
      backgroundImage: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "India's First Next-Gen",
      highlightWords: ["Damp Proof", "Wall Care Product"],
      subtitle: "Recognized as India's only manufacturer of next-generation buildings that meet international standards, we're setting new benchmarks in construction excellence.",
      gradient: "from-black/80 via-purple-900/60 to-black/70",
      accentColor: "text-yellow-400",
      icon: Award,
      primaryBtn: "Explore Products",
      secondaryBtn: "Contact Us"
    },
    {
      id: 2,
      backgroundImage: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Scientifically Engineered,",
      highlightWords: ["Not Just", "Endorsed"],
      subtitle: "DALLAS, our international waterproof building product, is set apart not just by endorsements from doctors or engineers—it's a scientifically crafted solution made by scientists.",
      gradient: "from-black/80 via-blue-900/60 to-black/70",
      accentColor: "text-cyan-400",
      icon: Sparkles,
      primaryBtn: "Our Science",
      secondaryBtn: "Learn More"
    },
    {
      id: 3,
      backgroundImage: "https://images.pexels.com/photos/3862154/pexels-photo-3862154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Revolutionizing Indian",
      highlightWords: ["Construction", "Excellence"],
      subtitle: "At Dallas Wall Care Pvt. Ltd., we aim to transform India's construction landscape with premium, science-backed solutions that enhance durability, strength, and longevity.",
      gradient: "from-black/80 via-green-900/60 to-black/70",
      accentColor: "text-emerald-400",
      icon: Zap,
      primaryBtn: "Our Solutions",
      secondaryBtn: "Get Quote"
    },
    {
      id: 4,
      backgroundImage: "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Next-Gen Protection for",
      highlightWords: ["Modern", "Structures"],
      subtitle: "Our mission is to pioneer cutting-edge solutions that guard against dampness, mold, chemical exposure, and environmental stress—backed by real research, not marketing fluff.",
      gradient: "from-black/80 via-orange-900/60 to-black/70",
      accentColor: "text-orange-400",
      icon: Shield,
      primaryBtn: "Protection Features",
      secondaryBtn: "Case Studies"
    },
    {
      id: 5,
      backgroundImage: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lifetime Guarantee,",
      highlightWords: ["Unmatched", "Durability"],
      subtitle: "Builders across India trust Dallas—a next-gen wall care product that provides lifetime-guaranteed protection through a scientific, advanced formulation.",
      gradient: "from-black/80 via-red-900/60 to-black/70",
      accentColor: "text-red-400",
      icon: Award,
      primaryBtn: "Our Guarantee",
      secondaryBtn: "Contact Us"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const IconComponent = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
            }`}
          >
            {/* Background Image with Parallax Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-20000 ease-out"
              style={{
                backgroundImage: `url("${slide.backgroundImage}")`,
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(${index === currentSlide ? 1.05 : 1.1})`
              }}
            >
              {/* Dynamic Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-1000`}>
                {/* Animated Geometric Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                  <div 
                    className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
                    style={{
                      top: `${20 + Math.sin(index) * 10}%`,
                      left: `${10 + Math.cos(index) * 15}%`,
                      animationDelay: `${index * 500}ms`
                    }}
                  />
                  <div 
                    className="absolute w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"
                    style={{
                      bottom: `${15 + Math.sin(index + 1) * 12}%`,
                      right: `${5 + Math.cos(index + 1) * 18}%`,
                      animationDelay: `${index * 700}ms`
                    }}
                  />
                  <div 
                    className="absolute w-48 h-48 bg-white/4 rounded-full blur-2xl animate-pulse"
                    style={{
                      top: `${60 + Math.sin(index + 2) * 8}%`,
                      right: `${25 + Math.cos(index + 2) * 12}%`,
                      animationDelay: `${index * 300}ms`
                    }}
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 800}ms`,
                        animationDuration: `${3 + Math.random() * 4}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  {/* Icon with Glow Effect */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 transform transition-all duration-1000 ${
                    index === currentSlide 
                      ? 'animate-bounce scale-100 opacity-100' 
                      : 'scale-75 opacity-0'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${slide.accentColor} drop-shadow-lg`} />
                  </div>

                  {/* Main Heading */}
                  <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight transform transition-all duration-1000 delay-200 ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}>
                    {slide.title}{' '}
                    {slide.highlightWords.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${slide.accentColor} animate-pulse inline-block transform transition-all duration-500`}
                        style={{
                          animationDelay: index === currentSlide ? `${wordIndex * 200 + 500}ms` : '0ms'
                        }}
                      >
                        {word}
                        {wordIndex < slide.highlightWords.length - 1 ? ' ' : ''}
                      </span>
                    ))}
                  </h1>

                  {/* Subtitle */}
                  <p className={`text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-400 ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.subtitle}
                  </p>

                  {/* Call to Action Buttons */}
                  <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-1000 delay-600 ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}>
                    <button className={`px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-semibold rounded-full hover:from-gray-100 hover:to-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${slide.accentColor.replace('text-', 'hover:shadow-')}/50`}>
                      {slide.primaryBtn}
                    </button>
                    
                    <button className={`px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300`}>
                      {slide.secondaryBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button
          onClick={prevSlide}
          className="ml-6 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button
          onClick={nextSlide}
          className="mr-6 p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center animate-bounce z-20">
        <span className="text-white text-sm mb-2 opacity-75">Scroll Down</span>
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-white mt-2 animate-pulse" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-linear shadow-lg"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Brand Badge */}
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <div className="text-white font-bold text-xl tracking-wider">
            DALLAS
            <div className="text-xs font-normal opacity-75">Wall Care Pvt. Ltd.</div>
          </div>
        </div>
      </div>

      {/* Side Stats */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-6 z-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-white">India's</div>
          <div className="text-xs text-gray-300">First Next-Gen</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-white">100%</div>
          <div className="text-xs text-gray-300">Scientific Formula</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-white">Lifetime</div>
          <div className="text-xs text-gray-300">Guarantee</div>
        </div>
      </div>
    </div>
  );
};

export default AttractiveHeroSlider;