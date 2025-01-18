/* eslint-disable */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useGetGallery } from "@/services/gallery.service";
import { Loader2 } from "lucide-react";
import ImageCard from "./ImageCard";

export interface GalleryProps {
  id: string;
  image: string;
  title: string;
}

const PhotoGallery = () => {
  const { data, isLoading, isFetched } = useGetGallery();
  const [images, setImages] = useState<string[]>([]);

  React.useEffect(() => {
    if (data && Array.isArray(data)) {
      const flattenedImages = data.flatMap((item) => item?.image || []);
      setImages([...flattenedImages]);
    }
  }, [data]);

  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex justify-center">
            <Image
              src={"/image/maa-kali-hero.JPG"}
              alt="Banner Image"
              className="backdrop-blur-xl brightness-50 w-[67vw] rounded-b-xl  h-[50vh]"
              width={500}
              height={500}
            />
            <div className="absolute top-[30vh]">
              <div className="flex flex-col items-center justify-center m-auto">
                <h1 className="text-base flex flex-col gap-4 sm:flex-row sm:text-xl md:text-2xl lg:text-4xl font-bold text-white">
                  Welcome To the Museum of{" "}
                  <span className="grey-bg text-base sm:text-xl md:text-2xl bg-gradient-to-r from-slate-200 to-amber-300 via-amber-400 p-1 bg-clip-text lg:text-4xl">
                    Maa Kali Hardware
                  </span>
                </h1>
                <h1 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold mt-10 text-white">
                  Explore the Gallery!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-[6rem] m-auto flex flex-col justify-center mb-  text-2xl font-bold">
        Images
        <hr className="border-black text-black border w-[2.5rem] mb-10  items-start dark:border-white" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-2 w-[60vw] m-auto">
        {isLoading ? (
          <div className="flex justify-center">
            {" "}
            <Loader2 className="animate-spin" /> loading...
          </div>
        ) : (
          images?.map((item, i) => {
            return <ImageCard image={item} key={i} isLoading={isFetched} />;
          })
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
