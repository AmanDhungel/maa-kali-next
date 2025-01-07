"use client";
import { ArrowDownNarrowWide, PencilRuler } from "lucide-react";
import React from "react";
import { Navbar } from "./Navbar";
import ReactPlayer from "react-player/lazy";
import ServicesPage from "./ServicesPage";

const HomeDecorFullPage = () => {
  return (
    <>
      <div>
        <div className="flex justify-center mt-4 mr-4">
          <Navbar />
        </div>
        <div className="flex flex-col items-center mt-20 gap-4">
          <h1 className="text-2xl flex gap-2 items-center">
            Welcome To The{" "}
            <span className="underline underline-offset-8 font-bold">
              Hardware
            </span>
            <PencilRuler />
          </h1>
          <h2 className="text-xl ">Watch Our Testimonials</h2>
          <div className="animate-bounce">
            <ArrowDownNarrowWide />
          </div>
          <div className="xl:flex max-lg:flex-col gap-3 max-sm:flex-col">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=2mspw9lyXvQ"
              height="380px"
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: "12345",
                },
              }}
            />
          </div>
        </div>
        <ServicesPage />
      </div>
    </>
  );
};

export default HomeDecorFullPage;
