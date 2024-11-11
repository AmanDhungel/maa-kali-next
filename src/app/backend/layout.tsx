import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/lib/query-client-provider";

export const metadata: Metadata = {
  title: "Maa Kali Hardware",
  description: "Hardware near me, Best hardware in nepal, Hardware in bhaktapur, Radhe radhe hardware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const data = [
    {
     title: 'Add Blog',
     href: '/backend/blog',
    },
    {
     title: 'Add Photos to Gallery',
     href: '/backend/gallery',
    },
    {
     title: 'Add serives',
     href: '/backend/service',
    },
    ]
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="p-8 flex justify-center">
        <Navbar data={data}/>
        </div>
        <Provider>
        {children}
        </Provider>
        <Footer/>
      </body>
    </html>
  );
}
