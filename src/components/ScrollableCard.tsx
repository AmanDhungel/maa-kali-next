import Image from "next/image";
import React from "react";

export interface Props {
  data: {
    _id: string;
    image: string;
    title: string;
    description: string;
    shortDescription: string;
  }[];
}
export interface ApiProps {
  _id: string;
  image: string;
  title: string;
  description: string;
  shortDescription: string;
}

const ScrollableCard = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 2xl:grid-cols-4 justify-items-center w-full">
        {data?.map((item) => {
          return (
            <div
              className="flex-col w-[80vw] md:w-[44vw] lg:w-[44vw]  xl:w-[24vw] 2xl:w-[17vw] flex mt-5"
              key={item._id}>
              <Image
                src={item?.image ? item?.image : "/image/maa-kali-hero.JPG"}
                alt=""
                className="rounded-b-none w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:[25vw] lg:h-[40vw]  2xl:w-[17vw] 2xl:h-[17vw] rounded-2xl"
                width={250}
                height={250}
              />
              <div className=" rounded-2xl rounded-t-none flex flex-col flex-wrap w-[80vw]  md:w-[44vw]  min-h-[11rem]  xl:w-[24vw] border-t-0 2xl:border-t space-y-5 border   p-5 2xl:w-[17vw]">
                <h1 className="text-xl font-semibold w-full overflow-hidden overflow-ellipsis">
                  {item?.title}
                </h1>
                <h2 className="whitespace-pre-wrap break-words w-full line-clamp-5">
                  {item?.description}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollableCard;
