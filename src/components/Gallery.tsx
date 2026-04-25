import React, { useState, useEffect } from "react";

const galleryImages = [
  // Residential Buildings
  {
    id: 1,
    src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern Residential Complex - Kochi, Kerala",
    category: "residential",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Luxury Villa Project - Thiruvananthapuram",
    category: "residential",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Apartment Complex - Bangalore, Karnataka",
    category: "residential",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "High-Rise Residential Tower - Chennai, Tamil Nadu",
    category: "residential",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Gated Community Project - Kozhikode, Kerala",
    category: "residential",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Traditional Home Waterproofing - Kannur",
    category: "residential",
  },

  // Commercial Complexes
  {
    id: 7,
    src: "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Corporate Office Complex - Mysore, Karnataka",
    category: "commercial",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Shopping Mall - Thiruvananthapuram",
    category: "commercial",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Business Center - Calicut, Kerala",
    category: "commercial",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Hotel Complex - Coimbatore, Tamil Nadu",
    category: "commercial",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Retail Complex - Hubli, Karnataka",
    category: "commercial",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Medical Center - Ernakulam, Kerala",
    category: "commercial",
  },

  // Industrial Structures
  {
    id: 13,
    src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Manufacturing Plant - Hosur, Tamil Nadu",
    category: "industrial",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Warehouse Complex - Mangalore, Karnataka",
    category: "industrial",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Industrial Facility - Alappuzha, Kerala",
    category: "industrial",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/162568/factory-machine-metal-machining-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Production Unit - Salem, Tamil Nadu",
    category: "industrial",
  },
  {
    id: 17,
    src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Storage Facility - Thrissur, Kerala",
    category: "industrial",
  },

  // Waterproofing Solutions
  {
    id: 18,
    src: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Roof Waterproofing Application - Kottayam",
    category: "waterproofing",
  },
  {
    id: 19,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Basement Waterproofing - Madurai, Tamil Nadu",
    category: "waterproofing",
  },
  {
    id: 20,
    src: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Terrace Waterproofing Solution - Udupi, Karnataka",
    category: "waterproofing",
  },
  {
    id: 21,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "External Wall Treatment - Palakkad, Kerala",
    category: "waterproofing",
  },
  {
    id: 22,
    src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Swimming Pool Waterproofing - Vellore, Tamil Nadu",
    category: "waterproofing",
  },
  {
    id: 23,
    src: "https://images.pexels.com/photos/6474480/pexels-photo-6474480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Foundation Waterproofing - Kollam, Kerala",
    category: "waterproofing",
  },

  // Renovation Projects
  {
    id: 24,
    src: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Heritage Building Restoration - Mysore Palace Area",
    category: "renovation",
  },
  {
    id: 25,
    src: "https://images.pexels.com/photos/6474480/pexels-photo-6474480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Apartment Complex Renovation - Tiruchirappalli",
    category: "renovation",
  },
  {
    id: 26,
    src: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Office Building Upgrade - Kochi Metro Area",
    category: "renovation",
  },
  {
    id: 27,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "School Building Renovation - Tirunelveli",
    category: "renovation",
  },
  {
    id: 28,
    src: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Hospital Renovation Project - Shimoga, Karnataka",
    category: "renovation",
  },
  {
    id: 29,
    src: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Residential Villa Restoration - Wayanad, Kerala",
    category: "renovation",
  },

  // Additional Featured Projects
  {
    id: 30,
    src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Premium Housing Project - Electronic City, Bangalore",
    category: "residential",
  },
  {
    id: 31,
    src: "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "IT Park Complex - Technopark, Thiruvananthapuram",
    category: "commercial",
  },
  {
    id: 32,
    src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Textile Mill - Tirupur, Tamil Nadu",
    category: "industrial",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle key press events for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") {
          setSelectedImage(null);
        } else if (e.key === "ArrowRight") {
          setSelectedImage((prev) =>
            prev !== null ? (prev + 1) % galleryImages.length : null
          );
        } else if (e.key === "ArrowLeft") {
          setSelectedImage((prev) =>
            prev !== null
              ? (prev - 1 + galleryImages.length) % galleryImages.length
              : null
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .gallery-item {
          position: relative;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        .section-title {
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .section-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #dc2626, #ef4444);
          border-radius: 2px;
        }
      `}</style>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-[#E63946]"> Gallery</span>
        </h2>
        <p className="text-xl text-gray-600">
          Backed by McGlasgo Research, Dallas completed over{" "}
          <strong className="text-red-600">15,000 projects</strong> across South
          India—including from Thiruvananthapuram to Kannur in Kerala, and
          throughout Karnataka and Tamil Nadu.{" "}
        </p>
      </div>

      <div className="text-center mb-16">
        <div className="p-8 mb-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">
                15,000+
              </div>
              <div className="text-gray-700 font-medium">
                Residential & Commercial Structures
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">
                Projects with Dallas Wallcare Name
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-lg font-bold text-red-600 mb-2">
                Coverage
              </div>
              <div className="text-gray-700 font-medium">
                Kerala, Karnataka & Tamil Nadu
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">
                  Lifetime Performance
                </div>
                <div className="text-sm text-gray-600">
                  Maintenance-Free Solutions
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">
                  Research-Driven
                </div>
                <div className="text-sm text-gray-600">
                  Approach to Every Project
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative z-10">
         Our Recent <span className="text-red-600">Projects</span>
          </h2>
        
        </div>

         
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
            filter === "all"
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white transform scale-105"
              : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200"
          }`}
        >
          All Projects ({galleryImages.length})
        </button>
        {[
          "residential",
          "commercial",
          "industrial",
          "waterproofing",
          "renovation",
        ].map((cat) => {
          const count = galleryImages.filter(
            (img) => img.category === cat
          ).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 shadow-md hover:shadow-lg ${
                filter === cat
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white transform scale-105"
                  : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item aspect-square "
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() =>
              setSelectedImage(
                galleryImages.findIndex((img) => img.id === image.id)
              )
            }
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-center p-6">
              <div className="text-white text-center">
                <span className="text-lg font-semibold block mb-1">
                  {image.alt}
                </span>
                <span className="text-sm opacity-90 capitalize">
                  {image.category} Project
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-400 transition-colors duration-200 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-red-400 transition-colors duration-200 z-10 bg-black/30 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() =>
              setSelectedImage((prev) =>
                prev !== null
                  ? (prev - 1 + galleryImages.length) % galleryImages.length
                  : null
              )
            }
          >
            ‹
          </button>

          <div className="text-center">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />

            <div className="mt-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {galleryImages[selectedImage].alt}
              </h3>
              <p className="text-sm text-gray-300 capitalize mb-2">
                {galleryImages[selectedImage].category} Project
              </p>
              <p className="text-sm text-gray-400">
                Image {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-red-400 transition-colors duration-200 z-10 bg-black/30 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() =>
              setSelectedImage((prev) =>
                prev !== null ? (prev + 1) % galleryImages.length : null
              )
            }
          >
            ›
          </button>
        </div>
      )}

     
    </div>
  );
};

export default Gallery;
