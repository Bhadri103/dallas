import React from "react";
import {
  Award,
  Building,
  HeartHandshake,
  MapPin,
  Phone,
  Shield,
  Users,
  Wrench,
} from "lucide-react";
import serviceBanner from "../images/Banner.jpeg";
import PageBanner from "../components/PageBanner";

const serviceSections = [
  {
    title: "Factory Services",
    icon: Building,
    description: "Direct product access and factory-backed support.",
    items: [
      {
        icon: MapPin,
        title: "Visit Factory",
        description: "Tour our state-of-the-art manufacturing facility near Coimbatore.",
      },
      {
        icon: Building,
        title: "Buy Products",
        description: "Direct factory-to-customer purchasing.",
      },
      {
        icon: Wrench,
        title: "Get Service",
        description: "Professional technical support and consultation.",
      },
    ],
  },
  {
    title: "Technical Support",
    icon: Wrench,
    description: "On-site guidance for better application and performance.",
    items: [
      {
        icon: Phone,
        title: "Free On-Site Support",
        description: "Professional guidance at construction sites.",
        highlight: "FREE",
      },
      {
        icon: Users,
        title: "Labor Service",
        description: "Skilled application assistance.",
      },
      {
        icon: Award,
        title: "Engineer Consultation",
        description: "Scientific and practical guidance at every stage.",
      },
      {
        icon: Building,
        title: "Custom Solutions",
        description: "Tailored solutions for specific project requirements.",
      },
    ],
  },
  {
    title: "After-Sales Support",
    icon: Shield,
    description: "Support that continues after product delivery.",
    items: [
      {
        icon: Shield,
        title: "Lifetime Guarantee",
        description: "On waterproof wall plaster products.",
        highlight: "LIFETIME",
      },
      {
        icon: Award,
        title: "Project Monitoring",
        description: "Dedicated team tracking completed projects.",
      },
      {
        icon: Phone,
        title: "Technical Assistance",
        description: "Expert support for optimal performance.",
      },
      {
        icon: Wrench,
        title: "Maintenance-Free Solutions",
        description: "Products designed for long-term reliability.",
      },
    ],
  },
  {
    title: "Dealership Opportunities",
    icon: HeartHandshake,
    description: "Partner with Dallas Wallcare for regional growth.",
    items: [
      {
        icon: HeartHandshake,
        title: "Join Dealership",
        description: "Partner with Dallas Wallcare for business opportunities.",
      },
      {
        icon: Award,
        title: "Training Programs",
        description: "Comprehensive product and application training.",
      },
      {
        icon: Building,
        title: "Marketing Support",
        description: "Brand promotion and technical literature.",
      },
      {
        icon: MapPin,
        title: "Territory Rights",
        description: "Exclusive dealership territories available.",
      },
    ],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        eyebrow="SERVICES"
        title="Factory Support, Technical Guidance, and Dealer Partnership"
        description="Discover our facilities, professional support, and service programs built around high-performance Dallas Wallcare products."
        image={serviceBanner}
        imageAlt="Dallas Wallcare service products"
      />

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10">
        {serviceSections.map((section) => {
          const SectionIcon = section.icon;
          return (
            <article
              key={section.title}
              className="scroll-reveal rounded-xl border border-blue-100 bg-white p-6 shadow-[0_14px_40px_rgba(7,94,179,0.08)]"
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#075eb3]">
                    <SectionIcon size={26} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {section.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="scroll-reveal rounded-xl border border-slate-100 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                    >
                      {item.highlight && (
                        <span className="mb-3 inline-flex rounded-md bg-[#075eb3] px-3 py-1 text-xs font-semibold text-white">
                          {item.highlight}
                        </span>
                      )}
                      <div className="mb-3 flex items-center gap-3 text-[#075eb3]">
                        <ItemIcon size={22} />
                        <h3 className="text-base font-semibold text-slate-950">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
