import React, { useState, useEffect } from "react";

const customerReviews = [
  {
    id: 1,
    customerName: "Rajesh Kumar",
    title: "Exceptional Waterproofing Service - Kochi Residential Complex",
    description:
      "Our 200-unit complex had severe leakage issues. Their waterproofing solution has been perfect for 2 years now. Highly recommended!",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    rating: 5,
    location: "Kochi, Kerala",
    projectType: "Residential Complex",
    reviewDate: "2024",
    serviceType: "Complete Waterproofing",
  },
  {
    id: 2,
    customerName: "Dr. Priya Menon",
    title: "Amazing Heritage Building Restoration Experience",
    description:
      "They preserved our family heritage property beautifully while solving all waterproofing issues. Professional team with great attention to detail.",
    videoId: "ScMzIvxBSi4", // Replace with actual YouTube video IDs
    rating: 5,
    location: "Mysore, Karnataka",
    projectType: "Heritage Building",
    reviewDate: "2023",
    serviceType: "Restoration & Waterproofing",
  },
  {
    id: 3,
    customerName: "Arjun Nair",
    title: "Premium Villa Complex - Outstanding Results",
    description:
      "Luxury villa owners in our community are extremely satisfied. No basement flooding, perfect terrace waterproofing. Worth every penny!",
    videoId: "kJQP7kiw5Fk",
    rating: 5,
    location: "Thiruvananthapuram, Kerala",
    projectType: "Luxury Villas",
    reviewDate: "2024",
    serviceType: "Basement & Terrace Waterproofing",
  },
];

const CustomerReviews = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
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
    const handleKeyDown = (e) => {
      if (selectedVideo !== null) {
        if (e.key === "Escape") {
          setSelectedVideo(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  const filteredReviews =
    filter === "all"
      ? customerReviews
      : customerReviews.filter((review) =>
          review.projectType.toLowerCase().includes(filter.toLowerCase())
        );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-yellow-50  ">
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

        @keyframes glow {
          0%,
          100% {
            background: linear-gradient(
              135deg,
              #dbeafe 0%,
              #e0e7ff 50%,
              #fef3c7 100%
            );
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-highlight {
          animation: highlight 0.8s ease-out, glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .review-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .review-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(255, 142, 142, 0.15);
          border-color: rgb(246, 59, 59);
        }

        .video-thumbnail {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          background: rgb(246, 59, 59);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-button::after {
          content: "";
          width: 0;
          height: 0;
          border-left: 20px solid white;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          margin-left: 4px;
        }

        .section-title {
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .service-badge {
          display: inline-block;
          padding: 4px 12px;
          background: linear-gradient(135deg, #fef3c7, #fee2e2);
          color: #dc2626;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modal-iframe {
          border-radius: 12px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .review-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 relative z-10">
          Customer <span className="text-red-600">Reviews</span>
        </h2>{" "}
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Hear what our satisfied customers have to say about our waterproofing
          services
        </p>
      </div>

      <div className="review-grid">
        {filteredReviews.map((review, index) => (
          <div
            key={review.id}
            className="review-card animate-on-scroll"
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedVideo(review)}
          >
            <div className="video-thumbnail">
              <img
                src={`https://img.youtube.com/vi/${review.videoId}/maxresdefault.jpg`}
                alt={review.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="play-button"></div>
              <div className="absolute top-4 left-4">
                <span className="service-badge">{review.serviceType}</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <span>⭐</span>
                <span>{review.rating}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="    text-red-500 text-lg font-bold">
                  {review.customerName}
                </h3>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>

              <h4 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">
                {review.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3 italic">
                "{review.description}"
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                  <span className="font-medium">📍</span>
                  <span>{review.location}</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                  <span className="font-medium">🏢</span>
                  <span>{review.projectType}</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                  <span className="font-medium">📅</span>
                  <span>{review.reviewDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400 transition-colors duration-200 z-10"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>

          <div className="w-full max-w-6xl">
            <div
              className="relative"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="modal-iframe absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-6 text-white text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h3 className="text-2xl font-bold">
                  {selectedVideo.customerName}
                </h3>
                <div className="flex">{renderStars(selectedVideo.rating)}</div>
              </div>
              <h4 className="text-xl mb-2">{selectedVideo.title}</h4>
              <p className="text-gray-300 mb-4 italic">
                "{selectedVideo.description}"
              </p>
              <div className="flex justify-center gap-4 text-sm flex-wrap">
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  📍 {selectedVideo.location}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  🏢 {selectedVideo.projectType}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  🛠️ {selectedVideo.serviceType}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  📅 {selectedVideo.reviewDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
