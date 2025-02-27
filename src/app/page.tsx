import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Maa Kali Hardware X National Home Decor",
  description: "Hardware near you, Construction company",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  redirect("/maa-kali-hardware");
}
