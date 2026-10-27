import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ceramikhaProducts,
  dallasProducts,
  drProofProducts,
  matrixProducts,
} from "../data/productsData";
import logo from "../images/logo-blue.png";

interface SubItem {
  label: string;
  path: string;
  id?: string;
  subItems?: SubItem[];
}

interface NavItem {
  label: string;
  path: string;
  id?: string;
  subItems?: SubItem[];
}

interface DropdownState {
  [key: string]: boolean;
}

interface MegaProduct {
  id: string;
  name: string;
  image: string;
}

interface MegaCategory {
  id: string;
  label: string;
  title: string;
  products: MegaProduct[];
}

const productMegaCategories: MegaCategory[] = [
  {
    id: "dallas",
    label: "Dallas",
    title: "Dallas Products",
    products: dallasProducts,
  },
  {
    id: "dr-proof",
    label: "Dr. Proof",
    title: "Dr. Proof Products",
    products: drProofProducts,
  },
  {
    id: "ceramikha",
    label: "Ceramikha",
    title: "Ceramikha Products",
    products: ceramikhaProducts,
  },
  {
    id: "matrix",
    label: "Matrix",
    title: "Matrix Products",
    products: matrixProducts,
  },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({});
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegaCategory, setActiveMegaCategory] = useState<string>("dallas");

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const openDropdown = (id: string) => {
    setActiveDropdown(id);
  };

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
      label: "Products",
      path: "/products",
      id: "products",
      subItems: [
        {
          label: "Dallas",
          path: "/products",
          id: "dallas",
          subItems: [
            { label: "Ready Wall Plaster", path: "/products/wall-plaster" },
            { label: "Wall Putty", path: "/products/wall-putty" },
            { label: "Gypsum Plaster", path: "/products/gypsum-plaster" },
            { label: "Grout Plus", path: "/products/grout-plus" },
            { label: "Tile Adhesive", path: "/products/tile-adhesive" },
            { label: "Watertreater", path: "/products/water-treater" },
          ],
        },
        {
          label: "Dr. Proof Solutions",
          path: "/products",
          id: "dr-proof",
          subItems: [
            { label: "Weather Proof ", path: "/products/dr-proof-m1-bond" },
          ],
        },
        {
          label: "Ceramikha Solutions",
          path: "/products",
          id: "ceramikha",
          subItems: [
            { label: "Gypsum Plaster", path: "/products/ceramikha-gypsum-plaster" },
          ],
        },
        {
          label: "Matrix Solutions",
          path: "/products",
          id: "matrix",
          subItems: [
            { label: "GyroMATRIX", path: "/products/gypmatrix-gypsum" },
            { label: "Gypsum Bond", path: "/products/gypmatrix-gypsum-plaster" },
          ],
        },
      ],
    },
    { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contacts", path: "/contact" },
  ];

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = (path: string): void => {
    navigate(path);
    scrollToTop();
    closeMobileMenu();
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdowns({});
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (itemId: string): void => {
    setOpenDropdowns((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  const activeCategory =
    productMegaCategories.find((category) => category.id === activeMegaCategory) ??
    productMegaCategories[0];

  const ProductMegaMenu = () => (
    <div
      className="animate-mega-in absolute left-1/2 top-full z-50 w-[min(1120px,calc(100vw-48px))] -translate-x-1/2 overflow-hidden rounded-b-2xl border border-blue-100 bg-white shadow-[0_24px_60px_rgba(15,78,140,0.18)]"
      onMouseEnter={() => openDropdown("products")}
    >
      <div className="flex border-b border-blue-100 bg-[#f5fbff] px-6">
        {productMegaCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onMouseEnter={() => setActiveMegaCategory(category.id)}
            onFocus={() => setActiveMegaCategory(category.id)}
            onClick={() => setActiveMegaCategory(category.id)}
            className={`relative px-5 py-4 text-sm font-medium transition-colors duration-200 ${
              activeCategory.id === category.id
                ? "text-[#075eb3]"
                : "text-slate-700 hover:text-[#075eb3]"
            }`}
          >
            {category.label}
            {activeCategory.id === category.id && (
              <span className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full bg-[#075eb3]" />
            )}
          </button>
        ))}
      </div>

      <div className="p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h3 className="mt-1 text-xl font-semibold text-[#06356f]">
              {activeCategory.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => handleMenuClick("/products")}
            className="group relative inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium text-[#075eb3] transition-colors hover:text-[#053d75] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075eb3]/40 focus-visible:ring-offset-2"
          >
            <span className="relative">
              View all
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#053d75] transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </button>
        </div>

       <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {activeCategory.products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => handleMenuClick(`/products/${product.id}`)}
              className="group rounded-xl border border-blue-100 bg-white p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_14px_30px_rgba(15,78,140,0.14)]"
            >
              <div className="flex h-20 items-center justify-center overflow-hidden rounded-lg bg-white p-1 sm:h-28">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 line-clamp-2 min-h-[32px] text-xs font-medium leading-snug text-slate-800 transition-colors group-hover:text-[#075eb3]">
                {product.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileDropdown: React.FC<{
    item: NavItem | SubItem;
    depth?: number;
  }> = ({ item, depth = 0 }) => {
    const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
    const isOpen = Boolean(item.id && openDropdowns[item.id]);

    return (
      <div className={`${depth > 0 ? "ml-4 border-l-2 border-blue-100 pl-4" : ""}`}>
        <div className="flex items-center">
          <button
            onClick={() => handleMenuClick(item.path)}
            className={`flex-1 block px-4 py-3 text-left text-slate-800 hover:text-[#075eb3] hover:bg-blue-50 rounded-lg transition-all duration-200 ${
              currentPath === item.path ? "text-[#075eb3] font-medium bg-blue-50" : ""
            }`}
          >
            {item.label}
          </button>
          {hasSubItems && item.id && (
            <button
              onClick={() => toggleMobileDropdown(item.id!)}
              className="p-3 text-slate-600 hover:text-[#075eb3] rounded-lg transition-all duration-200"
              type="button"
              aria-expanded={isOpen}
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>

        {hasSubItems && isOpen && item.subItems && (
          <div className="mt-2 space-y-1">
            {item.subItems.map((subItem, index) => (
              <MobileDropdown
                key={subItem.path || subItem.id || `mobile-subitem-${index}`}
                item={subItem}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes mega-in {
          0%   { opacity: 0; transform: translate(-50%, -8px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-mega-in {
          animation: mega-in 0.22s ease-out;
        }
      `}</style>

      <nav
        className={`fixed w-full z-50 backdrop-blur transition-shadow duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md ring-1 ring-blue-100"
            : "bg-white/90 shadow-sm ring-1 ring-blue-50"
        }`}
        ref={navRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
                setActiveDropdown(null);
              }}
              className="flex max-w-[145px] items-center sm:max-w-[185px] md:max-w-[230px]"
            >
              <img
                src={logo}
                alt="Dallas Wallcare"
                className="h-8 w-auto max-w-full object-contain sm:h-9 md:h-11"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
                const isOpen = activeDropdown === item.id;
                const isActive = currentPath === item.path;

                return (
                  <div
                    key={item.path || item.id || `navitem-${index}`}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.id === "products") openDropdown("products");
                    }}
                    onMouseLeave={() => {
                      if (item.id === "products") setActiveDropdown(null);
                    }}
                  >
                    <button
                      onClick={() => {
                        if (hasSubItems && item.id) {
                          if (item.id === "products") {
                            openDropdown(item.id);
                          } else {
                            toggleDropdown(item.id);
                          }
                        } else {
                          handleMenuClick(item.path);
                        }
                      }}
                      className={`relative flex items-center gap-1.5 px-4 py-3 text-[15px] font-semibold text-slate-800 transition-colors duration-200 hover:text-[#075eb3] ${
                        isActive ? "text-[#075eb3]" : ""
                      }`}
                    >
                      {item.label}
                      {hasSubItems && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span
                        className={`absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-[#075eb3] transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>

                    {hasSubItems && isOpen && item.id === "products" && <ProductMegaMenu />}

                    {hasSubItems && isOpen && item.id !== "products" && (
                      <div className="animate-mega-in absolute top-full left-0 bg-white shadow-xl border border-blue-100 rounded-lg py-2 z-50 min-w-max">
                        {item.subItems?.map((subItem, subIndex) => {
                          const hasNestedItems = Boolean(
                            subItem.subItems && subItem.subItems.length > 0
                          );

                          return (
                            <div
                              key={subItem.id || subItem.path || `subitem-${subIndex}`}
                              className="relative group"
                            >
                              <button
                                onClick={() => handleMenuClick(subItem.path)}
                                className={`flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:text-[#075eb3] hover:bg-blue-50 transition-all duration-200 whitespace-nowrap ${
                                  currentPath === subItem.path
                                    ? "text-[#075eb3] font-medium bg-blue-50"
                                    : ""
                                }`}
                                style={{ minWidth: "220px" }}
                              >
                                <span>{subItem.label}</span>
                                {hasNestedItems && <ChevronRight size={16} className="ml-2" />}
                              </button>

                              {hasNestedItems && (
                                <div className="absolute top-0 left-full ml-2 bg-white shadow-xl border border-blue-100 rounded-lg py-2 z-50 min-w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                  {subItem.subItems?.map((nestedItem, nestedIndex) => (
                                    <button
                                      key={nestedItem.path || `nested-${nestedIndex}`}
                                      onClick={() => handleMenuClick(nestedItem.path)}
                                      className={`block w-full text-left px-4 py-3 text-slate-700 hover:text-[#075eb3] hover:bg-blue-50 transition-all duration-200 whitespace-nowrap ${
                                        currentPath === nestedItem.path
                                          ? "text-[#075eb3] font-medium bg-blue-50"
                                          : ""
                                      }`}
                                      style={{ minWidth: "200px" }}
                                    >
                                      {nestedItem.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => handleMenuClick("/contact")}
              className="hidden rounded-md bg-[#075eb3] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#064f9c] hover:shadow-md lg:inline-flex"
              type="button"
            >
              Get in Touch
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:text-[#075eb3] transition-all duration-200"
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t border-blue-100 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <MobileDropdown key={`mobile-${item.id || item.path}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;