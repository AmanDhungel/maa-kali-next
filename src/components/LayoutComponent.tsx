import React from "react";
import { Navbar } from "./Navbar";
import Provider from "@/lib/query-client-provider";
import { Toaster } from "./ui/toaster";
import Footer from "./Footer";

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const data = [
    {
      title: "Home",
      href: "/maa-kali-hardware",
    },
    {
      title: "Services",
      href: "/maa-kali-hardware/services",
    },
    {
      title: "product",
      href: "/maa-kali-hardware/products",
    },
    {
      title: "Blog",
      href: "/maa-kali-hardware/blog",
    },
    {
      title: "Contact",
      href: "/maa-kali-hardware/contact",
    },
    {
      title: "gallery",
      href: "/maa-kali-hardware/gallery",
    },
  ];
  return (
    <>
      <div className="p-8 flex justify-center">
        <Navbar data={data} />
      </div>
      <Provider>{children}</Provider>
      <Toaster />
      <Footer />
    </>
  );
};

export default LayoutComponent;
