import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/lib/query-client-provider";
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
      title: "Add Blog",
      href: "/admin/blog",
    },
    {
      title: "Add Photos to Gallery",
      href: "/admin/gallery",
    },
    {
      title: "Add serives",
      href: "/admin/service",
    },
    {
      title: "Add Product",
      href: "/admin/product",
    },
  ];
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="p-8 flex justify-center">
          <Navbar data={data} />
        </div>
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
