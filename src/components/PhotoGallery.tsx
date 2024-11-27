'use client'
import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import { useGetGallery } from '@/services/gallery.service'
import { Loader2 } from 'lucide-react'
import { CarouselDemo } from './Carousel'

interface GalleryProps {
    id: string
    image: string
    title: string
    data : {
        id: string
        image: string
        title: string
    }[]
}

const PhotoGallery : React.FC<GalleryProps> = () => {

   const {data, isLoading} = useGetGallery()

  return (
    <div>
<div className="h-screen  py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 -ml-[22rem] flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <Banner title='Gallery' description=' This is a section where we display our work for you to explore and see for yourself,'/>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <p 
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image src="/image/door-fittings.jpg" width={500} height={500} loading="lazy" alt="Photo by Maa kali hardware" 
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
            </p>
           
            <p 
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <Image src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} loading="lazy" alt="Photo by Maa kali hardware" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span> */}
            </p>
           
            <p
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <Image src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600" width={500} height={500} loading="lazy" alt="Photo by Maa kali hardware" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span> */}
            </p>
         
            <p
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image src="/image/maa-kali-hero.JPG" width={500} height={500} loading="lazy" alt="Photo by Maa kali hardware" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span> */}
            </p>
        </div>
    </div>
</div>
<div className='flex gap-[3.9rem] justify-center flex-wrap w-[94rem] m-auto my-20'>
{isLoading ? <div className='flex justify-center'><Loader2 className='animate-spin'/> loading</div> :
data?.map((item) =>{ 
console.log('item', item.image)
return(<CarouselDemo
item={item?.image}
imageClassName='w-[20rem] h-[30rem] object-cover'
key={item._id}
className="card__image w-[20rem] h-[30rem] cursor-grab active:cursor-grabbing"
/>
)})}
</div>
    </div>
  )
}

export default PhotoGallery