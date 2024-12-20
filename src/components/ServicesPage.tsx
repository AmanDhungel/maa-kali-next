import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Banner from "./Banner";

const ServicesPage = () => {
  return (
    <div className="container relative flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
      <Banner
        title="Services"
        description="Here is a few of the awesome Services & Products we provide."
        className="mt-10"
      />
      <div className="flex  flex-wrap gap-4">
        <div className="w-[30vw] flex  mt-5">
          <Image
            src="/image/maa-kali-hero.JPG"
            alt=""
            className="rounded rounded-r-none"
            width={250}
            height={250}
          />
          <div className="space-y-5 border border-l-0  p-5 rounded w-[17vw]">
            <h1>Title</h1>
            <p>Lorem</p>
            <Button
              className="flex items-center gap-1"
              onClick={() => console.log("clicked")}>
              Learn More
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-[30vw] flex  mt-5">
          <Image
            src="/image/maa-kali-hero.JPG"
            alt=""
            className="rounded rounded-r-none"
            width={250}
            height={250}
          />
          <div className="space-y-5 border border-l-0  p-5 rounded">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              praesentium, iusto facilis ratione laborum illo aliquid accusamus
              nesciunt eveniet culpa laboriosam veritatis libero aut inventore
              fuga id expedita beatae. Natus!
            </p>
            <Button
              className="flex items-center gap-1"
              onClick={() => console.log("clicked")}>
              Learn More
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-[30vw] flex  mt-5">
          <Image
            src="/image/maa-kali-hero.JPG"
            alt=""
            className="rounded rounded-r-none"
            width={250}
            height={250}
          />
          <div className="space-y-5 border border-l-0  p-5 rounded">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              praesentium, iusto facilis ratione laborum illo aliquid accusamus
              nesciunt eveniet culpa laboriosam veritatis libero aut inventore
              fuga id expedita beatae. Natus!
            </p>
            <Button
              className="flex items-center gap-1"
              onClick={() => console.log("clicked")}>
              Learn More
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="w-[30vw] flex  mt-5">
          <Image
            src="/image/maa-kali-hero.JPG"
            alt=""
            className="rounded rounded-r-none"
            width={250}
            height={250}
          />
          <div className="space-y-5 border border-l-0  p-5 rounded">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              praesentium, iusto facilis ratione laborum illo aliquid accusamus
              nesciunt eveniet culpa laboriosam veritatis libero aut inventore
              fuga id expedita beatae. Natus!
            </p>
            <Button
              className="flex items-center gap-1"
              onClick={() => console.log("clicked")}>
              Learn More
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
