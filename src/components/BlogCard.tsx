import Image from "next/image";

import React from 'react'

const BlogCard = () => {
  return (
<div className="flex justify-center items-center ">
  <div className="container flex flex-col items-center gap-4">
    <div className="card w-72 shadow-lg cursor-pointer">
      <figure className="relative overflow-hidden max-h-96">
        <Image src="/image/maa-kali-hero.JPG" alt="Picture by Amber Kipp" width={800} height={800} className="card__image w-[20rem] h-[30rem] object-cover transform transition-transform duration-500 ease-in-out hover:-translate-y-2 backdrop-blur-xl brightness-50" />
        <figcaption className="absolute top-1/2 left-0 right-0 text-center px-5 text-white transform -translate-y-1/2 transition-transform duration-300">
          <h2 className="font-playfair text-lg leading-7 text-white shadow-md text-wrap">Here's What Your Cat Actually Thinks Of You</h2>
          <p className="mt-4 line-clamp-5 font-light text-sm leading-5 truncate h-10 text-wrap">In ac sem bibendum, posuere leo et, accumsan dolor. Sed lacinia aliquet tellus. Aliquam pellentesque vel diam sit amet euismod. Donec et sem et mi placerat malesuada. Nullam at pharetra elit.</p>
          <a href="#" className="inline-block mt-4 px-4 py-2 border border-white text-white text-sm rounded-lg transition-colors hover:bg-white hover:text-black">Read more</a>
        </figcaption>
      </figure>
    </div>
    <p className="text-sm text-gray-400">by Maa Kali Hardware</p>
  </div>
</div>
  )
}

export default BlogCard


