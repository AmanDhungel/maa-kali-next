import Image from 'next/image'
import React from 'react'

const PhotoGallery = () => {
  return (
    <div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/maa-kali-hero.JPG" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/RO.jpg" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/spray.jpg" alt="" width={250} height={250} />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/maa-kali-hero.JPG" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/RO.jpg" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/spray.jpg" alt="" width={250} height={250} />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/maa-kali-hero.JPG" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/RO.jpg" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/spray.jpg" alt="" width={250} height={250} />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/maa-kali-hero.JPG" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/RO.jpg" alt="" width={250} height={250} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/image/spray.jpg" alt="" width={250} height={250} />
        </div>
    </div>
</div>

    </div>
  )
}

export default PhotoGallery