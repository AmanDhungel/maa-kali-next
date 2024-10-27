import Image from 'next/image'
import React from 'react'

const Product = ({title, color, price, image} : {title: string, color: string; price: string, image?:string}) => {
  return (
                <div className="mt-6 flex gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image src={image ? image :"https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600" }
                    alt="Front of men&#039;s Basic Tee in black." 
                    width={550}
                    height={550}
                    className="w-[22rem] object-cover object-center lg:h-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0 text-black dark:text-white"></span>
                        {title}
                    </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">color : {color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Rs: {price}</p>
                </div>
            </div>
    </div>

  )
}

export default Product