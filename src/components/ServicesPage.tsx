"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import Banner from "./Banner";
import { useGetService } from "@/services/service.service";
import Link from "next/link";

const ServicesPage = () => {
  const { data: serviceData, isFetching } = useGetService();

  const [data, setData] = React.useState(serviceData?.slice(0, 4));

  useEffect(() => {
    setData(serviceData?.slice(0, 4));
  }, [serviceData]);

  if (isFetching) {
    return (
      <div className="flex gap-3 justify-center items-center">
        <Loader2 className="animate-spin" /> Loading...
      </div>
    );
  }
  return (
    <div className="container relative flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
      <Banner
        title="Our Work"
        description="Testimonials of our Work - The Showcase"
      />
      <div className="flex  flex-wrap ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  w-full">
          {data?.map((item) => {
            return (
              <div
                className="flex-col 2xl:flex-row w-[80vw] md:w-[40vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[30vw] 2xl:h-[20rem] flex mt-5"
                key={item._id}>
                <Image
                  src={item?.image ? item?.image : "/image/maa-kali-hero.JPG"}
                  alt=""
                  className="rounded rounded-r-none w-[67vw] lg:w-[30vw]  2xl:w-[15vw] max-h-[35rem] "
                  width={650}
                  height={650}
                />
                <div className="w-[67vw] md:w-[40vw] xl:w-[35vw] border-t-0 2xl:border-t space-y-5 border 2xl:border-l-0  p-5 rounded 2xl:w-[15vw] flex flex-col justify-evenly ">
                  <h1 className="text-xl font-semibold">Title</h1>
                  <p className="sm:line-clamp-2 2xl:line-clamp-5 text-justify w-[57vw] md:w-[30vw] xl:w-[25vw] 2xl:w-[10vw] break-words">
                    {" "}
                    {item?.description}
                  </p>
                  <Link href={`/services/${item._id}`}>
                    <Button className="flex items-center gap-1">
                      Learn More
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
