import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import DarkModeToggle from "./DarkMode"
  
  export function Navbar() {
    return (
      <Menubar className="p-4  fixed">
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Services</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Blog</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Contact us</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
         <DarkModeToggle/>
        </MenubarMenu>
      </Menubar>
    )
  }
  