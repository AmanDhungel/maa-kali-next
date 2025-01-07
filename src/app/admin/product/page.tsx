import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Maa Kali Hardware - Product",
  description: "Hardware near you, Construction company",
};
const BackendProduct = dynamic(() => import("@/components/BackendProduct"));

export default BackendProduct;
