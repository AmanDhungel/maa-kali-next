import Image from "next/image"
import Banner from "./Banner"
import { ServiceAccordion } from "./Accordian"

const Services = () => {
    const data = [
        {
        title: "Plumbing",
        description: "We take Any Leakage to full home plumbing",
    },
        {
        title: "Painting",
        description: `We make Color of your choice, As expert in contruction We give you suggestion on what color to put according to the quality & your budget.  
        We Also give suggestion of contrast of color and choices of color that effect your house in beauty as well as your well being`,
    },
    {
        title: "Parqueting",
        description: `Boring and carpet floor have outdate in this ear so, we also have parqueting. Parqueting is a wood piece that is fit into each other to fit in the room.
        Main advantahe of parqueting is it is insulated it is not to cold in winter season and not too hot in summer.`,
    },
        {
        title: "Tile & marbles",
        description: "As We all have bathroom and Toilet where water gets on the floor for that we have tiles & marbles. To make your home more beautiful and interactive",
    },
    {
        title: "Doors, Windows & fittings",
        description: "Door and windows and fitting we have different types of door that might be alminium, wooden, readmade door and many more. Not only door we have windows and all the fitting that is required for both door and windows.",
    },
    {
        title: "Repairing",
        description: "Repairing any thing related to house from electrical issues to plumbing to Paiting.",
    },
    {
        title: "Fixing Water Leakage",
        description: `Fixing Water Leakage is one of the service that we provide. In this service we identify the source of water leakage and fix it in the best possible way. We have a team of experts who are well trained in fixing water leakage. We use the best quality material to fix the leakage so that it will not happen again. We also provide suggestion on how to prevent water leakage in future.`,
    },
    {
        title: "Fixing RO/Water filter",
        description: `Fixing RO/Water when fixing RO/Water filter We check the filter, clean it, and replace it with the new one if required. We use the best quality material to fix the filter so that it will not happen again. We also provide suggestion on how to maintain the filter in the future.`,
    },
    {
        title: "Fixing Doors & Windows",
        description: `Fixing Doors & Windows includes a quick and efficient service to address any issues with your doors and windows, ensuring they function properly.`,
    },

]
  return (
    <>
    <div className="container relative flex flex-col justify-between h-full max-w-[68rem] px-10 mx-auto xl:px-0 mt-10">
        <Banner title="Services" description="सेवा हरु तल्ल उल्लेखिथ गरियको छ । "/>
    <div className="flex gap-3">
        <div className="overflow-hidden">
        <ServiceAccordion data={data} className="w-[20rem] mr-24"/>
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