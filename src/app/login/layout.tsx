import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
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
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="p-8 flex justify-center">
          <Navbar />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
