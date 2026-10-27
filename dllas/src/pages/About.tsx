import React from 'react';
import AboutComponent from '../components/About';
import PageBanner from '../components/PageBanner';
import bannerImage from '../images/Banner.png';

function About() {
  return (
    <div className="bg-white">
      <PageBanner
        eyebrow="ABOUT DALLAS"
        title="Built on Research, Quality, and Construction Experience"
        description="Discover the legacy, scientific foundation, and customer-first values behind Dallas Wallcare."
        image={bannerImage}
        imageAlt="Dallas Wallcare product banner"
      />
      <AboutComponent />
    </div>
  );
}

export default About;
