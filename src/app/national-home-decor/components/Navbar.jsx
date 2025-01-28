"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              width={500}
              height={500}
              className="h-10 w-10 mr-2"
              src={"/image/logo-maa-kali.png"}
              alt="Logo"
            />
            <span className="text-xl tracking-tight">National Home Decor</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <Link href={"/maa-kali-hardware"}>
              <Button>Maa Kali Hardware</Button>
            </Link>
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <Link href={"/maa-kali-hardware"}>
                <Button>Maa Kali Hardware</Button>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
