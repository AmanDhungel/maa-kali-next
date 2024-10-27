import Image from 'next/image'
import React from 'react'

const ImageCard = () => {
  return (
    <div>
        <Image src="/image/maa-kali-hero.JPG" alt="Picture by Amber Kipp" width={800} height={800} 
        className="card__image w-[20rem] h-[30rem] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110" />
    </div>
  )
}

export default ImageCard