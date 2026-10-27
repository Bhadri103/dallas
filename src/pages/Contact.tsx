import React from 'react';
import ContactComponent from '../components/Contact';
import PageBanner from '../components/PageBanner';
import bannerImage from '../images/Banner.jpeg';

const Contact = () => {
  return (
    <>
      <PageBanner
        eyebrow="CONTACT"
        title="Talk to Dallas Wallcare for Product and Project Support"
        description="Reach our team for pricing, technical support, dealership inquiries, and site guidance."
        image={bannerImage}
        imageAlt="Dallas Wallcare contact banner"
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
