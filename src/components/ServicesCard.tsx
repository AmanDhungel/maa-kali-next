import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const ServiceCard = (item: any, isLoading: boolean) => {
  const animateServiceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoading && animateServiceRef.current) {
      gsap.to(animateServiceRef.current, {
        opacity: 1,
        duration: 0.5,
        y: 0,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: animateServiceRef.current,
          start: "top 70%",
          end: "bottom 80%",
        },
      });
    }
  }, [isLoading, animateServiceRef]);
  return (
    <div
      className="flex-col w-[84vw] md:w-[44vw] lg:w-[44vw]  xl:w-[24vw] 2xl:w-[17vw] flex mt-5 opacity-0 -translate-y-36"
      ref={animateServiceRef}>
      <Image
        src={item?.item.image ? item?.item.image : "/image/maa-kali-hero.JPG"}
        alt=""
        className="rounded-b-none w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:[25vw] lg:h-[40vw]  2xl:w-[17vw] 2xl:h-[17vw] rounded-2xl"
        width={250}
        height={250}
      />
      <div className=" rounded-2xl rounded-t-none flex flex-col flex-wrap w-[80vw]  md:w-[44vw]  min-h-[11rem]  xl:w-[24vw] border-t-0 2xl:border-t space-y-5 border   p-5 2xl:w-[17vw]">
        <h1 className="text-xl font-semibold w-full overflow-hidden overflow-ellipsis">
          {item?.item.title}
        </h1>
        <h2 className="whitespace-pre-wrap break-words w-full line-clamp-5">
          {item?.item.description}
        </h2>
      </div>
    </div>
  );
};
