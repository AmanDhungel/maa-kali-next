'use client'
import { Navbar } from "@/components/Navbar";
import video from '@/../public/video/video.mp4'
import { ArrowDownNarrowWide, PencilRuler } from "lucide-react";
import ReactPlayer from "react-player";
import ServicesPage from "@/components/ServicesPage";
// import heroVideo from '../../public/asset/video.mp4'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-4 mr-4">
        <Navbar/>
      </div>
    <div className="flex flex-col items-center mt-4 gap-4">
      <h1 className="text-2xl flex gap-2 items-center">Welcome To The <span className="underline underline-offset-8 font-bold">Hardware</span><PencilRuler/></h1>
      <h2 className="text-xl ">Watch Our Testimonials</h2>
      <div className="animate-bounce">
      <ArrowDownNarrowWide/>
      </div>
      <div className="flex gap-3">
      <ReactPlayer url={video} controls playsinline={true} 
        height="400px" 
        style={{
          marginTop: '-20px',
          borderRadius: '20px',  
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',  
        }}
        />
      <ReactPlayer
      url="https://www.youtube.com/watch?v=2mspw9lyXvQ"
      height="380px" 
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          },
          facebook: {
            appId: '12345'
          }
        }}
      />
      </div>
    </div>
    <ServicesPage/>
    </div>
  );
}
