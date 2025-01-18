import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

const Product = ({
  title,
  color,
  price,
  image,
  choice,
  brand,
  years,
  isLoading,
}: {
  title: string;
  color: string;
  price: string;
  image?: string;
  choice?: string;
  brand?: string;
  years?: string;
  isLoading?: boolean;
}) => {
  const animateRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  gsap.registerPlugin(ScrollTrigger);
  const gsapProductAnimation = () => {
    gsap.to(animateRef.current, {
      opacity: 1,
      duration: 0.5,
      x: 0,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: animateRef.current,
        start: "top 70%",
        end: "bottom 80%",
        endTrigger: "#endProductsAnimation",
        onLeaveBack: () => {
          gsap.to(animateRef.current, {
            autoAlpha: 0,
            opacity: 0,
            duration: 1,
            x: -200,
            stagger: 0.1,
          });
        },

        onEnter: () => {
          gsap.to(animateRef.current, {
            autoAlpha: 2,
            opacity: 1,
            duration: 1,
            x: 0,
          });
        },
      },
    });
  };

  useEffect(() => {
    if (isLoading && animateRef.current && pathname === "/maa-kali-hardware") {
      gsapProductAnimation();
    } else if (isLoading && animateRef.current) {
      gsapProductAnimation();
    }
  }, [isLoading, animateRef, pathname]);

  return (
    <div
      className="mt-6 flex gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3 opacity-0 translate-x-10"
      ref={animateRef}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={
              image
                ? image[0]
                : "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="Hardware near me"
            width={550}
            height={550}
            className="w-[22.2rem] object-cover object-center lg:h-full"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <div className="flex justify-between">
            <h3 className="text-sm text-gray-700 dark:text-white w-52 overflow-hidden overflow-ellipsis">
              <span
                aria-hidden="true"
                className="absolute inset-0 text-black dark:text-white"></span>
              {title}
            </h3>
            <p className="flex  items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-500">
              color :{" "}
              <p
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}></p>
            </p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Rs: {price}
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Brand: {brand}
            </p>
          </div>
          <hr className="my-2 rounded-xl" />
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {choice ? `${choice} :` : ""} {years ? years : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
