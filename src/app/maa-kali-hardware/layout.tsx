import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/lib/query-client-provider";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export const metadata: Metadata = {
  title: "Maa Kali Hardware",
  description:
    "Hardware near me, Best hardware in nepal, Hardware in bhaktapur, Radhe radhe hardware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en">
      <body className={`antialiased`}>
        <div className="p-8 flex justify-center">
          <Navbar data={data} />
        </div>
        <Provider>{children}</Provider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
