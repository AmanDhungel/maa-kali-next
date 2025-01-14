"use client";
import { ArrowDownNarrowWide, PencilRuler } from "lucide-react";
import React from "react";
import ServicesPage from "./ServicesPage";
import Image from "next/image";
import OurWork from "./OurWork";
import ProductTestimonials from "./ProductTestimonials";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullPage = () => {
  useGSAP(() => {
    gsap.to("#iframe", { x: 0, opacity: 1, duration: 2, ease: "bounce.inOut" });
    gsap.to(".img", {
      delay: 2,
      opacity: 1,
      duration: 0.5,
      ease: "power2",
    });
  });
  return (
    <>
      <div className="overflow-hidden flex flex-col gap-4">
        <div className="flex flex-col items-center mt-20 gap-4">
          <h1 className="text-2xl flex gap-2 items-center ml-12">
            Welcome To The{" "}
            <span className="underline underline-offset-8 font-bold">
              Hardware
            </span>
            <PencilRuler />
          </h1>
          <h2 className="text-xl ml-12">visit us Physically</h2>
          <div className="animate-bounce hidden md:block">
            <ArrowDownNarrowWide className="ml-12" />
          </div>
          <div className="xl:flex gap-3 max-lg:flex-col  max-lg:gap-3  ">
            <Image
              src="/image/maa-kali-hero.JPG"
              className="rounded-xl w-[80vw]  xl:w-[40vw] 2xl:w-[30vw] opacity-0 img"
              alt=""
              width={650}
              height={450}
            />
            <div className="w-[80vw]  xl:w-[40vw] 2xl:w-[30vw]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57420.707630779245!2d85.39663416233422!3d27.655358189762683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b2f6190d28d%3A0x756c690619ead048!2sMaa%20Kali%20Hardware%2C%20Radhe%20Radhe!5e0!3m2!1sen!2snp!4v1729655231448!5m2!1sen!2snp"
                width="100%"
                height="100%"
                id="iframe"
                style={{
                  border: 0,
                  borderRadius: "0.75rem",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transform: "translateX(-350px)",
                  opacity: 0,
                }}
                allowFullScreen={true}
                loading="lazy"
                className="max-xl:mt-4"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <OurWork />
        <ServicesPage />
        <ProductTestimonials />
      </div>
    </>
  );
};

export default FullPage;
