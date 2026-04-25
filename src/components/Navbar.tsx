import React, { useState, useRef, useEffect } from "react";
import { Factory, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../images/logo.png'
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

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({});
  const navRef = useRef<HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
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
            { label: "Watertreater", path: "/products/water-treater" }
          ]
        },
        {
          label: "Dr. Proof Solutions",
          path: "/products",
          id: "dr-proof",
          subItems: [
            { label: "Weather Proof ", path: "/products/dr-proof-m1-bond" }
          ]
        },
        {
          label: "Ceramikha Solutions",
          path: "/products",
          id: "ceramikha",
          subItems: [
            { label: "Gypsum Plaster", path: "/products/ceramikha-gypsum-plaster" }
          ]
        },
        {
          label: "Matrix Solutions",
          path: "/products",
          id: "matrix",
          subItems: [
            { label: "GyroMATRIX", path: "/products/gypmatrix-gypsum" },
            { label: "Gypsum Bond", path: "/products/gypmatrix-gypsum-plaster" }
          ]
        }
      ]
    },
    { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contacts", path: "/contact" },
  ];

  // Scroll to top function
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle menu click for navigation
  const handleMenuClick = (path: string): void => {
    navigate(path);
    scrollToTop();
    closeMobileMenu();
    setActiveDropdown(null); // Close desktop dropdowns when navigating
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdowns({});
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemId: string): void => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Close mobile menu
  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  // Mobile dropdown component
  const MobileDropdown: React.FC<{
    item: NavItem | SubItem;
    depth?: number;
  }> = ({ item, depth = 0 }) => {
    const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
    const isOpen = Boolean(item.id && openDropdowns[item.id]);

    return (
      <div className={`${depth > 0 ? "ml-4 border-l-2 border-gray-100 pl-4" : ""}`}>
        <div className="flex items-center">
          <button
            onClick={() => handleMenuClick(item.path)}
            className={`flex-1 block px-4 py-3 text-left text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200 ${
              currentPath === item.path ? "text-red-600 font-medium bg-red-50" : ""
            }`}
          >
            {item.label}
          </button>
          {hasSubItems && item.id && (
            <button
              onClick={() => toggleMobileDropdown(item.id!)}
              className="p-3 text-gray-600 hover:text-red-600 rounded-lg transition-all duration-200"
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
      <nav className="bg-white shadow-lg fixed w-full z-50" ref={navRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/" 
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
                setActiveDropdown(null);
              }}
              className="flex items-center space-x-3 logo"
            >
              {/* <Factory size={36} className="text-red-600" />
              <span className="text-lg font-bold">
                <span className="text-red-600">DALLAS</span>
                <span className="text-yellow-500">WALLCARE</span>
              </span> */}
              <img src={logo} alt="" height="50px" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
                const isOpen = activeDropdown === item.id;

                return (
                  <div
                    key={item.path || item.id || `navitem-${index}`}
                    className="relative"
                  >
                    {/* Main Nav Item */}
                    <button
                      onClick={() => {
                        if (hasSubItems && item.id) {
                          toggleDropdown(item.id);
                        } else {
                          handleMenuClick(item.path);
                        }
                      }}
                      className={`flex items-center gap-2 px-4 py-3 text-gray-800 hover:text-red-600 rounded-lg font-medium transition-all duration-200 ${
                        currentPath === item.path ? "text-red-600" : ""
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
                    </button>

                    {/* First Level Dropdown */}
                    {hasSubItems && isOpen && (
                      <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50 min-w-max">
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
                                onClick={() => {
                                  handleMenuClick(subItem.path);
                                }}
                                className={`flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap ${
                                  currentPath === subItem.path
                                    ? "text-red-600 font-medium bg-red-50"
                                    : ""
                                }`}
                                style={{ minWidth: "220px" }}
                              >
                                <span>{subItem.label}</span>
                                {hasNestedItems && (
                                  <ChevronRight size={16} className="ml-2" />
                                )}
                              </button>

                              {/* Second Level Dropdown - Show on hover */}
                              {hasNestedItems && (
                                <div className="absolute top-0 left-full ml-2 bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50 min-w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                  {subItem.subItems?.map((nestedItem, nestedIndex) => (
                                    <button
                                      key={nestedItem.path || `nested-${nestedIndex}`}
                                      onClick={() => handleMenuClick(nestedItem.path)}
                                      className={`block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 whitespace-nowrap ${
                                        currentPath === nestedItem.path
                                          ? "text-red-600 font-medium bg-red-50"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-800 hover:text-red-600 transition-all duration-200"
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
          className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <MobileDropdown
                key={`mobile-${item.id || item.path}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;