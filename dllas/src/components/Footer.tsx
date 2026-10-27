import { Link } from "react-router-dom";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  Phone,
  MapPin,
  PhoneCall,
} from "lucide-react";
import logo from "../images/logo-blue.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contacts", path: "/contact" },
  ];

  const productItems = [
    { label: "Wall Plaster", path: "/products" },
    { label: "Wall Putty", path: "/products" },
    { label: "Wall Primer", path: "/products" },
    { label: "Dr. Proof", path: "/products" },
    { label: "Gypsum Plaster", path: "/products" },
    { label: "Water Treater", path: "/products" },
  ];

  return (
    <footer className="border-t border-blue-100 bg-white text-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="mb-6 flex max-w-[220px] items-center hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src={logo}
                alt="Dallas Wallcare"
                className="h-11 w-auto max-w-full object-contain"
              />
            </Link>
            <p className="text-slate-600 mb-6">
              Innovative wall solutions, scientifically engineered for durability,
              comfort, and customer satisfaction.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16iZyF63Q2/"
                className="bg-blue-50 p-2 rounded-full text-[#075eb3] hover:bg-[#075eb3] hover:text-white transition-colors duration-300"
                title="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/dallaswallcare?igsh=MW9odWMydXgzcXJxeg=="
                className="bg-blue-50 p-2 rounded-full text-[#075eb3] hover:bg-[#075eb3] hover:text-white transition-colors duration-300"
                title="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.dallaswallcare.com/"
                className="bg-blue-50 p-2 rounded-full text-[#075eb3] hover:bg-[#075eb3] hover:text-white transition-colors duration-300"
                title="Visit our website"
              >
                <Globe size={20} />
              </a>

              <a
                href="mailto:info@dallaswallcare.com"
                className="bg-blue-50 p-2 rounded-full text-[#075eb3] hover:bg-[#075eb3] hover:text-white transition-colors duration-300"
                title="Send email to info"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+919342216880"
                className="bg-blue-50 p-2 rounded-full text-[#075eb3] hover:bg-[#075eb3] hover:text-white transition-colors duration-300"
                title="Call us"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 border-b border-blue-100 pb-2 text-slate-950">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={`footer-nav-${index}`}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-slate-600 hover:text-[#075eb3] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 border-b border-blue-100 pb-2 text-slate-950">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productItems.map((item, index) => (
                <li key={`footer-product-${index}`}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-slate-600 hover:text-[#075eb3] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 border-b border-blue-100 pb-2 text-slate-950">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-950 font-semibold flex items-start">
                  <MapPin size={16} className="mr-2 mt-0.5 text-[#075eb3]" />
                  Addresses:
                </p>
                <div className="ml-6 space-y-2">
                  <p className="text-slate-600 leading-relaxed">
                    No 1/394, S.F.NO. 436/B1, VADUGAPALAYAM, Vadampacheri,
                    Coimbatore - 641669
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    SF NO 268 VADAVALLI, ANNUR (Tk), COIMBATORE-641697
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <p className="text-slate-950 font-semibold flex items-center">
                  <PhoneCall size={16} className="mr-2 text-[#075eb3]" />
                  Contact:
                </p>
                <div className="ml-6 space-y-1">
                  <p className="text-slate-600">
                    <a
                      href="tel:+919342216880"
                      className="hover:text-[#075eb3] transition-colors"
                    >
                      Mob: +919342216880
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a
                      href="tel:18005724998"
                      className="hover:text-[#075eb3] transition-colors"
                    >
                      Tollfree: 1800 572 4998
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-slate-950 font-semibold flex items-center">
                  <Mail size={16} className="mr-2 text-[#075eb3]" />
                  Email:
                </p>
                <div className="ml-6 space-y-1">
                  <p className="text-slate-600">
                    <a
                      href="mailto:info@dallaswallcare.com"
                      className="hover:text-[#075eb3] transition-colors"
                    >
                      info@dallaswallcare.com
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a
                      href="mailto:magesh@mcglasgo.com"
                      className="hover:text-[#075eb3] transition-colors"
                    >
                      magesh@mcglasgo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dallas Wallcare. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-slate-600 hover:text-[#075eb3] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-slate-600 hover:text-[#075eb3] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
