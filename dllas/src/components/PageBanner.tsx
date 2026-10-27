import React from "react";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
}

const PageBanner = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageFit = "cover",
}: PageBannerProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <img
        src={image}
        alt={imageAlt}
        className={`absolute inset-0 h-full w-full ${
          imageFit === "contain" ? "object-contain p-5" : "object-cover"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="min-h-[260px] max-w-3xl py-10 text-white md:min-h-[320px] md:py-14">
          <span className="inline-flex rounded-lg bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90">
            {description}
          </p>
          <div className="mt-5 h-1 w-16 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
