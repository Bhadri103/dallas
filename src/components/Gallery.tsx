import React, { useState, useEffect } from 'react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Manufacturing Process",
    category: "production"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Factory Floor",
    category: "facility"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Quality Testing",
    category: "quality"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Product Assembly",
    category: "production"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/12789212/pexels-photo-12789212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Raw Materials",
    category: "materials"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3889870/pexels-photo-3889870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Product Design",
    category: "design"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Finished Products",
    category: "products"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/48799/drill-milling-milling-machine-drilling-48799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Machinery",
    category: "equipment"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle key press events for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowRight') {
          setSelectedImage((prev) => 
            prev !== null ? (prev + 1) % galleryImages.length : null
          );
        } else if (e.key === 'ArrowLeft') {
          setSelectedImage((prev) => 
            prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
          );
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);
  
  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold section-title mx-auto">Gallery</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Take a visual tour through our manufacturing facilities, processes, and products.
        </p>
      </div>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'all' ? 'bg-red text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {['production', 'facility', 'quality', 'materials', 'design', 'products', 'equipment'].map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)} 
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              filter === cat ? 'bg-red text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Gallery grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item aspect-square animate-on-scroll" 
            style={{ transitionDelay: `${index * 0.05}s` }}
            onClick={() => setSelectedImage(galleryImages.findIndex(img => img.id === image.id))}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-lg font-medium">{image.alt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage((prev) => 
              prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
            )}
          >
            &#10094;
          </button>
          
          <img 
            src={galleryImages[selectedImage].src} 
            alt={galleryImages[selectedImage].alt} 
            className="max-h-[80vh] max-w-[80vw] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage((prev) => 
              prev !== null ? (prev + 1) % galleryImages.length : null
            )}
          >
            &#10095;
          </button>
          
          <div className="absolute bottom-4 text-white text-center w-full">
            <p className="text-lg">{galleryImages[selectedImage].alt}</p>
            <p className="text-sm text-gray-300">Image {selectedImage + 1} of {galleryImages.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;