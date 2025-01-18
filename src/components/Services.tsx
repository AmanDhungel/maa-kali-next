"use client";
import Banner from "./Banner";
import { useGetService } from "@/services/service.service";
import { Loader2 } from "lucide-react";
import ScrollableCard from "./ScrollableCard";

const Services = () => {
  const { data: serviceData, isFetching, isFetched } = useGetService();

  return (
    <>
      <div
        className="container relative  justify-between h-full max-w-[68rem] px-10 mx-auto xl:px-0 mt-10"
        id="work">
        <Banner
          title="Our Work"
          description="Testimonials of our Work - The Showcase"
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="">
          {isFetching ? (
            <p className="flex gap-3 justify-center items-center">
              <Loader2 className="animate-spin" /> Loading...
            </p>
          ) : (
            <div className="flex flex-wrap justify-center items-center w-full h-full">
              <ScrollableCard isLoading={isFetched} data={serviceData as any} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
