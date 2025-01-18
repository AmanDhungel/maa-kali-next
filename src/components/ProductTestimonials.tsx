"use client";
import React, { useEffect, useRef } from "react";
import Banner from "./Banner";
import Product from "./Product";
import { useGETProduct } from "@/services/product.service";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

import { usePathname } from "next/navigation";

export interface ProductProps {
  id: string;
  title: string;
  color: string;
  price: string;
  image: string;
  brand: string;
  years: string;
  description: string;
  choice: string;
  message?: string;
}

const ProductTestimonials = () => {
  const { data, isLoading, isFetched } = useGETProduct();

  const [productData, setProductData] = React.useState<
    ProductProps[] | undefined
  >(data);
  const animateRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/maa-kali-hardware") {
      setProductData(data?.slice(0, 3));
    } else {
      setProductData(data);
    }
  }, [data, pathname]);

  return (
    <>
      <div>
        <div className="container flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
          <Banner
            title="Products"
            description="Some of the Product we sell are listed Down - Take a look"
          />
        </div>
        <div className="flex flex-wrap justify-center m-auto max-w-[82rem] gap-10">
          {isLoading ? (
            <div className="flex">
              <Loader2 className="animate-spin" /> Loading...
            </div>
          ) : productData && productData.length > 0 ? (
            productData.map((pdata) => (
              <div key={pdata.id} ref={animateRef}>
                <Product {...pdata} isLoading={isFetched} />
              </div>
            ))
          ) : (
            <span className="font-bold text-2xl"> No Product Available</span>
          )}
        </div>

        {pathname === "/maa-kali-hardware" ? (
          <Link href="/products" className="flex justify-center items-center">
            <Button
              variant={"outline"}
              className="flex justify-center text-blue-500 mt-10">
              View More Products
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <span id="endProductsAnimation"></span>
    </>
  );
};

export default ProductTestimonials;
