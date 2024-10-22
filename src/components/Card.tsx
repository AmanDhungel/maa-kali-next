import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Card = ({href, title, description, image}:{href? : string,title?: string, description?: string, image?:string}) => {
  return (
    <div>
    <Link href={href ? href : '#'} className="flex flex-col items-center max-w-[90rem] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[40rem] md:max-h-52 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover w-[40rem] rounded-t-lg h-[40rem] md:h-auto md:max-w-56 md:rounded-none md:rounded-s-lg" width={750} height={750} src={image ?
         image : 
          'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <Button variant={'outline'} className='w-40'>Read More</Button>
        </div>
    </Link>
    </div>
  )
}

export default Card