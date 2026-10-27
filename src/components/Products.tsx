import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  dallasProducts,
  drProofProducts,
  ceramikhaProducts,
  matrixProducts,
  brandCategories,
} from "../data/productsData";

const BLUE = "#075eb3";

const ProductsPage = ({ scrollOnMount = true }: { scrollOnMount?: boolean }) => {
  const navigate = useNavigate();
  const [activeBrand, setActiveBrand] = useState(0);

  useEffect(() => {
    if (!scrollOnMount) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scrollOnMount]);

  const brandStrip = [
    ...brandCategories,
    { id: "matrix", name: "Matrix", image: matrixProducts[0]?.image },
  ];

  const productGroups = [
    {
      brandId: "dallas",
      title: "DALLAS PRODUCTS",
      subtitle: "India's 1st Heat Gen DampProof Wallcare Products",
      products: dallasProducts,
      tone: "blue",
    },
    {
      brandId: "Ceramikha",
      title: "CERAMIKHA PRODUCTS",
      subtitle: "Green Building. Safer Homes, Healthier Children",
      products: ceramikhaProducts,
      tone: "blue",
    },
    {
      brandId: "matrix",
      title: "MATRIX PRODUCTS",
      subtitle: "India's 1st Heat Gen Wallcare Products",
      products: matrixProducts,
      tone: "blue",
    },
    {
      brandId: "drproof",
      title: "DR. PROOF PRODUCTS",
      subtitle: "India's 1st Heat Gen DampProof Dr. Proof Products",
      products: drProofProducts,
      tone: "blue",
    },
  ];

  const nextBrand = () => {
    setActiveBrand((current) => (current + 1) % brandStrip.length);
  };

  const previousBrand = () => {
    setActiveBrand((current) =>
      current === 0 ? brandStrip.length - 1 : current - 1
    );
  };

  const openProduct = (id: string) => navigate(`/products/${id}`);

  const selectedBrandId = brandStrip[activeBrand]?.id;
  const orderedProductGroups = [...productGroups].sort((a, b) => {
    if (a.brandId === selectedBrandId) return -1;
    if (b.brandId === selectedBrandId) return 1;
    return 0;
  });

  const toneClasses = {
    blue: {
      border: "border-blue-300",
      icon: "bg-[#075eb3]",
      title: "text-[#075eb3]",
      button: "bg-[#075eb3] hover:bg-[#064f9c]",
      accent: "bg-blue-100 text-[#075eb3]",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white pb-10 pt-10">
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="scroll-reveal inline-flex rounded-lg bg-[#075eb3] px-5 py-1.5 text-sm font-semibold tracking-wide text-white">
            OUR PRODUCTS
          </span>
          <h1 className="scroll-reveal mx-auto mt-3 max-w-3xl text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
            Quality Products for Stronger, Lasting Structures
          </h1>
          <p className="scroll-reveal mt-3 text-base text-slate-600">
            High performance construction materials for every need
          </p>
          <div className="scroll-reveal mx-auto mt-4 h-1 w-16 rounded-full bg-[#075eb3]" />

          <div className="scroll-reveal relative mt-8 rounded-xl border border-blue-100 bg-white px-14 py-6 shadow-[0_18px_45px_rgba(7,94,179,0.14)]">
            <button
              type="button"
              onClick={previousBrand}
              aria-label="Previous brand"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0a3f88] text-white transition hover:bg-[#075eb3]"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {brandStrip.slice(0, 5).map((brand, index) => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => setActiveBrand(index)}
                  className={`group border-r border-blue-100 px-3 last:border-r-0 ${
                    activeBrand === index ? "text-[#075eb3]" : "text-slate-900"
                  }`}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="mx-auto h-20 w-full object-contain transition group-hover:scale-105"
                  />
                  <span className="mt-3 block text-base font-semibold">
                    {brand.name}
                  </span>
                  <span
                    className={`mx-auto mt-2 block h-1 w-14 rounded-full ${
                      activeBrand === index ? "bg-[#075eb3]" : "bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={nextBrand}
              aria-label="Next brand"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0a3f88] text-white transition hover:bg-[#075eb3]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-7 px-4 py-8">
        {orderedProductGroups.map((group) => {
          const tone = toneClasses[group.tone as keyof typeof toneClasses];
          const products = group.products.slice(0, 5);

          return (
            <div
              key={group.title}
              className={`scroll-reveal relative overflow-hidden rounded-xl border ${tone.border} bg-white p-5 shadow-[0_14px_40px_rgba(7,94,179,0.08)]`}
            >
              <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
                <aside className="flex flex-col justify-center rounded-xl bg-white/45 p-4">
                  <h2
                    className={`text-2xl font-semibold leading-tight ${tone.title}`}
                  >
                    {group.title.split(" ")[0]}
                    <span className="block text-slate-950">
                      {group.title.replace(`${group.title.split(" ")[0]} `, "")}
                    </span>
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">
                    {group.subtitle}
                  </p>
                </aside>

                <div
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
                >
                  {products.map((product) => (
                    <article
                      key={product.id}
                      className="scroll-reveal flex min-h-[260px] flex-col rounded-xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <button
                        type="button"
                        onClick={() => openProduct(product.id)}
                        className="flex flex-1 flex-col text-left"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="mx-auto h-32 w-full object-contain"
                        />
                        <h3 className="mt-4 text-center text-base font-semibold text-slate-950">
                          {product.name}
                        </h3>
                        <p className="mt-2 flex items-center justify-center gap-1 text-center text-xs font-medium text-slate-600">
                          <BadgeCheck size={14} className={tone.title} />
                          {(product.features || product.benefits || [])[0] ||
                            "High Performance"}
                        </p>
                      </button>
                      <button
                        type="button"
                        onClick={() => openProduct(product.id)}
                        className={`mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition ${tone.button}`}
                      >
                        View Details
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div className="scroll-reveal rounded-xl bg-gradient-to-r from-[#083a88] to-[#075eb3] px-6 py-5 text-white shadow-lg">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-semibold">
                Looking for the Right Solution?
              </h2>
              <p className="mt-1 text-base text-blue-50">
                Browse our full range of products and technical specifications.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#075eb3] shadow-md transition hover:bg-blue-50"
            >
              Explore All Products
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
