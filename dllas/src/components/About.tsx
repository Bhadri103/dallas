import React, { useEffect, ReactNode } from "react";
import {
  Users,
  Award,
  Eye,
  Target,
  Heart,
  Star,
  Building2,
  Leaf,
  Zap,
} from "lucide-react";
import mageshProfile from '../images/magesh-profile.jpeg'
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

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const isVisible =
          rect.top <= windowHeight * 0.85 && rect.bottom >= windowHeight * 0.1;
        el.classList.toggle("visible", isVisible);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Magesh Matha PhD",
      position: "Research & Development Director",
      image:
        mageshProfile,
    },
    {
      name: "Dr. Shankaran Matha PhD",
      position: "Chief Scientific Officer",
      image:
        "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    },
    {
      name: "Mr. Shobana BE",
      position: "Engineering Manager",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    },
    {
      name: "Mr. N. Raju Nanja",
      position: "Operations Head",
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    },
    {
      name: "Mr. ArulKumar BE",
      position: "Technical Manager",
      image:
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    },
    {
      name: "Gokul Devaraj",
      position: "Business Development",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-950">
              About <span className="text-[#075eb3]"> Dallas Wallcare</span>
            </h2>
            <p className="text-base text-slate-600">
              The Legacy Behind Dallas Wallcare: A Story of Grit and Growth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-tl-2xl opacity-60"></div>
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Historical Mettupalayam Market"
                  className="w-full h-80 object-cover rounded-xl shadow-lg relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#075eb3] rounded-br-2xl opacity-15"></div>
              </div>
            </div>

            <div
              className="animate-on-scroll"
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="text-slate-700 mb-5 leading-relaxed text-base">
                Long before Coimbatore—one of India's foremost industrial
                hubs—emerged as a center for construction-oriented
                manufacturing, the roots of Dallas Wallcare were quietly taking
                shape. The story traces back to the late 1960s and 1970s in
                Mettupalayam, a historically rich town near Coimbatore.
              </p>

              <p className="text-slate-700 mb-5 leading-relaxed text-base">
                It was here that a determined individual, with no formal
                education or support system, began his journey by trading
                vegetables in the local market. This remarkable man made the
                bold transition from agriculture to bulk trading, gradually
                earning a reputation for integrity, courage, and unwavering hard
                work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <p className="text-slate-700 mb-5 leading-relaxed text-base">
                Fueled by deep faith, sincerity, and a tireless spirit, he
                overcame every challenge—despite lacking financial resources,
                academic credentials, or powerful connections. He stood strong,
                like a rock amidst a raging sea.
              </p>

              <p className="text-slate-700 mb-5 leading-relaxed text-base">
                What started as a modest trading venture eventually became the
                foundation of KKM—an identity forged through resilience,
                principles, and perseverance. Today, that legacy has grown into
                a cutting-edge research and development center, driving
                innovation in the construction materials industry.
              </p>

              <div className="bg-gradient-to-r from-[#075eb3] to-[#0b84d8] p-6 rounded-xl text-white shadow-lg">
                <p className="text-base font-medium">
                  The same indomitable spirit that empowered{" "}
                  <strong>K.K. Mathan, the Legend</strong>, now propels the
                  growth of Dallas Wallcare, inspiring advancements in
                  manufacturing and modern construction technologies.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="K.K. Mathan Legacy"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082f5f]/70 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">K.K. Mathan</h3>
                  <p className="text-base opacity-90">The Visionary Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-slate-950">
            Our Vision & Mission
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex h-full">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-7 shadow-md flex flex-col transition-transform transform hover:-translate-y-1 w-full">
                  <Eye className="w-10 h-10 text-[#075eb3] mb-5" />
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We aim to be the foremost leader in India's construction
                    materials sector by upholding a relentless dedication to
                    quality, sustainability, and ground-breaking innovation. Our
                    goal is to equip builders and contractors with superior
                    technologies that set new industry standards, ensuring every
                    project achieves exceptional performance and enduring
                    durability.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex h-full">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 p-7 shadow-md flex flex-col transition-transform transform hover:-translate-y-1 w-full">
                  <Target className="w-10 h-10 text-[#075eb3] mb-5" />
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At DALLAS WALLCARE, our mission is to pioneer
                    next-generation construction solutions that protect against
                    dampness, mold, chemical exposure, and environmental stress.
                    In a market flooded with unverified claims, we stand apart
                    through innovation, scientific research, and expert
                    manufacturing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Builders across India are in search of a lifetime-guaranteed
                    solution—and <span className="text-[#075eb3]">Dallas</span>{" "}
                    delivers with an advanced formulation that ensures
                    exceptional durability and long-term structural protection.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="py-14 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-950 mb-10 relative z-10">
                Our <span className="text-[#075eb3]">Expertise</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch relative z-10">
              {/* Left Text Content */}
              <AnimatedSection>
                <div className="h-full space-y-6 bg-white rounded-xl shadow-lg p-8 flex flex-col">
                  <p className="text-base text-slate-700 leading-relaxed">
                    Our manufacturing facility sets the gold standard for
                    quality and innovation. From “high-purity imported minerals”
                    to “proprietary binders,” every component is selected for
                    excellence.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">
                    With McGlasgo's scientific backing, our labs ensure
                    “rigorous multi-phase testing,” certifying “unmatched
                    reliability” and “high performance” in every wall care
                    product.
                  </p>
                  <div className="mt-6 border-t pt-6 flex-grow flex items-end">
                    <p className="font-semibold text-[#075eb3]">
                      “Built on science.” “Driven by innovation.” “Trusted
                      across India.”
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Highlight Card */}
              <AnimatedSection delay={0.3}>
                <div className="h-full bg-gradient-to-br from-[#075eb3] via-[#0b74c8] to-[#0a3f88] rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-white/15 text-white p-3 rounded-lg shadow-md">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-white drop-shadow-md">
                      Innovation & Research
                    </h4>
                  </div>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm flex-grow">
                    Through McGlasgo's research center, our experts refine
                    formulas biannually—keeping Dallas Wallcare products on the
                    cutting edge of global construction technology. This ongoing
                    innovation ensures superior performance, durability, and
                    industry-leading quality for every project we support.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </section>
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-950">
              Our <span className="text-[#075eb3]">Team </span>
            </h2>
            <p className="text-base text-slate-600">
              Leadership That Drives Innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-slate-950">
                    {member.name}
                  </h3>
                  <p className="text-[#075eb3] font-medium mb-3">
                    {member.position}
                  </p>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">Leadership Team</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 p-8 shadow-sm">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-slate-950">Scientific Backing</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-slate-700 text-center leading-relaxed">
                Backed by world-renowned scientists and skilled professionals
                from <strong>McGlasgo Research Centre</strong>, we bring a
                strong scientific foundation to every product and process we
                develop. Our commitment to research and innovation ensures that
                Dallas Wallcare remains at the forefront of construction
                technology advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-950">
              Our <span className="text-[#075eb3]">Values </span>
            </h2>
            <p className="text-base text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition-all duration-300">
              <Target className="w-10 h-10 text-[#075eb3] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries in construction technology and
                materials science.
              </p>
            </div>
            <div
              className="animate-on-scroll bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: "0.1s" }}
            >
              <Heart className="w-10 h-10 text-[#075eb3] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Built on the foundation of honesty, transparency, and ethical
                business practices.
              </p>
            </div>

            <div
              className="animate-on-scroll bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: "0.2s" }}
            >
              <Star className="w-10 h-10 text-[#075eb3] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering superior quality in every product and
                service we offer.
              </p>
            </div>

            <div
              className="animate-on-scroll bg-white p-6 rounded-xl border border-blue-100 shadow-sm text-center hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: "0.3s" }}
            >
              <Building2 className="w-10 h-10 text-[#075eb3] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Legacy</h3>
              <p className="text-gray-600">
                Honoring our founder's vision while building for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-950 mb-10 relative z-10">
          Built for a <span className="text-[#075eb3]">Better Tomorrow</span>
        </h2>{" "}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex h-full">
                <div className="bg-white rounded-xl border border-blue-100 shadow-md p-8 flex flex-col">
                  <Leaf className="w-10 h-10 text-[#075eb3] mb-6" />
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">
                    Commitment to Sustainability
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Environmental responsibility is at the core of our
                    operations. We adopt eco-conscious manufacturing methods and
                    energy-saving technologies that minimize our ecological
                    footprint without compromising product quality. Through
                    comprehensive life cycle assessments, we continuously align
                    our practices with our values of sustainability and
                    innovation.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex h-full">
                <div className="bg-white rounded-xl border border-blue-100 shadow-md p-8 flex flex-col">
                  <Users className="w-10 h-10 text-[#075eb3] mb-6" />
                  <h3 className="text-xl font-semibold text-slate-950 mb-4">
                    Customer-Centric Approach
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Customer satisfaction is paramount at Dallas Wallcare.
                    Beyond delivering superior products, we provide a lifetime
                    guarantee on our waterproof wall plaster, reflecting our
                    confidence in its durability and consistent performance over
                    time.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our commitment extends beyond product delivery. We offer
                    complimentary post-application support, with a dedicated
                    team monitoring completed projects and providing expert
                    technical assistance—ensuring builders and homeowners enjoy
                    peace of mind.
                  </p>
                  <div className="flex-grow" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
