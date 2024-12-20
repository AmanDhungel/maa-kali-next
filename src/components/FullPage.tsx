"use client";
import { ArrowDownNarrowWide, PencilRuler } from "lucide-react";
import React from "react";
import ServicesPage from "./ServicesPage";
import Image from "next/image";
import OurWork from "./OurWork";
import ProductTestimonials from "./ProductTestimonials";

const FullPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col items-center mt-20 gap-4">
          <h1 className="text-2xl flex gap-2 items-center ml-12">
            Welcome To The{" "}
            <span className="underline underline-offset-8 font-bold">
              Hardware
            </span>
            <PencilRuler />
          </h1>
          <h2 className="text-xl ml-12">visit us Physically</h2>
          <div className="animate-bounce">
            <ArrowDownNarrowWide className="ml-12" />
          </div>
          <div className="xl:flex gap-3 max-lg:flex-col  max-lg:gap-3  max-sm:flex-col ">
            <Image
              src="/image/maa-kali-hero.JPG"
              className="rounded-xl h-[28.2rem]"
              alt=""
              width={650}
              height={450}
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57420.707630779245!2d85.39663416233422!3d27.655358189762683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b2f6190d28d%3A0x756c690619ead048!2sMaa%20Kali%20Hardware%2C%20Radhe%20Radhe!5e0!3m2!1sen!2snp!4v1729655231448!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{
                minWidth: "32rem",
                border: 0,
                borderRadius: "0.75rem",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              allowFullScreen={true}
              loading="lazy"
              className="max-xl:mt-4"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ServicesPage />
        <OurWork />
        <ProductTestimonials />
      </div>
    </>
  );
};

export default FullPage;
