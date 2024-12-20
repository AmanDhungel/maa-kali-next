import Image from "next/image";
import Banner from "./Banner";
import { RulerIcon } from "lucide-react";

const OurWork = () => {
  return (
    <>
      <div className="container relative flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
        <Banner
          title="Our Work"
          description="Testimonials of our Work - The Showcase"
        />
      </div>
      <div className="flex max-sm:flex-col flex-wrap justify-center items-center gap-3 mb-20 w-[70vw] m-auto max-sm:gap-14">
        <div className="flex flex-col gap-3 w-[30vw] max-sm:w-[80vw] text-justify">
          <RulerIcon />
          <h1 className="text-2xl font-bold">Testimonials</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            praesentium, iusto facilis ratione laborum illo aliquid accusamus
            nesciunt eveniet culpa laboriosam veritatis libero aut inventore
            fuga id expedita beatae. Natus!
          </h2>
        </div>
        <div className="flex flex-col gap-3 w-[30vw] max-sm:w-[80vw] text-justify">
          <RulerIcon />
          <h1 className="text-2xl font-bold">Testimonials</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            praesentium, iusto facilis ratione laborum illo aliquid accusamus
            nesciunt eveniet culpa laboriosam veritatis libero aut inventore
            fuga id expedita beatae. Natus!
          </h2>
        </div>
        <div className="flex flex-col gap-3 w-[30vw] max-sm:w-[80vw] text-justify">
          <RulerIcon />
          <h1 className="text-2xl font-bold">Testimonials</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            praesentium, iusto facilis ratione laborum illo aliquid accusamus
            nesciunt eveniet culpa laboriosam veritatis libero aut inventore
            fuga id expedita beatae. Natus!
          </h2>
        </div>
        <div className="flex flex-col gap-3 w-[30vw] max-sm:w-[80vw] text-justify">
          <RulerIcon />
          <h1 className="text-2xl font-bold">Testimonials</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            praesentium, iusto facilis ratione laborum illo aliquid accusamus
            nesciunt eveniet culpa laboriosam veritatis libero aut inventore
            fuga id expedita beatae. Natus!
          </h2>
        </div>
      </div>
    </>
  );
};

export default OurWork;
