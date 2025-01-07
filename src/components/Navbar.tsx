"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import DarkModeToggle from "./DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

type data = {
  href?: string;
  title?: string;
};

export function Navbar({ data }: { data?: data[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menubar
        className={`p-2 flex h-full flex-col md:opacity-100 justify-center  max-sm:w-full  md:p-4 gap-4  md:flex-row transition-all duration-500 ease-in-out ${
          isOpen ? "h-[43vh] md:h-full opacity-100" : "0px opacity-0 max-sm:h-0"
        }`}>
        {data?.map((navdata, index) => (
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href={navdata?.href ? navdata?.href : ""}
            key={index}
            className={` ${
              pathname === navdata?.href ? "animated-grey text-black" : ""
            } `}>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                {navdata?.title}
              </MenubarTrigger>
            </MenubarMenu>
          </Link>
        ))}
        <MenubarMenu>
          <DarkModeToggle />
        </MenubarMenu>
      </Menubar>
      <MenuIcon
        className="ml-auto transition-all duration-500 ease-in-out md:hidden"
        style={{
          cursor: "pointer",
          transform: isOpen ? `rotate(${90 * 4}deg)` : "rotate(0deg)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
}
