import { Navbar } from "@/components/Navbar";
import { CardDemo } from "@/components/shadcnCard";
import { ArrowBigDown } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maa Kali Hardware X National Home Decor",
  description: "Hardware near you, Construction company",
};


export default function Home() {
  const notifications = [
    {
      title: "Plubming",
    },
    {
      title: "Painting",
    },
    {
      title: "Hardware",
    },
  ]
  const nationalhomedecornotifications = [
    {
      title: "Contruction",
    },
    {
      title: "Repairing",
    },
    {
      title: "Interior Design",
    },
  ]
  return (
    <>
    <div className="flex justify-center mt-4">
    <Navbar/>
    </div>
    <div className="flex flex-col items-center justify-center gap-4 mt-32">
    <h1 className="text-3xl">Select One To <span className="underline underline-offset-8 font-bold animate-pulse tracking-[0.18rem]">Visit!</span></h1>
    <ArrowBigDown className="w-10 h-10 font-bold animate-bounce"/>
    </div>
    <div className="flex items-center justify-center gap-4 mt-24">
      <Link href='/maa-kali-hardware'>
      <CardDemo notifications={notifications} title="Maa Kali Hardware" description="We have a Hardware shop"/>
      </Link>
      <Link href='/national-home-decor'>
      <CardDemo notifications={nationalhomedecornotifications} title="National Home Decor" description="We are Construction Company"/>
      </Link>
    </div>
    </>
  );
}
