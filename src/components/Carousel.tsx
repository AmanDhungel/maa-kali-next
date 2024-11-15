import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


export function CarouselDemo({item}: {item : string[]}) {
  return (
    <Carousel className="w-[150px] max-w-xs h-full">
      <CarouselContent className="h-full">
        {item.map((items, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{
                    <img src={items} alt="sds" width={100} height={100} />
                    }</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="mr-10 "/>
      <CarouselPrevious className="ml-10"/>
    </Carousel>
  )
}
