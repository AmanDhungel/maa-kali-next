import React from "react";
import HeroSection from "@/app/national-home-decor/components/HeroSection";
import FeatureSection from "@/app/national-home-decor/components/FeatureSection";
import Workflow from "@/app/national-home-decor/components/Workflow";
import Testimonials from "@/app/national-home-decor/components/Testimonials";
import Navbar from "@/app/national-home-decor/components/Navbar";

const HeroSec = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Testimonials />
    </div>
  );
};

export default HeroSec;
