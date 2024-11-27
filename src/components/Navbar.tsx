'use client'
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import DarkModeToggle from "./DarkMode"
import Link from "next/link"
import { usePathname } from "next/navigation"

type data = {
    href? : string,
    title? : string
}
  
  export function Navbar({data} : {data? : data[]}) {
    const pathname = usePathname();
  
    return (
      <Menubar className="p-4  fixed z-50">
        {data?.map((navdata, index) => (
        <Link href={navdata?.href ? navdata?.href : ''} key={index} className={` ${pathname === navdata?.href ? 'animated-grey text-black' : ''} `}>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">{navdata?.title}</MenubarTrigger>
        </MenubarMenu>
        </Link>
        ))}
        <MenubarMenu>
         <DarkModeToggle/>
        </MenubarMenu>
      </Menubar>
    )
  }
  