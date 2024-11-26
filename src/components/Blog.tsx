'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from './Banner'
import { ArrowBigDownDash, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import BlogCard from './BlogCard'
import { useGetBlog } from '@/services/blog.service'

const Blog = () => {

  const {data, isFetching} = useGetBlog();

  return (
    <div>
        <div className="container relative flex flex-col justify-between h-full max-w-[68rem] px-10 mx-auto xl:px-0 mt-10">
    <div className="flex gap-10">
      <Image src="/image/maa-kali-hero.JPG" alt="" className="rounded" width={500} height={500} />
      <div className="flex flex-col gap-5 max-w-">
      <div className="flex justify-between">
       <h5 className="text-xl dark:text-gray-300">Maa Kali Hardware - <span className="text-lg text-gray-400">&copy; {new Date().getFullYear()}</span></h5>
       <Image src="/image/logo-maa-kali.png" alt="" width={30} height={30}/>
      </div>
       <h1 className="text-2xl font-bold">Welcome to the Hardware - Maa Kali Hardware</h1>
       <h2 className="flex text-xl items-center"><ArrowBigDownDash className="animate-bounce"/> Our Goal</h2>
       <h2 className="capitalize text-gray-300"> 
        Our goal not only includes of providing with the product but also with the best customer service. Test it our For yourself. 
        <span className="flex mt-2">
        हाम्रो उदेश्य भनेको राम्रो सर्वीस र कस्तमर सयातिस्फक्सन रहेको छ ।  आयर अफै महसुस गर्नु होस । 
        </span>
        
       </h2>
      <Link href='https://www.google.com/maps/contrib/116341759877772330718/place/ChIJjdKQYS8b6zkRSNDqGQZpbHU/@27.68163,85.3973336,17z/data=!4m6!1m5!8m4!1e2!2s116341759877772330718!3m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D' target="_blank">
       <Button className="w-[10rem] font-bold">Vist Us</Button></Link>
            </div>
      </div>
      </div>
     <Banner title="Blogs" description="" />
     <div className='flex flex-wrap justify-center w-[60rem] m-auto'>
     {isFetching ? <h1><Loader2 className='animate-spin'/> Loading...</h1> :<BlogCard data={data} />}
   
     </div>
    </div>
  )
}

export default Blog