import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import LayoutComponent from "@/components/LayoutComponent";

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
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
