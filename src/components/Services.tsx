'use client'
import Image from "next/image"
import Banner from "./Banner"
import { ServiceAccordion } from "./Accordian"
import { useGetService } from "@/services/service.service";
import {  Loader2 } from "lucide-react";

const Services = () => {
    const {data: serviceData, isFetching} = useGetService();

  return (
    <>
    <div className="container relative  justify-between h-full max-w-[68rem] px-10 mx-auto xl:px-0 mt-10">
        <Banner title="Services" description="सेवा हरु तल्ल उल्लेखिथ गरियको छ ।"/>
    <div className="flex gap-36">
        <div className="overflow-hidden max-w-[20rem]">
        {isFetching ? <p className="flex gap-3"><Loader2 className="animate-spin"/> Loading...</p> :
        <ServiceAccordion data={serviceData} className="max-w-[15rem] mr-24"/>}
        </div>
        <div className="flex flex-col">
      <Image src="/image/maa-kali-hero.JPG" alt="" className="rounded" width={500} height={500} />
      <div className="grid grid-cols-3 gap-5 mt-4">
        <Image src="/image/basins.jpg" alt="Basins" className="rounded max-h-[10rem] object-cover" width={153} height={200}/>
        <Image src="/image/RO.jpg" alt="RO System" className="rounded max-h-[10rem] object-cover" width={153} height={200}/>
        <Image src="/image/taps.jpg" alt="Taps" className="rounded max-h-[10rem] object-cover" width={153} height={200}/>
      </div>
      </div>
    </div>
     </div>
    </>
  )
}

export default Services