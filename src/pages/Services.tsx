import React from "react";
import {
  MapPin,
  Phone,
  Users,
  Award,
  Shield,
  Wrench,
  Building,
  Heart,
  UserPlus,
  CheckCircle,
  Star,
  Target,
  Zap,
} from "lucide-react";
const serviceSlides = [
  {
    image:
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    title: "Professional Installation",
    description: "Expert application services for all our products",
  },
  {
    image:
      "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    title: "Technical Support",
    description: "Dedicated assistance throughout your project",
  },
  {
    image:
      "https://images.pexels.com/photos/7218013/pexels-photo-7218013.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    title: "Quality Assurance",
    description: "Rigorous testing and monitoring for optimal results",
  },
];
const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-r from-red-900 to-red-700">
      {slides.map(
        (
          slide: {
            image: any;
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
            description:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
          },
          index: React.Key | null | undefined
        ) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        )
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map(
          (
            _: any,
            index:
              | string
              | number
              | bigint
              | ((prevState: number) => number)
              | null
              | undefined
          ) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Slider slides={serviceSlides} /> */}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#E63946]">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover our cutting-edge facilities, innovative processes, and
            top-quality products.
          </p>
        </div>
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-600">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">
                Factory Services
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceItem
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Factory"
                description="Tour our state-of-the-art manufacturing facility near Coimbatore"
                highlight={undefined}
              />
              <ServiceItem
                icon={<Building className="w-6 h-6" />}
                title="Buy Products"
                description="Direct factory-to-customer purchasing"
                highlight={undefined}
              />
              <ServiceItem
                icon={<Wrench className="w-6 h-6" />}
                title="Get Service"
                description="Professional technical support and consultation"
                highlight={undefined}
              />
            </div>
          </div>
        </div>

        {/* Technical Support Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-600">
            <div className="flex items-center mb-6">
              <Wrench className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">
                Technical Support
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceItem
                icon={<Phone className="w-6 h-6" />}
                title="Free On-Site Support"
                description="Professional guidance at construction sites"
                highlight="FREE"
              />
              <ServiceItem
                icon={<Users className="w-6 h-6" />}
                title="Labor Service"
                description="Skilled application assistance"
                highlight={undefined}
              />
              <ServiceItem
                icon={<Award className="w-6 h-6" />}
                title="Engineer Consultation"
                description="Scientific and practical guidance at every stage"
                highlight={undefined}
              />
              <ServiceItem
                icon={<Building className="w-6 h-6" />}
                title="Custom Solutions"
                description="Tailored solutions for specific project requirements"
                highlight={undefined}
              />
            </div>
          </div>
        </div>

        {/* After-Sales Support Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-600">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">
                After-Sales Support
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceItem
                icon={<Shield className="w-6 h-6" />}
                title="Lifetime Guarantee"
                description="On waterproof wall plaster products"
                highlight="LIFETIME"
              />
              <ServiceItem
                icon={<Award className="w-6 h-6" />}
                title="Project Monitoring"
                description="Dedicated team tracking completed projects"
                highlight={undefined}
              />
              <ServiceItem
                icon={<Phone className="w-6 h-6" />}
                title="Technical Assistance"
                description="Expert support for optimal performance"
                highlight={undefined}
              />
              <ServiceItem
                icon={<Wrench className="w-6 h-6" />}
                title="Maintenance-Free Solutions"
                description="Products designed for long-term reliability"
                highlight={undefined}
              />
            </div>
          </div>
        </div>

        {/* Dealership Opportunities Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold">Dealership Opportunities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceItem
                icon={<Heart className="w-6 h-6" />}
                title="Join Dealership"
                description="Partner with Dallas Wallcare for business opportunities"
                isDark={true}
                highlight={undefined}
              />
              <ServiceItem
                icon={<Award className="w-6 h-6" />}
                title="Training Programs"
                description="Comprehensive product and application training"
                isDark={true}
                highlight={undefined}
              />
              <ServiceItem
                icon={<Building className="w-6 h-6" />}
                title="Marketing Support"
                description="Brand promotion and technical literature"
                isDark={true}
                highlight={undefined}
              />
              <ServiceItem
                icon={<MapPin className="w-6 h-6" />}
                title="Territory Rights"
                description="Exclusive dealership territories available"
                isDark={true}
                highlight={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({
  icon,
  title,
  description,
  highlight,
  isDark = false,
}) => {
  return (
    <div
      className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
        isDark
          ? "bg-white bg-opacity-10 hover:bg-opacity-20"
          : "bg-gray-50 hover:bg-gray-100 hover:shadow-lg"
      }`}
    >
      {highlight && (
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
            highlight === "FREE"
              ? "bg-green-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {highlight}
        </div>
      )}
      <div
        className={`flex items-center mb-3 ${
          isDark ? "text-white" : "text-red-600"
        }`}
      >
        {icon}
        <h4
          className={`ml-3 font-semibold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h4>
      </div>
      <p
        className={`text-sm leading-relaxed ${
          isDark ? "text-gray-200" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Services;
