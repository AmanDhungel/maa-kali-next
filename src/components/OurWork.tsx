import Image from "next/image"
import Banner from "./Banner"

const OurWork = () => {
  return (
    <>
    <Banner title='Our Work' description='Testimonials of our Work - The Showcase'/>
    <div className="flex flex-col justify-center items-center gap-3 mb-20">
        <div className="flex justify-center items-start gap-3">
        <Image 
        src="https://images.pexels.com/photos/27182326/pexels-photo-27182326/free-photo-of-icebergs-on-seashore-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        className="rounded" 
        alt="image" width={560} height={550} />
        <div className="flex gap-3 max-lg:flex-col max-xl:flex-col">
        <Image 
        src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=300" 
        className="xl:min-h-[8.2rem] rounded max-lg:h-[7.38rem]"
        alt="image" width={180} height={180} />
        <Image 
        src="https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=300" 
        className="xl:min-h-[8.2rem] rounded max-lg:h-[7.38rem]"
        alt="image" width={180} height={180} />
        <Image 
        src="https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=300" 
        className="xl:min-h-[8.2rem] rounded max-lg:h-[7.38rem]"
        alt="image" width={180} height={180} />
        </div>
     
        </div>
        <div className="flex gap-3 items-end -ml-2 xl:-mt-[15.4rem]">
        <div className="flex gap-3 max-lg:flex-col max-lg:max-h-[23.7rem] max-xl:flex-col">
        <Image 
        src="https://images.pexels.com/photos/32997/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" 
        className="xl:min-h-[8.2rem] rounded max-lg:h-[7.38rem]"
        alt="image" width={180} height={180} />
        <Image 
        src="https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className="xl:min-h-[8.2rem] rounded max-lg:h-[7.38rem] "
        alt="image" width={180} height={180} />
        <Image 
        src="https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className="xl:min-h-[8.2rem] rounded max-lg:h-[7.38rem] "
        alt="image" width={180} height={180} />
            </div>

        <Image 
        src="https://images.pexels.com/photos/1580173/pexels-photo-1580173.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className="rounded max-h-[23.7rem]"
        alt="image" width={560} height={550} />
        </div>
    </div>
    </>

  )
}

export default OurWork