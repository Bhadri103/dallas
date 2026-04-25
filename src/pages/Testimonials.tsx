import React, { useState, useEffect, ReactNode } from "react";
import {
  Star,
  Quote,
  Building,
  Factory,
  Heart, // For healthcare/medical - exists
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Clock,
  DollarSign,
  Wrench,
  CheckCircle,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";
import CustomerReviews from "../components/CustomerReviews";

// Interfaces for data structures
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  location: string;
  projectType: string;
  rating: number;
  image: string;
  testimonial: string;
  projectDetails: string;
  completedDate: string;
  tags: string[];
}

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  investment: string;
  area: string;
  timeline: string;
  year: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
}

interface KeyBenefit {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  stats: string;
}

interface ProjectStat {
  number: string;
  label: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Project Manager",
    company: "Kerala Construction Ltd.",
    location: "Kochi, Kerala",
    projectType: "Commercial Complex",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    testimonial:
      "Dallas Wallcare's waterproofing solution exceeded our expectations. Three years later, our commercial complex remains completely dry even during heavy monsoons. The lifetime guarantee gives us complete peace of mind.",
    projectDetails: "₹12 Lakh project, 15,000 sq ft coverage",
    completedDate: "2021",
    tags: ["Lifetime Guarantee", "Monsoon Tested", "Commercial"],
  },
  {
    id: 2,
    name: "Priya Menon",
    position: "Homeowner",
    company: "Residential Project",
    location: "Thiruvananthapuram, Kerala",
    projectType: "Villa Waterproofing",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    testimonial:
      "After trying multiple solutions for our leaking terrace, Dallas Wallcare finally provided a permanent fix. No maintenance required for 4 years now! Their technical team was incredibly professional and thorough.",
    projectDetails: "₹3.5 Lakh investment, 2,500 sq ft",
    completedDate: "2020",
    tags: ["Zero Maintenance", "Professional Service", "Residential"],
  },
  {
    id: 3,
    name: "Dr. Suresh Nair",
    position: "Director",
    company: "Nair Hospital Trust",
    location: "Coimbatore, Tamil Nadu",
    projectType: "Hospital Infrastructure",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    testimonial:
      "For a healthcare facility, waterproofing is critical. Dallas Wallcare delivered exceptional quality with zero disruption to our operations. The cost-effectiveness compared to traditional methods was remarkable.",
    projectDetails: "₹25 Lakh project, 35,000 sq ft",
    completedDate: "2022",
    tags: ["Healthcare", "Zero Disruption", "Cost-Effective"],
  },
  {
    id: 4,
    name: "Arjun Patel",
    position: "Facility Manager",
    company: "Tech Park Bangalore",
    location: "Bangalore, Karnataka",
    projectType: "IT Campus",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    testimonial:
      "The durability and quality of Dallas Wallcare's solutions are unmatched. Our IT campus has been leak-free for 5 years. Their scientific approach and quality control impressed our entire management team.",
    projectDetails: "₹45 Lakh project, 60,000 sq ft",
    completedDate: "2019",
    tags: ["Scientific Approach", "Quality Control", "IT Infrastructure"],
  },
  {
    id: 5,
    name: "Sister Mary Francis",
    position: "Administrator",
    company: "St. Joseph's Educational Trust",
    location: "Chennai, Tamil Nadu",
    projectType: "Educational Institution",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    testimonial:
      "Dallas Wallcare transformed our century-old school building. Their heritage-sensitive approach preserved our architecture while providing modern waterproofing. Students and staff are amazed by the transformation.",
    projectDetails: "₹8 Lakh restoration, 12,000 sq ft",
    completedDate: "2023",
    tags: ["Heritage Building", "Educational", "Transformation"],
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Heritage Hospital Restoration",
    location: "Kottayam, Kerala",
    challenge:
      "100-year-old heritage hospital facing severe water seepage affecting patient care and equipment safety",
    solution:
      "Custom waterproofing solution preserving heritage architecture while providing modern protection",
    results: [
      "Zero water seepage for 3+ years",
      "Preserved original architectural features",
      "50% cost saving vs traditional methods",
      "No disruption to hospital operations",
    ],
    investment: "₹18 Lakhs",
    area: "25,000 sq ft",
    timeline: "45 days",
    year: "2021",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Industrial Manufacturing Plant",
    location: "Hosur, Tamil Nadu",
    challenge:
      "Large manufacturing facility with complex roof structure experiencing water damage to expensive machinery",
    solution:
      "Advanced polymer-based waterproofing system with specialized equipment protection zones",
    results: [
      "Complete machinery protection achieved",
      "Production uptime increased by 15%",
      "Annual maintenance cost reduced by 70%",
      "Enhanced worker safety conditions",
    ],
    investment: "₹32 Lakhs",
    area: "45,000 sq ft",
    timeline: "60 days",
    year: "2022",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Luxury Residential Complex",
    location: "Kozhikode, Kerala",
    challenge:
      "Premium apartment complex with persistent terrace and bathroom leakage affecting multiple floors",
    solution:
      "Comprehensive waterproofing with aesthetic integration and minimal resident disruption",
    results: [
      "100% leak elimination across all units",
      "Enhanced property value by 12%",
      "Resident satisfaction score: 4.9/5",
      "Zero complaints for 2+ years",
    ],
    investment: "₹15 Lakhs",
    area: "20,000 sq ft",
    timeline: "30 days",
    year: "2022",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
  },
];

const keyBenefits: KeyBenefit[] = [
  {
    icon: Shield,
    title: "Lifetime Guarantee Performance",
    description:
      "Our solutions come with a comprehensive lifetime warranty, giving you complete peace of mind.",
    stats: "100% guarantee fulfillment rate",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description:
      "Average 40-60% cost savings compared to traditional waterproofing methods.",
    stats: "₹15+ Crores saved for clients",
  },
  {
    icon: Wrench,
    title: "Professional Technical Support",
    description:
      "Expert technical team with 24/7 support and regular maintenance guidance.",
    stats: "98% client satisfaction rate",
  },
  {
    icon: Award,
    title: "Quality & Durability Satisfaction",
    description:
      "ISO 9001:2015 certified processes ensuring consistent, superior quality results.",
    stats: "15,000+ successful projects",
  },
  {
    icon: Clock,
    title: "Maintenance-Free Results",
    description:
      "Once applied, our solutions require zero maintenance while providing lasting protection.",
    stats: "Average 15+ years maintenance-free",
  },
];

const projectStats: ProjectStat[] = [
  { number: "15,000+", label: "Completed Projects" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Years Experience" },
  { number: "3 States", label: "Service Coverage" },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        if (el instanceof Element) {
          const rect = el.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

          if (rect.top <= windowHeight * 0.75) {
            el.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  const renderStars = (rating: number): ReactNode[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client<span className="text-[#E63946]"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by over{" "}
            <span className="text-red-600 font-semibold">15,000 clients</span>,
            Dallas Wallcare delivers lasting waterproofing solutions for all
            buildings.
          </p>
        </div>

        <div className="text-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover"
                    />
                    <div className="absolute -top-2 -right-2 bg-red-600 rounded-full p-2">
                      <Quote size={16} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-red-600 font-medium mb-1">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                 
                </div>
                <div className="lg:w-2/3">
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].testimonial}"
                  </blockquote>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-red-600" />
                      <span className="text-gray-600">
                        {testimonials[currentTestimonial].location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building size={16} className="text-red-600" />
                      <span className="text-gray-600">
                        {testimonials[currentTestimonial].projectType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-red-600" />
                      <span className="text-gray-600">
                        {testimonials[currentTestimonial].projectDetails}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-red-600" />
                      <span className="text-gray-600">
                        Completed:{" "}
                        {testimonials[currentTestimonial].completedDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft size={24} className="text-red-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight size={24} className="text-red-600" />
            </button>
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section> */}
        <CustomerReviews />
        {/* <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Detailed Case Studies
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={caseStudies[currentCaseStudy].image}
                    alt={caseStudies[currentCaseStudy].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {caseStudies[currentCaseStudy].title}
                      </h3>
                      <p className="text-gray-600">
                        {caseStudies[currentCaseStudy].location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {caseStudies[currentCaseStudy].challenge}
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {caseStudies[currentCaseStudy].solution}
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-2">
                      Results:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {caseStudies[currentCaseStudy].results.map(
                        (result, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle size={14} className="text-green-500" />
                            {result}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-800">
                        Investment:
                      </span>
                      <p className="text-red-600 font-bold">
                        {caseStudies[currentCaseStudy].investment}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Area:</span>
                      <p className="text-gray-600">
                        {caseStudies[currentCaseStudy].area}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">
                        Timeline:
                      </span>
                      <p className="text-gray-600">
                        {caseStudies[currentCaseStudy].timeline}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Year:</span>
                      <p className="text-gray-600">
                        {caseStudies[currentCaseStudy].year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevCaseStudy}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft size={24} className="text-red-600" />
            </button>
            <button
              onClick={nextCaseStudy}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight size={24} className="text-red-600" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseStudy(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCaseStudy ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* Key Benefits Section */}
        <section className="mb-20 mt-6">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-center text-gray-800 relative z-10">
              Why Clients Prefer{" "}
              <span className="text-red-600">Dallas Wallcare</span>
            </h2>{" "}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon size={32} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                {/* <div className="text-red-600 font-bold text-lg">
                  {benefit.stats}
                </div> */}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free consultation and lifetime guarantee quote today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
              Call Now: +91-XXXXXXXXX
            </button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Testimonials;
