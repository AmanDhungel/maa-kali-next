import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Banner from './Banner'


const ServicesPage = () => {
  return (
    <div className="container relative flex flex-col justify-center h-full max-w-[73.5rem] px-10 mx-auto xl:px-0 mt-5 m-auto left-2">
     <Banner title="Services" description="Here is a few of the awesome Services & Products we provide."/>
    <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-[rgba(20,22,43,1)] dark:bg-white border-2 border-indigo-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className=" flex justify-between w-full my-2 ml-3 text-white text-lg font-bold dark:text-gray-800">Door & fittings
                              <Image src="https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-11 h-11 rounded-full' width={100} height={100} alt="image"/></h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p className="mb-2 dark:text-gray-600 text-white">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                            <Button variant={"outline"}>Learn More<ArrowRight/></Button>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-[rgba(20,22,43,1)] dark:bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="flex justify-between w-full my-2 ml-3 text-white text-lg font-bold dark:text-gray-800">Colors & Painting
                              <Image src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-11 h-11 rounded-full' width={100} height={100} alt="image"/></h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p className="mb-2 dark:text-gray-600 text-white">We have different brands of color and any color from the shades you choose 
                          can be made here.</p>
                            <Button variant={"outline"}>Learn More <ArrowRight/></Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-[rgba(20,22,43,1)] dark:bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="flex justify-between w-full my-2 ml-3 text-lg font-bold text-white dark:text-gray-800">Pipe & fitting
                              <Image src="https://images.pexels.com/photos/3721272/pexels-photo-3721272.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-11 h-11 rounded-full' width={100} height={100} alt="image"/></h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p className="mb-2 text-white dark:text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                            <Button variant={"outline"}>Learn More <ArrowRight/></Button>
                    </div>
                </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-[rgba(20,22,43,1)] dark:bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="flex justify-between w-full my-2 ml-3 text-lg font-bold text-white dark:text-gray-800">Comode & Basin<Image src="https://images.pexels.com/photos/8143713/pexels-photo-8143713.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-11 h-11 rounded-full' width={100} height={100} alt="image"/></h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p className="mb-2 text-white dark:text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                            <Button variant={"outline"}>Learn More <ArrowRight/></Button>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-[rgba(20,22,43,1)] dark:bg-white border-2 border-green-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="flex justify-between w-full my-2 ml-3 text-lg font-bold text-white dark:text-gray-800">Parqueting & Tiles<Image src="https://images.pexels.com/photos/8143713/pexels-photo-8143713.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-11 h-11 rounded-full' width={100} height={100} alt="image"/></h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p className="mb-2 text-white dark:text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                            <Button variant={"outline"}>Learn More <ArrowRight/></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServicesPage