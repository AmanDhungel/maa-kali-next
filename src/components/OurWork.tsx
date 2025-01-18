"use client";
import {
  Cable,
  DoorOpen,
  Grid2x2,
  Hammer,
  House,
  LampCeiling,
  PaintBucket,
  PaintRoller,
  RotateCcw,
  ShieldCheck,
  Unplug,
  Wrench,
} from "lucide-react";
import Banner from "./Banner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurWork = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#services", {
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        end: "top 30%",
        endTrigger: "#endTrigger",

        onLeave: () => {
          gsap.to("#services", {
            autoAlpha: 0,
            opacity: 0,
            duration: 1,
            x: -200,
            stagger: 0.1,
          });
        },
        onEnterBack: () => {
          gsap.to("#services", {
            autoAlpha: 2,
            opacity: 1,
            duration: 1,
            x: 0,
            stagger: 0.1,
          });
        },
      },
    });
  });

  return (
    <>
      <div className="container  flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
        <Banner
          title="Services"
          description="Here Is A Few Of The Awesome Services We Provide."
          className="mt-10"
        />
      </div>
      <div className="container  flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 justify-items-stretch max-sm:grid-cols-1">
          <div
            className="flex flex-col gap-3  text-justify opacity-0"
            id="services">
            <div className="flex gap-3">
              <Hammer className="dark:text-gray-500" />
              <Wrench className="rotate-[270deg] -ml-11 dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">Plumbing</h1>
            <h2 className="line-clamp-6  overflow-hidden">
              Maa Kali Hardware provides all kinds of plumbing products for
              homes, offices, and industries. We sell strong pipes, taps,
              fittings, water tanks, and more from trusted brands. Whether you
              need to fix leaks, replace old parts, or set up a new plumbing
              system, we have the right products for you.
            </h2>
          </div>
          <div
            className="flex flex-col gap-3  text-justify opacity-0"
            id="services">
            <div className="flex gap-3">
              <PaintBucket className="dark:text-gray-500" />
              <PaintRoller className="dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">Painting</h1>
            <h2 className="line-clamp-6  overflow-hidden">
              We offer high-quality paints, brushes, rollers, and other painting
              tools from trusted brands. Whether you’re looking to refresh
              walls, protect surfaces, or add a decorative touch, we have the
              right products for the job.
            </h2>
          </div>
          <div
            className="flex flex-col gap-3  text-justify opacity-0"
            id="services">
            <div className="flex gap-3">
              <Cable className="dark:text-gray-500" />
              <Unplug className="dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">Electrical Wiring</h1>
            <h2 className="line-clamp-6  overflow-hidden">
              Maa Kali Hardware offers products for all your electrical wiring
              and fixing needs. We provide high-quality wires, switches,
              sockets, circuit breakers, and other electrical items for homes,
              offices, and industries. Whether you&apos;re setting up a new
              connection, repairing old wiring, remember us.
            </h2>
          </div>
          <div
            className="flex flex-col gap-3  text-justify opacity-0"
            id="services">
            <div className="flex gap-3">
              <LampCeiling className="dark:text-gray-500" />
              <ShieldCheck className="dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">False ceiling</h1>
            <h2 className="line-clamp-6  overflow-hidden">
              We offer high-quality paints, brushes, rollers, and other painting
              tools from trusted brands. Whether you’re looking to refresh
              walls, protect surfaces, or add a decorative touch, we have the
              right products for the job.
            </h2>
          </div>
          <div
            className="flex flex-col gap-3  text-justify opacity-0"
            id="services">
            <div className="flex gap-3">
              <DoorOpen className="dark:text-gray-500" />
              <Grid2x2 className="dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">Door & Window Fitting</h1>
            <h2 className="line-clamp-6  overflow-hidden">
              We offer high-quality paints, brushes, rollers, and other painting
              tools from trusted brands. Whether you’re looking to refresh
              walls, protect surfaces, or add a decorative touch, we have the
              right products for the job.
            </h2>
          </div>
          <div
            className="flex flex-col gap-3  text-justify opacity-0"
            id="services">
            <div className="flex gap-3">
              <House className="dark:text-gray-500" />
              <RotateCcw className="dark:text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold">
              Basically Every Part Of The Home
            </h1>
            <h2 className="line-clamp-6  overflow-hidden">
              From floor to ceiling and everything , we have the products for
              all . We offer a wide range of products including the kitchen,
              bathroom, living room, and more. Whether you’re looking to update
              your decor, improve your storage solutions, or enhance your
              lighting, we have the right products for the job.
            </h2>
          </div>
        </div>
        <div id="endTrigger"></div>
      </div>
    </>
  );
};

export default OurWork;
