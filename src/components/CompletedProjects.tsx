import React, { useState, useEffect } from "react";

const projectVideos = [
  {
    id: 1,
    title: "Modern Residential Complex - Kochi, Kerala",
    description:
      "Complete waterproofing solution for 200+ unit residential complex with 15-year warranty",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
    category: "residential",
    location: "Kochi, Kerala",
    duration: "18 months",
    completion: "2024",
  },

  {
    id: 4,
    title: "Heritage Building Restoration - Mysore, Karnataka",
    description:
      "Preservation waterproofing for 100-year-old heritage structure maintaining architectural integrity",
    videoId: "ScMzIvxBSi4", // Replace with actual YouTube video IDs
    category: "renovation",
    location: "Mysore Palace Area",
    duration: "12 months",
    completion: "2023",
  },
  {
    id: 5,
    title: "Premium Housing Project - Thiruvananthapuram, Kerala",
    description:
      "Luxury villa complex with advanced basement and terrace waterproofing solutions",
    videoId: "kJQP7kiw5Fk",
    category: "residential",
    location: "Thiruvananthapuram",
    duration: "20 months",
    completion: "2024",
  },
];

const CompletedProjects = () => {
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

  const filteredVideos =
    filter === "all"
      ? projectVideos
      : projectVideos.filter((video) => video.category === filter);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
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

        @keyframes highlight {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px 10px rgba(255, 68, 68, 0.3);
            transform: scale(1.02);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
            transform: scale(1);
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
              #fef3c7 0%,
              #fff7ed 50%,
              #fee2e2 100%
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

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .video-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .video-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
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
          background: rgba(255, 68, 68, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          background: rgba(255, 68, 68, 1);
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

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #ef4444);
          border-radius: 2px;
        }

        .category-badge {
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
          .video-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 relative z-10">
          Completed <span className="text-red-600">Projects</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Take a look at some of our completed projects showcasing our quality
          and expertise.
        </p>
      </div>

      <div className="video-grid">
        {filteredVideos.map((video, index) => (
          <div
            key={video.id}
            className="video-card animate-on-scroll"
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="video-thumbnail">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="play-button"></div>
              <div className="absolute top-4 left-4">
                <span className="category-badge">{video.category}</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {video.completion}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {video.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="font-medium">📍</span>
                  <span>{video.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">⏱️</span>
                  <span>{video.duration}</span>
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
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-400 transition-colors duration-200 z-10"
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
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 mb-4">{selectedVideo.description}</p>
              <div className="flex justify-center gap-6 text-sm">
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  📍 {selectedVideo.location}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  ⏱️ {selectedVideo.duration}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  📅 {selectedVideo.completion}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletedProjects;
