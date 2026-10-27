import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Factory,
  FlaskConical,
  Globe2,
  Home as HomeIcon,
  Leaf,
  Paintbrush,
  Phone,
  Shield,
  Sparkles,
  Star,
  Sun,
  Target,
  Users,
  Waves,
} from "lucide-react";
import {
  ceramikhaProducts,
  dallasProducts,
  drProofProducts,
  matrixProducts,
} from "../data/productsData";
import Banner from "../images/Banner.png";
import Ceramikha from "../images/Ceramikha.png";
import DallasDrM1Bond from "../images/DallasDrM1Bond.jpeg";
import Mackado from "../images/mackado.png";
import Matrix from "../images/matrixgypMatrix.png";
import reviewOne from "../components/video/thumbnails/NoushadPuthiyangadi.png";
import reviewTwo from "../components/video/thumbnails/MuhammedKutty.png";
import reviewThree from "../components/video/thumbnails/haris-malabar.png";
import ProductsShowcase from "../components/Products";
import ScrollAnimatedSection from "../components/AnimatedSection";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface HomeProduct {
  id: string;
  name: string;
  image: string;
}

/* ------------------------------------------------------------------ */
/*  Shared design tokens                                               */
/*  A single accent (brand blue) is used everywhere. Brand "families"  */
/*  are differentiated with a small icon + label, not a new palette.   */
/* ------------------------------------------------------------------ */

const ACCENT = "#075eb3";
const ACCENT_DARK = "#06356f";
const ACCENT_DEEP = "#052a58";

const sectionTitleClass =
  "text-center text-2xl md:text-3xl font-semibold tracking-tight text-[#06356f]";

const sectionEyebrowClass =
  "inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#075eb3] ring-1 ring-blue-100";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => (
  <ScrollAnimatedSection className={className} delay={delay}>
    {children}
  </ScrollAnimatedSection>
);

/* ------------------------------------------------------------------ */
/*  Static content                                                     */
/* ------------------------------------------------------------------ */

const brandCategories = [
  {
    name: "Dallas",
    description: "India's 1st Heat Gen DampProof Wallcare Products",
    image: Banner,
    path: "/products",
  },
  {
    name: "CeraMikha",
    description: "Green Building Solutions for Stronger Homes",
    image: Ceramikha,
    path: "/products",
  },
  {
    name: "Dr. Proof",
    description: "Advanced DampProof Protection for Every Surface",
    image: DallasDrM1Bond,
    path: "/products",
  },
  {
    name: "Mackado",
    description: "Tile & Stone Fixing Solutions with Superior Strength",
    image: Mackado,
    path: "https://www.mackadowallcare.com/",
  },
  {
    name: "Matrix",
    description: "High Performance Wallcare & Plaster Products",
    image: Matrix,
    path: "/products",
  },
];

const reviewCards = [
  {
    name: "Noushad",
    title: "Improved My Success: Noushad Puthiyangadi's Journey in Dallas Wall Care",
    image: reviewOne,
  },
  {
    name: "Muhammed Kutty",
    title: "Amazing Heritage Building Restoration Experience",
    image: reviewTwo,
  },
  {
    name: "Haris Malabar",
    title: "Premium Villa Caretaking - Outstanding Results",
    image: reviewThree,
  },
];

const whyChooseReasons = [
  {
    icon: Factory,
    label: "Direct Factory-to-Customer Pricing",
    description: "Better value through controlled production and direct supply.",
  },
  {
    icon: FlaskConical,
    label: "Scientifically Engineered",
    description: "Material formulas developed for dependable wallcare performance.",
  },
  {
    icon: Target,
    label: "Superior Waterproofing Technology",
    description: "Focused protection against dampness, leakage, and surface damage.",
  },
  {
    icon: BadgeCheck,
    label: "Cost-Effective & High Performance",
    description: "Balanced products for durability, finish quality, and site efficiency.",
  },
  {
    icon: Shield,
    label: "Continuous Innovation & Leadership",
    description: "Improving product systems through research and field learning.",
  },
  {
    icon: Award,
    label: "Manufacturing & Research Facilities",
    description: "Equipped processes built for consistency and quality control.",
  },
  {
    icon: Sparkles,
    label: "Customizable Solutions",
    description: "Practical support for different surface and project needs.",
  },
  {
    icon: Leaf,
    label: "Eco-Friendly Production",
    description: "Safer manufacturing choices with responsible material handling.",
  },
];

const featureCards = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description: "Lab-tested formulas for long-term durability and protection.",
  },
  {
    icon: Waves,
    title: "Superior Waterproofing Technology",
    description: "Effective protection against dampness, leaks, and structural damage.",
  },
  {
    icon: Users,
    title: "Direct Factory to Customer",
    description: "Eliminates intermediaries for better pricing and quality assurance.",
  },
  {
    icon: Globe2,
    title: "International Standards",
    description: "Products comply with global benchmarks for superior performance.",
  },
  {
    icon: Building2,
    title: "Advanced Manufacturing",
    description: "State-of-the-art facilities ensuring precision and consistent quality.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Production",
    description: "Sustainable and safer manufacturing processes for a better tomorrow.",
  },
];

interface ProductHighlight {
  icon: ReactNode;
  label: string;
  caption?: string;
}

const productHighlights: Record<string, ProductHighlight[]> = {
  "wall-plaster": [{ icon: <Shield className="h-3.5 w-3.5" />, label: "Heat Gen Protection" }],
  "wall-putty": [{ icon: <Sparkles className="h-3.5 w-3.5" />, label: "Smooth & Strong Finish" }],
  "gypsum-plaster": [{ icon: <Shield className="h-3.5 w-3.5" />, label: "High Bond Strength" }],
  "grout-plus": [{ icon: <Droplets className="h-3.5 w-3.5" />, label: "Direct to Surface" }],
  "tile-adhesive": [{ icon: <BadgeCheck className="h-3.5 w-3.5" />, label: "Superior Adhesion" }],
  "ceramikha-gypsum-plaster": [
    { icon: <Leaf className="h-5 w-5" />, label: "Eco Friendly", caption: "Better for environment" },
    { icon: <HomeIcon className="h-5 w-5" />, label: "Low VOC", caption: "Safe for all ages" },
    { icon: <Shield className="h-5 w-5" />, label: "Strong & Durable", caption: "Long lasting protection" },
  ],
  "gypmatrix-gypsum": [
    { icon: <Shield className="h-5 w-5" />, label: "3X Stronger", caption: "Superior strength" },
    { icon: <BadgeCheck className="h-5 w-5" />, label: "Crack Resistance", caption: "No cracks over time" },
    { icon: <Paintbrush className="h-5 w-5" />, label: "Easy Application", caption: "Simple to apply" },
  ],
  "gypmatrix-gypsum-plaster": [
    { icon: <Award className="h-5 w-5" />, label: "High Bonding", caption: "Excellent adhesion" },
    { icon: <Droplets className="h-5 w-5" />, label: "Water Resistant", caption: "Moisture protection" },
    { icon: <Shield className="h-5 w-5" />, label: "Long Lasting", caption: "Years of durability" },
  ],
  "dr-proof-m1-bond": [
    { icon: <Droplets className="h-5 w-5" />, label: "Water Resistant", caption: "Blocks moisture" },
    { icon: <Sparkles className="h-5 w-5" />, label: "All Weather Protection", caption: "Works in any climate" },
    { icon: <Sun className="h-5 w-5" />, label: "Heat Reflective", caption: "Reduces heat absorption" },
    { icon: <Shield className="h-5 w-5" />, label: "Long Life Performance", caption: "Extended durability" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Per-brand accent system — each product family gets one consistent  */
/*  color used for its icon, heading, button, and border only.         */
/* ------------------------------------------------------------------ */

type Accent = "blue" | "green" | "purple";

const ACCENT_STYLES: Record<
  Accent,
  {
    text: string;
    button: string;
    buttonHover: string;
    pale: string;
    paleBorder: string;
    border: string;
    ring: string;
    blob: string;
  }
> = {
  blue: {
    text: "text-[#075eb3]",
    button: "bg-[#075eb3]",
    buttonHover: "group-hover:bg-[#06356f] hover:bg-[#06356f]",
    pale: "bg-blue-50",
    paleBorder: "border-blue-100",
    border: "border-blue-200",
    ring: "ring-blue-100",
    blob: "bg-blue-50",
  },
  green: {
    text: "text-[#075eb3]",
    button: "bg-[#075eb3]",
    buttonHover: "group-hover:bg-[#06356f] hover:bg-[#06356f]",
    pale: "bg-blue-50",
    paleBorder: "border-blue-100",
    border: "border-blue-200",
    ring: "ring-blue-100",
    blob: "bg-blue-50",
  },
  purple: {
    text: "text-[#075eb3]",
    button: "bg-[#075eb3]",
    buttonHover: "group-hover:bg-[#06356f] hover:bg-[#06356f]",
    pale: "bg-blue-50",
    paleBorder: "border-blue-100",
    border: "border-blue-200",
    ring: "ring-blue-100",
    blob: "bg-blue-50",
  },
};

/* ------------------------------------------------------------------ */
/*  Shared product-card sub components                                 */
/* ------------------------------------------------------------------ */

const ProductFeatureChips = ({ productId }: { productId: string }) => {
  const features = productHighlights[productId] ?? [];
  if (features.length === 0) return null;

  return (
    <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 sm:justify-start">
      {features.slice(0, 1).map((feature) => (
        <span
          key={feature.label}
          className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-[#075eb3] sm:text-[11px]"
        >
          {feature.icon}
          <span className="whitespace-nowrap">{feature.label}</span>
        </span>
      ))}
    </div>
  );
};

// Icon-in-circle feature row used on the wide brand cards (CeraMikha, Matrix,
// Dr. Proof) — mirrors the "Eco Friendly / Low VOC / Strong & Durable" style.
const ProductFeatureCircles = ({
  productId,
  accent,
}: {
  productId: string;
  accent: Accent;
}) => {
  const features = productHighlights[productId] ?? [];
  const styles = ACCENT_STYLES[accent];
  if (features.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {features.slice(0, 3).map((feature) => (
        <span
          key={feature.label}
          className={`rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold ${styles.text}`}
        >
            {feature.label}
        </span>
      ))}
    </div>
  );
};

const ProductTile = ({ product }: { product: HomeProduct }) => (
  <Link
    to={`/products/${product.id}`}
    className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white px-3 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_14px_28px_rgba(15,78,140,0.08)] sm:px-4 sm:py-5"
  >
    <div className="flex h-32 items-center justify-center rounded-lg bg-slate-50 px-2 py-3 sm:h-44">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-28 max-w-full object-contain transition duration-300 group-hover:scale-105 sm:max-h-40"
        loading="lazy"
      />
    </div>
    <h4 className="mt-4 min-h-[34px] text-xs font-semibold leading-snug text-slate-900 sm:text-sm">
      {product.name}
    </h4>
    
  <span className="mx-auto mt-4 inline-flex w-fit items-center gap-1 rounded-md bg-[#075eb3] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#06356f]">
  View Details
  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
</span>
  </Link>
);
const WideProductCard = ({
  product,
  accent,
}: {
  product: HomeProduct;
  accent: Accent;
}) => {
  const styles = ACCENT_STYLES[accent];
  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex min-h-[260px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_30px_rgba(15,78,140,0.08)] sm:flex-row sm:items-center sm:p-5"
    >
      {/* Image */}
      <div className="flex h-52 items-center justify-center rounded-lg bg-slate-50 p-5 sm:h-56 sm:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-44 max-w-full object-contain transition duration-300 group-hover:scale-105 sm:max-h-52"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-5 p-3 sm:p-6">
        <div>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">
            {product.name}
          </h4>
          <ProductFeatureCircles productId={product.id} accent={accent} />
        </div>

      <span
  className={`inline-flex w-fit items-center justify-center gap-2 rounded-md ${styles.button} px-4 py-2 text-xs font-semibold text-white transition ${styles.buttonHover} self-start`}
>
  View Details
  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
</span>
      </div>
    </Link>
  );
};

// Desktop-only informational panel: icon, two-line heading, description, CTA.
const BrandSidePanel = ({
  brandName,
  subtitle,
  icon,
  buttonLabel,
  accent,
}: {
  brandName: string;
  subtitle: string;
  icon: ReactNode;
  buttonLabel: string;
  accent: Accent;
}) => {
  const styles = ACCENT_STYLES[accent];
  return (
    <div className="hidden border-r border-slate-200 py-5 pr-7 lg:block">
      <div>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg bg-white ${styles.text} ring-1 ${styles.ring}`}
        >
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold uppercase leading-tight tracking-tight">
          <span className={styles.text}>{brandName}</span>
          <br />
          <span className="text-slate-900">Products</span>
        </h3>
        <Link
          to="/products"
          className={`mt-5 inline-flex w-full items-center justify-between gap-2 rounded-md ${styles.button} px-4 py-2.5 text-xs font-semibold text-white transition ${styles.buttonHover}`}
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

// Mobile-only compact header: just a heading and a "View All" link, no card
// chrome, no description — swapped in below the lg breakpoint.
const BrandMobileHeader = ({
  brandName,
  icon,
  accent,
}: {
  brandName: string;
  icon: ReactNode;
  accent: Accent;
}) => {
  const styles = ACCENT_STYLES[accent];
  return (
    <div className={`flex items-center justify-between gap-3 border-b ${styles.paleBorder} px-4 py-3 lg:hidden`}>
      <div className="flex min-w-0 items-center gap-2">
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white ${styles.text} ring-1 ${styles.ring}`}>
          {icon}
        </span>
        <h3 className="truncate text-sm font-bold text-slate-900">
          {brandName} <span className={styles.text}>Products</span>
        </h3>
      </div>
      <Link
        to="/products"
        className={`inline-flex flex-shrink-0 items-center gap-1 text-xs font-semibold ${styles.text}`}
      >
        View All
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
};

const ProductFamilySection = ({
  eyebrow,
  brandName,
  children,
}: {
  eyebrow: string;
  brandName: string;
  children: ReactNode;
}) => {
  return (
    <div className="mt-12 border-t border-slate-200 pt-10 first:mt-10">
      <div className="mb-7 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          {eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-semibold uppercase tracking-tight text-slate-900 sm:text-2xl">
          <span className="text-[#075eb3]">{brandName}</span> Products
        </h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Brand carousel — working prev/next + active-state tracking         */
/* ------------------------------------------------------------------ */

const BrandCarousel = ({ onSelect }: { onSelect: (path: string) => void }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  // Get the scroll distance for exactly one card (card width + gap).
  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    return card.offsetWidth + gap;
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const step = getStep() || el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Auto-advance one card at a time, looping back to the start at the end.
  // Pauses whenever the person interacts with the carousel, then resumes.
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const step = getStep();
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 2600);
    return () => clearInterval(interval);
  }, [isPaused]);

  const pauseThenResume = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 4000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative mt-8">
      <button
        type="button"
        aria-label="Previous product brand"
        onClick={() => scrollByAmount("left")}
        disabled={!canScrollLeft}
        className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#06356f] text-white shadow-md transition enabled:hover:bg-[#075eb3] disabled:cursor-not-allowed disabled:opacity-30 sm:left-3"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="w-full p-3 sm:p-5"
        onPointerDown={pauseThenResume}
        onTouchStart={pauseThenResume}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden"
        >
          {brandCategories.map((brand) => (
            <button
              key={brand.name}
              type="button"
              onClick={() => onSelect(brand.path)}
              className="group flex min-w-[30%] flex-shrink-0 snap-start flex-col items-center p-1.5 text-center transition sm:min-w-0 sm:flex-1 sm:basis-0 sm:p-3"
            >
              <div className="flex h-20 w-full items-center justify-center sm:h-36">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-h-20 max-w-full object-contain transition duration-300 group-hover:scale-105 sm:max-h-36"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-xs font-bold text-slate-900 sm:mt-4 sm:text-base">
                {brand.name}
              </h3>
              {/* <span className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-[#075eb3] px-1 py-1.5 text-[9px] font-semibold text-white transition group-hover:bg-[#06356f] sm:mt-4 sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm">
                View Products
              </span> */}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next product brand"
        onClick={() => scrollByAmount("right")}
        disabled={!canScrollRight}
        className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#06356f] text-white shadow-md transition enabled:hover:bg-[#075eb3] disabled:cursor-not-allowed disabled:opacity-30 sm:right-3"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

const Home = () => {
  const navigate = useNavigate();

  const openBrand = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <style>{`
        @keyframes home-rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-home-rise {
          animation: home-rise 0.7s ease both;
        }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#063b7e]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Dallas engineering team reviewing construction plans"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003b7c] via-[#075eb3]/85 to-[#075eb3]/40" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-md bg-white/12 px-4 py-2 text-xs font-medium text-blue-50 ring-1 ring-white/25 md:text-sm">
              Next-Gen DampProof Wallcare Products
            </p>
            <h1 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
              Scientific Excellence
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-blue-50 md:text-lg">
              Backed by advanced research and cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#06356f] shadow-lg shadow-blue-950/20 transition hover:bg-blue-50"
              >
                Explore Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-white/45 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <marquee className="block">
            <div className="inline-flex items-center gap-12 pr-12">
              <span className="inline-flex items-center gap-4 whitespace-nowrap">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#075eb3]">
                  <Award className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-relaxed text-slate-700">
                  Recognized as India's only manufacturer of Next-Gen buildings
                  that meet international standards.
                </span>
              </span>
              <span className="inline-flex items-center gap-4 whitespace-nowrap border-l border-blue-100 pl-12">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#075eb3]">
                  <FlaskConical className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-relaxed text-slate-700">
                  DALLAS is an international waterproof building product,
                  endorsed by engineers and made with scientific material research.
                </span>
              </span>
            </div>
          </marquee>
        </div>
      </section>

      {/* Products */}
      <ProductsShowcase scrollOnMount={false} />

      {/* Reviews */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={sectionTitleClass}>Customer Reviews</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#075eb3]" />
            <p className="mt-4 text-center text-sm font-medium text-slate-600">
              Hear what our satisfied customers have to say about our waterproofing services
            </p>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {reviewCards.map((review, index) => (
              <AnimatedSection key={review.name} delay={index * 0.08}>
                <Link
                  to="/testimonials"
                  className="block overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_10px_28px_rgba(15,78,140,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(15,78,140,0.14)]"
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-48 w-full object-cover sm:h-52"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-[#075eb3]">{review.name}</h3>
                      <div className="flex gap-0.5 text-[#f5b301]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                      {review.title}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className={sectionTitleClass}>Why Choose Dallas Ready Plast?</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#075eb3]" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium leading-relaxed text-slate-600">
              Built for contractors and homeowners who need reliable quality, practical pricing, and long-lasting wall protection.
            </p>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseReasons.map((reason, index) => (
              <AnimatedSection key={reason.label} delay={index * 0.04}>
                <div className="group flex h-full flex-col rounded-xl border border-blue-100 bg-white p-5 shadow-[0_12px_30px_rgba(15,78,140,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#075eb3]/35 hover:shadow-[0_18px_42px_rgba(15,78,140,0.13)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#075eb3] ring-1 ring-blue-100 transition group-hover:bg-[#075eb3] group-hover:text-white">
                      <reason.icon className="h-5 w-5" />
                    </div>
                    <span className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-950">
                    {reason.label}
                  </h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature system */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className={sectionEyebrowClass}>The Dallas Difference</span>
            <h2 className={`${sectionTitleClass} mt-4`}>Why Dallas Wallcare Stands Apart</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#075eb3]" />
          </AnimatedSection>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.3fr] lg:gap-8">
            {/* Photo-anchored intro panel */}
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_44px_rgba(15,78,140,0.14)]">
                <img
                  src="https://images.pexels.com/photos/5493658/pexels-photo-5493658.jpeg"
                  alt="Construction worker applying Dallas wall plaster"
                  className="h-64 w-full object-cover sm:h-72"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06356f] via-[#06356f]/55 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                    Built for modern wallcare
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">
                    A practical system for stronger, cleaner, longer-lasting surfaces.
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm font-medium leading-relaxed text-slate-600">
                Dallas combines factory-controlled manufacturing, material research,
                and field support so customers get consistent performance from
                product selection through application.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { icon: FlaskConical, value: "R&D", label: "Research-led formulas" },
                  { icon: Factory, value: "Direct", label: "Factory pricing" },
                  { icon: Building2, value: "Site", label: "Application support" },
                  { icon: Leaf, value: "Eco", label: "Safer production" },
                ].map(({ icon: StatIcon, value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-blue-200 hover:shadow-sm"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#075eb3]">
                      <StatIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#075eb3]">{value}</p>
                      <p className="truncate text-[11px] font-medium text-slate-500">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Numbered feature grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featureCards.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.05}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_14px_32px_rgba(15,78,140,0.1)]">
                    <span className="pointer-events-none absolute -right-2 -top-3 select-none text-3xl font-semibold text-slate-50 transition group-hover:text-blue-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#075eb3] transition group-hover:bg-[#075eb3] group-hover:text-white">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 overflow-hidden rounded-2xl bg-[#075eb3] p-6 text-white shadow-[0_18px_44px_rgba(7,94,179,0.2)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h3 className="text-base font-semibold">Need project guidance?</h3>
              <p className="mt-2 text-sm font-medium text-blue-50">
                Talk to Dallas Wallcare for product selection, pricing, and site support.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#075eb3] transition hover:bg-blue-50"
            >
              <Phone className="h-4 w-4" /> Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
