import React from "react";
import GalleryComponent from "../components/Gallery";
import PageBanner from "../components/PageBanner";
import bannerImage from "../images/Banner.png";

const Gallery = () => {
  return (
    <>
      <PageBanner
        eyebrow="GALLERY"
        title="Projects, Products, and Site Work in View"
        description="Explore Dallas Wallcare project visuals and construction solution applications across residential, commercial, and industrial spaces."
        image={bannerImage}
        imageAlt="Dallas Wallcare gallery banner"
      />
      <GalleryComponent />
    </>
  );
};

export default Gallery;
