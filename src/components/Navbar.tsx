import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import DarkModeToggle from "./DarkMode"
import Link from "next/link"

type data = {
    href? : string,
    title? : string
}
  
  export function Navbar({data} : {data? : data[]}) {
    return (
      <Menubar className="p-4  fixed z-50">
        {data?.map((navdata, index) => (
        <Link href={navdata?.href ? navdata?.href : ''} key={index} className="hover:bg-gray-200 dark:hover:bg-gray-800 ">
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
  