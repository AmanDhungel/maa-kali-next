import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export const FullPageServiceCard = (item: any, isFetched: boolean) => {
  const animateServiceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isFetched && animateServiceRef) {
      gsap.to(animateServiceRef.current, {
        opacity: 1,
        duration: 0.5,
        x: 0,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: animateServiceRef.current,
          start: "top 70%",
          end: "top 0%",
          endTrigger: "#serviceEnd",

          onLeave: () => {
            gsap.to(animateServiceRef.current, {
              autoAlpha: 0,
              opacity: 0,
              duration: 1,
              x: -200,
              stagger: 0.1,
            });
          },

          onLeaveBack: () => {
            gsap.to(animateServiceRef.current, {
              autoAlpha: 0,
              opacity: 0,
              duration: 1,
              x: -200,
              stagger: 0.1,
            });
          },

          onEnterBack: () => {
            gsap.to(animateServiceRef.current, {
              autoAlpha: 2,
              opacity: 1,
              duration: 1,
              x: 0,
            });
          },
          onEnter: () => {
            gsap.to(animateServiceRef.current, {
              autoAlpha: 2,
              opacity: 1,
              duration: 1,
              x: 0,
            });
          },
        },
      });
    }
  }, [isFetched, animateServiceRef]);

  return (
    <div
      className="flex-col 2xl:flex-row w-[80vw] md:w-[40vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[30vw] 2xl:h-[20rem] flex mt-5 opacity-0 -translate-x-96"
      ref={animateServiceRef}>
      <Image
        src={item?.item.image ? item?.item.image : "/image/maa-kali-hero.JPG"}
        alt=""
        className="rounded rounded-r-none w-[67vw] lg:w-[30vw]  2xl:w-[15vw] max-h-[35rem] "
        width={650}
        height={650}
      />
      <div className="w-[67vw] md:w-[40vw] xl:w-[35vw] border-t-0 2xl:border-t space-y-5 border 2xl:border-l-0  p-5 rounded 2xl:w-[15vw] flex flex-col justify-evenly ">
        <h1 className="text-xl font-semibold">Title</h1>
        <p className="sm:line-clamp-2 2xl:line-clamp-5 text-justify w-[57vw] md:w-[30vw] xl:w-[25vw] 2xl:w-[10vw] break-words">
          {" "}
          {item?.item.description}
        </p>
        <Link href={`/services/${item.item._id}`}>
          <Button className="flex items-center gap-1">
            Learn More
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};
