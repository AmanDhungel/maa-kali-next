import React from "react";
import HeroSection from "@/app/national-home-decor/components/HeroSection";
import FeatureSection from "@/app/national-home-decor/components/FeatureSection";
import Workflow from "@/app/national-home-decor/components/Workflow";
import Navbar from "@/app/national-home-decor/components/Navbar";

const HeroSec = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
      </div>
    </>
  );
};

export default HeroSec;
