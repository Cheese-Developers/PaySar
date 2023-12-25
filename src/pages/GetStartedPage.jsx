import React from "react";
import HeroSection from "../components/GetStartUi/HeroSection";
import FeatureSection from "../components/GetStartUi/FeatureSection";
import AboutSection from "../components/GetStartUi/AboutSection";

const GetStartedPage = () => {
  return (
    <>
      <section className="hero-section">
        <HeroSection />
      </section>
      <section className="h-screen overflow-hidden hero-section">
        <AboutSection />
      </section>
      <section className="h-screen overflow-hidden close-section">
        <FeatureSection />
      </section>
    </>
  );
};

export default GetStartedPage;
