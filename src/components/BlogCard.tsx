import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Button } from "./ui/button";

interface BlogCardProps {
  data: {
    _id: string;
    title: string;
    shortDescription: string;
    image: string[];
  }[];
}

const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-[4.2rem] lg:grid-cols-3">
      {data.map((item) => (
        <div className="flex justify-center items-center " key={item._id}>
          <div className="container flex flex-col items-center space-y-5">
            <div className="card w-72 cursor-pointer">
              <figure className="relative  overflow-hidden max-h-96">
                <Image
                  src={item?.image[0]}
                  alt="Picture by Hardware near me"
                  width={800}
                  height={800}
                  className="card__image shadow-lg w-[20rem] h-[30rem] object-cover 
            transform transition-transform duration-500 ease-in-out hover:-translate-y-2 "
                />
              </figure>
              <div className="border-none shadow-none p-3 ">
                <h2 className="font-bold leading-10 tracking-wider overflow-clip overflow-ellipsis capitalize">
                  {" "}
                  {item?.title?.slice(0, 32)}
                </h2>
                <p className="mt-4 text-sm leading-5 w-[10vw]  h-10 text-wrap overflow-hidden">
                  {item?.shortDescription}
                </p>
                <Button className="mt-4 grey-bg" variant={"secondary"}>
                  <Link
                    href={`/maa-kali-hardware/blog/${item?._id}`}
                    className="text-white font-bold">
                    Read more
                  </Link>
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-400">by Maa Kali Hardware</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default BlogCard;
