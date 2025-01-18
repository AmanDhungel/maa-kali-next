"use client";
import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";
import Banner from "./Banner";
import { useGetService } from "@/services/service.service";

import { FullPageServiceCard } from "./fullPageServiceCard";

const ServicesPage = () => {
  const { data: serviceData, isFetching, isFetched } = useGetService();

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
    <div className="container flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2 min-h-[50vh] ourWorkCard">
      <Banner
        title="Our Work"
        description="Testimonials of our Work - The Showcase"
      />
      <div className="flex  flex-wrap ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  w-full ">
          {data?.map((item) => {
            return (
              <FullPageServiceCard
                isFetched={isFetched}
                key={item._id}
                item={item}
              />
            );
          })}
        </div>
      </div>
      <span id="serviceEnd"></span>
    </div>
  );
};

export default ServicesPage;
