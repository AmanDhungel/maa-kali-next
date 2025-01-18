import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ImageCard = ({
  image,
  isLoading,
}: {
  image: any;
  isLoading: boolean;
}) => {
  const animateImageRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (isLoading && animateImageRef.current) {
      gsap.to(animateImageRef.current, {
        opacity: 1,
        duration: 0.1,
        x: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: animateImageRef.current,
          start: "top 90%",
          end: "bottom 50%",

          onLeave: () => {
            gsap.to(animateImageRef.current, {
              autoAlpha: 0,
              opacity: 0,
              duration: 0.1,
              x: -200,
            });
          },
          onEnterBack: () => {
            gsap.to(animateImageRef.current, {
              autoAlpha: 2,
              opacity: 1,
              duration: 0.1,
              x: 0,
            });
          },
        },
      });
    }
  }, [animateImageRef, isLoading]);

  return (
    <Image
      src={image}
      alt="Picture by Maa Kali Hardware"
      width={500}
      height={500}
      loading="lazy"
      ref={animateImageRef as any}
      className="card__image w-[20rem] h-[30rem] object-cover transition-transform duration-500 ease-in-out hover:scale-110 translate-x-28 opacity-0"
    />
  );
};

export default ImageCard;
