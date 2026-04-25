import React, { ReactNode } from "react";
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  Award,
  Factory,
  Leaf,
  FlaskConical,
  Target,
  Eye,
  Zap,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import CompletedProjects from "../components/CompletedProjects";
import HomeSlider from "./HomeSlider";
import CustomerReviews from "../components/CustomerReviews";
import Slider from "../components/Slider";
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => (
  <div
    className={`animate-fade-in ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);
const features = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description:
      "Lifetime guaranteed products developed through advanced research and rigorous testing",
  },
  {
    icon: Star,
    title: "Superior Waterproofing Technology",
    description:
      "Effective protection against dampness, mold, microbial growth, and chemical damage",
  },
  {
    icon: Users,
    title: "Direct Factory-to-Customer",
    description:
      "Eliminates intermediaries, providing competitive pricing and consistent quality",
  },
  {
    icon: Award,
    title: "International Standards",
    description:
      "India's only manufacturer of Next-Gen buildings that meet international standards",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description:
      "World-class facilities with automated quality controls and proprietary polymer development",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Production",
    description:
      "Sustainable materials and energy-efficient processes that reduce environmental impact",
  },
];

const whyChooseReasons = [
  "Direct Factory-to-Customer Pricing",
  "Scientifically Engineered & Lifetime Guaranteed",
  "Superior Waterproofing Technology",
  "Cost-Effective & High Performance",
  "Continuous Innovation & Leadership",
  "Highly Equipped Manufacturing & Research Facilities",
  "Customizable Solutions",
  "Eco-Friendly Production",
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeSlider />

      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
      {/* <CompletedProjects /> */}
      <CustomerReviews />
 <section className="py-20 bg-gray-100 text-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Why Choose <span className="text-red-600"> Dallas </span> Ready
              Plast?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {whyChooseReasons.map((reason, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
                <div className="flex h-full items-start gap-4 bg-white border border-gray-300 rounded-xl p-5 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-2 text-red-700 rounded-full shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium leading-relaxed tracking-wide">
                    {reason}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>{" "}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-yellow-400 opacity-10 rounded-full blur-3xl z-0" />
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why <span className="text-red-600">Dallas Wallcare</span> Stands
            Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
