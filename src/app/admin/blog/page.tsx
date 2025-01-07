import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Maa Kali Hardware X National Home Decor",
  description: "Hardware near you, Construction company",
};

const BackendBlog = dynamic(() => import("@/components/BackendBlog"));

export default BackendBlog;
