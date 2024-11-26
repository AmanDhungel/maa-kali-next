import Image from 'next/image'
import React, { useState } from 'react'

const ImageCard = ({ image }) => {


  return (
    <div className="flex gap-3">
      {image?.map((item, i) => (
        <Image
          src={item}
          key={i}
          alt="Picture by Maa Kali Hardware"
          width={800}
          height={800}
          className="card__image w-[20rem] h-[30rem] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      ))}
    </div>
  );
};

export default ImageCard;
