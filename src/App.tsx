import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products'; // Your ProductsPage component (list view)
import ProductDetailsPage from './pages/ProductDetailsPage'; // Import the new details page
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const ScrollRevealManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    const observeElements = () => {
      document
        .querySelectorAll('.animate-on-scroll, .scroll-reveal')
        .forEach((element) => {
          if (!observed.has(element)) {
            observed.add(element);
            observer.observe(element);
          }
        });
    };

    observeElements();

    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/">
      <div className="font-sans min-h-screen flex flex-col">
        <ScrollToTop />
        <ScrollRevealManager />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Route for the main products list */}
            <Route path="/products" element={<Products />} />
            {/* Route for individual product details, rendering the new component */}
            <Route path="/products/:productId" element={<ProductDetailsPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
