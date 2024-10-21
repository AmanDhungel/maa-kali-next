import React from 'react'
import { Button } from './ui/button'
import {services} from '../utils/service-sample-data.js'
import Card from './Card'

const ServicesPage = () => {
  return (
    <div>
        <div className='flex justify-center mt-24'>
       <Button variant={'outline'} className='text-xl underline font-bold p-4 tracking-wider underline-offset-4'>Services</Button>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-10'>
        {
            services.map((item) => (
                <Card title={item.title} description={item.description} key={item.id} 
                href='https://images.pexels.com/photos/28097397/pexels-photo-
                28097397/free-photo-of-cycling-path-meanders-through-rolling-green-hills-
                with-stunning-mountain-range-in-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            ))
        }
        </div>
    </div>
  )
}

export default ServicesPage