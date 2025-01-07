import Image from "next/image";
import React from "react";

const Product = ({
  title,
  color,
  price,
  image,
  choice,
  brand,
  years,
}: {
  title: string;
  color: string;
  price: string;
  image?: string;
  choice?: string;
  brand?: string;
  years?: string;
}) => {
  return (
    <div className="mt-6 flex gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
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
