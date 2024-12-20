"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useGetSingleBlog } from "@/services/blog.service";
import { Loader2 } from "lucide-react";

const SinglePageBlog = ({ params: { id } }: { params: { id: string } }) => {
  const { data, isLoading } = useGetSingleBlog(id);

  if (isLoading) {
    return (
      <p>
        <Loader2 className="animate-spin" /> Loading...
      </p>
    );
  }
  return (
    <>
      <div className="flex w-3/4 m-auto space-x-5">
        <Image
          src={data?.image[0] ? data?.image[0] : ""}
          width={500}
          height={500}
          alt="image"
          className="w-3/4 m-auto h-[33.2rem] bg-slate-500 rounded-xl max-lg:hidden"
        />

        <div className="space-y-1">
          <p>Related Blogs</p>
          <hr className="w-full rounded m-auto border-2 border-gray-500" />
          <div className="flex flex-col md:flex-row bg-white max-w-[35rem] rounded-xl border border-gray-500">
            <div className="flex flex-col text-black justify-between p-4">
              <h1 className="w-full md:w-[8vw] overflow-hidden">Title Here</h1>
              <h2 className="">Star here</h2>
              <h3>description here</h3>
              <Button>View More</Button>
            </div>
            <Image
              src="/image/maa-kali-hero.JPG"
              width={500}
              height={500}
              alt="image"
              className="max-w-[13.8rem] rounded-b-xl max-h-[10rem] xl:min-w-[10rem] md:min-h-[10rem] xl:mr-0  mr-auto mb-[1px] xl:mb-0   ml-auto xl:rounded-bl-none md:rounded-r-xl"
            />
          </div>
          <div className="flex flex-col md:flex-row bg-white max-w-[35rem] rounded-xl border border-gray-500">
            <div className="flex flex-col text-black justify-between p-4">
              <h1 className="w-full md:w-[8vw] overflow-hidden">Title Here</h1>
              <h2 className="">Star here</h2>
              <h3>description here</h3>
              <Button>View More</Button>
            </div>
            <Image
              src="/image/maa-kali-hero.JPG"
              width={500}
              height={500}
              alt="image"
              className="max-w-[13.8rem] rounded-b-xl max-h-[10rem] xl:min-w-[10rem] md:min-h-[10rem] xl:mr-0  mr-auto mb-[1px] xl:mb-0   ml-auto xl:rounded-bl-none md:rounded-r-xl"
            />
          </div>
          <div className="flex flex-col md:flex-row bg-white max-w-[35rem] rounded-xl border border-gray-500">
            <div className="flex flex-col text-black justify-between p-4">
              <h1 className="w-full md:w-[8vw] overflow-hidden">Title Here</h1>
              <h2 className="">Star here</h2>
              <h3>description here</h3>
              <Button>View More</Button>
            </div>
            <Image
              src="/image/maa-kali-hero.JPG"
              width={500}
              height={500}
              alt="image"
              className="max-w-[13.8rem] rounded-b-xl max-h-[10rem] xl:min-w-[10rem] md:min-h-[10rem] xl:mr-0  mr-auto mb-[1px] xl:mb-0   ml-auto xl:rounded-bl-none md:rounded-r-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-[73vw] justify-center m-auto">
        <h1>
          {" "}
          <span className="text-2xl font-bold flex flex-col mt-5">
            {" "}
            Title{" "}
          </span>{" "}
          {data?.shortDescription}
        </h1>
        <h1 className="text-2xl font-bold mt-10">Description</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.description ? data?.description : "",
          }}
          className="line-clamp-5"></div>
        {data?.image[1] ? (
          <Image
            src={data?.image[1] ? data?.image[1] : ""}
            width={500}
            height={500}
            alt="image"
            className="m-auto mt-10"
          />
        ) : (
          ""
        )}

        <div
          className="line-clamp-none"
          style={{
            WebkitLineClamp: "initial",
          }}>
          {data?.description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePageBlog;
