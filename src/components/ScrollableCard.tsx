import React from "react";
import { ServiceCard } from "./ServicesCard";

export interface Props {
  data: {
    _id: string;
    image: string;
    title: string;
    description: string;
    shortDescription: string;
  }[];
  isLoading?: boolean;
}
export interface ApiProps {
  _id: string;
  image: string;
  title: string;
  description: string;
  shortDescription: string;
}

const ScrollableCard = ({ data, isLoading }: Props) => {
  return (
    <div className="flex flex-wrap">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 2xl:grid-cols-3 2xl:gap-12  w-full  justify-between">
        {data?.map((item) => {
          return (
            <ServiceCard item={item} isLoading={isLoading} key={item._id} />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollableCard;
