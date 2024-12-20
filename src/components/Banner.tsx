import { cn } from "@/lib/utils";
import React from "react";

const Banner = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={
        (cn(
          "container relative flex flex-col justify-between h-full max-w-[68rem] px-10 mx-auto xl:px-0 mt-5"
        ),
        className)
      }>
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-12 text-lg text-gray-500">{description}</p>
    </div>
  );
};

export default Banner;
