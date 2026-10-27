import React from "react";
import ProductsComponent from "../components/Products";
import PageBanner from "../components/PageBanner";
import bannerImage from "../images/Banner.jpeg";

const Products = () => {
  return (
    <div className="bg-white">
      <PageBanner
        eyebrow="PRODUCTS"
        title="High-Performance Wallcare Products for Lasting Structures"
        description="Browse Dallas, Ceramikha, Matrix, and Dr. Proof product solutions for modern construction needs."
        image={bannerImage}
        imageAlt="Dallas Wallcare product range banner"
      />
      <ProductsComponent />
    </div>
  );
};

export default Products;
