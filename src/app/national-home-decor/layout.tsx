import type { Metadata } from "next";
import "../globals.css";

import React from "react";
import Provider from "@/lib/query-client-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maa Kali Hardware",
  description:
    "Hardware near me, Best hardware in nepal, Hardware in bhaktapur, Radhe radhe hardware",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Provider>{children}</Provider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
