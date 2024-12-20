"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useGetGallery } from "@/services/gallery.service";
import { Loader2 } from "lucide-react";

interface GalleryData {
  id: string;
  image: string;
  title: string;
}

interface GalleryProps {
  image: string;
  title: string;
  data?: GalleryData[];
}

const PhotoGallery: React.FC<GalleryProps> = () => {
  const { data, isLoading } = useGetGallery();
  const [images, setImages] = useState<string[]>([]);

  React.useEffect(() => {
    if (data && Array.isArray(data)) {
      // Extract the `images` arrays from each object and flatten them
      const flattenedImages = data.flatMap((item) => item?.image || []);
      console.log(
        "flattenedImages",
        data.flatMap((item) => item?.image)
      );
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
                <h1 className="text-base flex flex-col sm:flex-row sm:text-xl md:text-2xl lg:text-4xl font-bold text-white">
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
      <div className="flex gap-[3.9rem] justify-center flex-wrap md:w-[94rem] m-auto">
        {isLoading ? (
          <div className="flex justify-center">
            {" "}
            <Loader2 className="animate-spin" /> loading...
          </div>
        ) : (
          images?.map((item, i) => {
            return (
              <Image
                src={item}
                key={i}
                className="w-[25rem] h-[25rem] object-cover"
                width={500}
                height={500}
                alt="maa kali hardware"
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
