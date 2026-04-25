import React, { useState, useEffect } from "react";
import {
  Star, // For star ratings
  Users, // For completed projects/clients
  Award, // For guarantee/success
  Zap, // For highlights/energy
  ChevronRight, // For navigation dots
  ChevronLeft, // For navigation dots
  Home, // Residential
  Building, // Commercial
  Factory, // Industrial
  DollarSign, // Cost-Effective
  Briefcase, // Professional support
  BadgeCheck, // Quality & Durability
  Sparkles, // Maintenance-Free
  PlayCircle, // Video thumbnail play button
  MapPin, // Location
  CalendarDays, // Year
  MessageCircleQuestion, // For the "Before" state (issue)
  CheckCircle, // For the "After" state (resolution)
} from 'lucide-react'; // Import necessary icons

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        if (el instanceof Element) {
          const rect = el.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

          if (rect.top <= windowHeight * 0.85) { // Adjusted trigger point slightly
            el.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredTestimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Project Manager",
      company: "Prestige Group",
      location: "Bangalore, Karnataka",
      project: "Commercial Complex Waterproofing",
      rating: 5,
      testimonial: "Dallas Wallcare's lifetime waterproof guarantee gave us the confidence we needed. After 3 years, not a single leak in our 50,000 sq ft complex. Their technical team's expertise and ongoing support have been exceptional.",
      projectType: "Commercial",
      yearCompleted: "2021",
      avatar: "RK",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Priya Nair",
      title: "Homeowner",
      company: "Residential Client",
      location: "Kochi, Kerala",
      project: "Villa Basement Waterproofing",
      rating: 5,
      testimonial: "We were struggling with basement seepage for years. Dallas Wallcare not only solved the problem permanently but also provided cost-effective solutions that fit our budget. Zero maintenance required since installation!",
      projectType: "Residential",
      yearCompleted: "2022",
      avatar: "PN",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      name: "Dr. Suresh Menon",
      title: "Hospital Administrator",
      company: "Apollo Hospitals",
      location: "Chennai, Tamil Nadu",
      project: "Hospital Roof & Wall Waterproofing",
      rating: 5,
      testimonial: "In healthcare, we cannot afford any water damage risks. Dallas Wallcare's professional approach, quality materials, and maintenance-free guarantee made them our preferred choice. Outstanding durability and performance.",
      projectType: "Healthcare",
      yearCompleted: "2020",
      avatar: "SM",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  const testimonialStats = [
    {
      icon: <Users size={32} className="text-red-500" />,
      number: "15,000+",
      label: "Completed Projects",
      description: "Successfully delivered across South India"
    },
    {
      icon: <Star size={32} className="text-yellow-500" />,
      number: "4.9/5",
      label: "Client Satisfaction",
      description: "Average rating from our customers"
    },
    {
      icon: <Award size={32} className="text-green-500" />,
      number: "100%",
      label: "Guarantee Success",
      description: "Lifetime warranty claims honored"
    },
    {
      icon: <Zap size={32} className="text-blue-500" />, // Using Zap for "Repeat Clients" to signify energy/growth
      number: "85%",
      label: "Repeat Clients",
      description: "Customers who return for new projects"
    }
  ];

  const testimonialCategories = [
    {
      icon: <Building size={48} />,
      title: "Commercial Projects",
      count: "8,500+",
      testimonials: [
        {
          client: "Tech Mahindra",
          project: "Office Complex - Hyderabad",
          feedback: "Exceptional waterproofing solution for our 200,000 sq ft facility. Professional execution and ongoing technical support.",
          rating: 5
        },
        {
          client: "Infosys Limited",
          project: "Data Center - Mysore",
          feedback: "Critical infrastructure protected with Dallas Wallcare's advanced solutions. Zero downtime due to water issues.",
          rating: 5
        },
        {
          client: "Brigade Group",
          project: "Shopping Mall - Bangalore",
          feedback: "Cost-effective and durable waterproofing across multiple levels. Excellent project management and delivery.",
          rating: 5
        }
      ]
    },
    {
      icon: <Home size={48} />,
      title: "Residential Projects",
      count: "5,200+",
      testimonials: [
        {
          client: "Arun & Family",
          project: "Independent Villa - Trivandrum",
          feedback: "Our terrace leakage problem is completely solved. Three monsoons later, still perfectly dry. Great value for money!",
          rating: 5
        },
        {
          client: "Lakshmi Apartments",
          project: "Residential Complex - Coimbatore",
          feedback: "Comprehensive waterproofing for 48 apartments. Professional team, quality materials, and excellent after-service support.",
          rating: 5
        },
        {
          client: "Villa Owners Association",
          project: "Gated Community - Kochi",
          feedback: "Maintenance-free results exactly as promised. The lifetime guarantee gives us complete peace of mind.",
          rating: 5
        }
      ]
    },
    {
      icon: <Factory size={48} />,
      title: "Industrial Projects",
      count: "1,300+",
      testimonials: [
        {
          client: "Tata Steel",
          project: "Manufacturing Unit - Salem",
          feedback: "Heavy-duty waterproofing solutions that withstand industrial conditions. Reliable performance and excellent technical expertise.",
          rating: 5
        },
        {
          client: "Ashok Leyland",
          project: "Assembly Plant - Chennai",
          feedback: "Professional handling of complex industrial waterproofing requirements. Quality and durability exceed expectations.",
          rating: 5
        },
        {
          client: "L&T Construction",
          project: "Infrastructure Project - Bangalore",
          feedback: "Dallas Wallcare delivered on time with superior quality. Their technical support throughout the project was outstanding.",
          rating: 5
        }
      ]
    }
  ];

  const keyThemes = [
    {
      icon: <Award size={28} />,
      title: "Lifetime Waterproof Guarantee Performance",
      description: "Our comprehensive warranty backed by proven results",
      color: "text-blue-600"
    },
    {
      icon: <DollarSign size={28} />,
      title: "Cost-Effective Solutions",
      description: "Maximum value with competitive pricing",
      color: "text-green-600"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Professional Technical Support",
      description: "Expert guidance from consultation to completion",
      color: "text-purple-600"
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Quality & Durability Satisfaction",
      description: "Premium materials and superior craftsmanship",
      color: "text-red-600"
    },
    {
      icon: <Sparkles size={28} />,
      title: "Maintenance-Free Results",
      description: "Long-lasting solutions requiring minimal upkeep",
      color: "text-orange-600"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => ( // Always render 5 stars
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-red-600 mb-2 animate-on-scroll">CLIENT VOICE</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-on-scroll">
            Hear From Our <span className="text-red-600">Satisfied Clients</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 animate-on-scroll">
            Discover why over 15,000 clients across South India trust Dallas Wallcare for their waterproofing needs.
            From residential homes to industrial complexes, our commitment to excellence speaks through every project.
          </p>
          <div className="flex justify-center animate-on-scroll">
            <div className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-red-700 transition-colors duration-300">
              <Zap size={24} className="inline-block mr-3" />
              15,000+ Projects Completed
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Testimonials Carousel */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Are <span className="text-red-600">Saying</span>
          </h2>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* Testimonial Content */}
              <div className="flex-1">
                <blockquote className="text-3xl text-gray-800 leading-relaxed mb-8 font-medium italic relative">
                  <span className="absolute -top-6 -left-6 text-7xl text-red-200 font-serif opacity-75">“</span>
                  {featuredTestimonials[activeTestimonial].testimonial}
                  <span className="absolute -bottom-10 -right-6 text-7xl text-red-200 font-serif opacity-75">”</span>
                </blockquote>

                <StarRating rating={featuredTestimonials[activeTestimonial].rating} />

                <div className="mt-8 space-y-2">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {featuredTestimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-700 text-lg">
                    {featuredTestimonials[activeTestimonial].title} at {featuredTestimonials[activeTestimonial].company}
                  </p>
                  <div className="flex items-center text-gray-600 text-base space-x-4">
                    <span className="flex items-center"><MapPin size={18} className="mr-1 text-red-500" /> {featuredTestimonials[activeTestimonial].location}</span>
                    <span className="flex items-center"><CalendarDays size={18} className="mr-1 text-red-500" /> {featuredTestimonials[activeTestimonial].yearCompleted}</span>
                  </div>
                </div>
              </div>

              {/* Client Avatar & Project Info */}
              <div className="flex-shrink-0 text-center lg:w-80">
                <div className={`w-40 h-40 ${featuredTestimonials[activeTestimonial].bgColor} rounded-full flex items-center justify-center mb-8 mx-auto border-4 border-white shadow-lg`}>
                  <span className={`text-5xl font-bold ${featuredTestimonials[activeTestimonial].textColor}`}>
                    {featuredTestimonials[activeTestimonial].avatar}
                  </span>
                </div>
                <div className="bg-gray-100 p-8 rounded-xl shadow-inner border border-gray-200">
                  <h5 className="font-semibold text-gray-800 text-xl mb-3">Project Overview</h5>
                  <p className="text-lg text-gray-700 mb-3 leading-snug">{featuredTestimonials[activeTestimonial].project}</p>
                  <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                    {featuredTestimonials[activeTestimonial].projectType}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors hidden lg:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % featuredTestimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors hidden lg:block"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>


            {/* Navigation Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-red-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Key Testimonial Themes */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Why Clients Choose <span className="text-red-600">Dallas Wallcare</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our client testimonials consistently highlight these key themes that set us apart in the waterproofing industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyThemes.map((theme, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`text-6xl mb-6 ${theme.color} group-hover:scale-110 transition-transform duration-300`}>{theme.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{theme.title}</h3>
                <p className="text-gray-700">{theme.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Categories */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Success Stories by <span className="text-red-600">Project Type</span>
          </h2>

          <div className="space-y-12">
            {testimonialCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-on-scroll bg-white rounded-3xl shadow-xl overflow-hidden group"
                style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-6xl mr-6 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold">{category.title}</h3>
                      <p className="text-red-100 text-lg">{category.count} projects completed</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {category.testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gray-50"
                      >
                        <StarRating rating={testimonial.rating} />
                        <p className="text-gray-700 mb-4 mt-4 italic text-lg leading-relaxed">"{testimonial.feedback}"</p>
                        <div className="border-t border-gray-200 pt-4">
                          <h5 className="font-semibold text-gray-800 text-lg">{testimonial.client}</h5>
                          <p className="text-base text-gray-600">{testimonial.project}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Watch Our <span className="text-red-600">Client Stories</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear directly from our satisfied clients about their experience with Dallas Wallcare's waterproofing solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Success Story",
                client: "Mr. & Mrs. Sharma",
                location: "Kochi, Kerala",
                duration: "2:45",
                thumbnailIcon: <Home size={64} className="text-white opacity-70" />
              },
              {
                title: "Commercial Project Review",
                client: "Tech Park Management",
                location: "Bangalore, Karnataka",
                duration: "3:20",
                thumbnailIcon: <Building size={64} className="text-white opacity-70" />
              },
              {
                title: "Industrial Application",
                client: "Manufacturing Unit",
                location: "Coimbatore, Tamil Nadu",
                duration: "4:15",
                thumbnailIcon: <Factory size={64} className="text-white opacity-70" />
              }
            ].map((video, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gray-800 h-48 flex items-center justify-center">
                  {video.thumbnailIcon}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm font-mono">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-5 transition-colors shadow-lg">
                      <PlayCircle size={36} className="text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-700 mb-1">{video.client}</p>
                  <p className="text-sm text-gray-600 flex items-center"><MapPin size={16} className="mr-1 text-red-500" /> {video.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Before & After <span className="text-red-600">Transformations</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Residential Basement Waterproofing",
                location: "Villa in Trivandrum",
                beforeText: "Severe water seepage and dampness, leading to mold growth and structural concerns.",
                afterText: "Completely dry, healthy, and protected living space, ensuring long-term structural integrity.",
                year: "2023",
                beforeIcon: <MessageCircleQuestion size={48} className="text-red-500" />,
                afterIcon: <CheckCircle size={48} className="text-green-500" />
              },
              {
                title: "Commercial Roof Waterproofing",
                location: "Office Building in Chennai",
                beforeText: "Multiple leak points during monsoon, causing interior damage and operational disruptions.",
                afterText: "Zero leakage for 2+ years, providing a safe and uninterrupted work environment.",
                year: "2022",
                beforeIcon: <MessageCircleQuestion size={48} className="text-red-500" />,
                afterIcon: <CheckCircle size={48} className="text-green-500" />
              }
            ].map((showcase, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-3xl shadow-xl overflow-hidden"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{showcase.title}</h3>
                  <p className="text-gray-700 mb-6 flex items-center space-x-2">
                    <MapPin size={18} className="text-red-500" /><span>{showcase.location}</span>
                    <CalendarDays size={18} className="text-red-500 ml-4" /><span>{showcase.year}</span>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center bg-red-50 rounded-xl p-6 flex flex-col items-center justify-center border border-red-200">
                      <div className="text-5xl mb-3">{showcase.beforeIcon}</div>
                      <p className="text-red-600 font-bold text-lg mb-2">BEFORE</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{showcase.beforeText}</p>
                    </div>

                    <div className="text-center bg-green-50 rounded-xl p-6 flex flex-col items-center justify-center border border-green-200">
                      <div className="text-5xl mb-3">{showcase.afterIcon}</div>
                      <p className="text-green-600 font-bold text-lg mb-2">AFTER</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{showcase.afterText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-12 rounded-3xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
              Experience the Dallas Wallcare difference. Get your free consultation today and discover why
              thousands of clients trust us with their waterproofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-red-700 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg flex items-center justify-center">
                <CheckCircle size={24} className="mr-3" />
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-red-700 transition-colors text-lg flex items-center justify-center">
                <PlayCircle size={24} className="mr-3" />
                View Our Projects
              </button>
            </div>
          </div>
        </section>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother cubic-bezier transition */
          }

          .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `
      }} />
    </div>
  );
};

export default Testimonials;