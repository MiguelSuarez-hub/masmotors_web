"use client";

import { LINKS } from "@/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={cn("sticky top-0 left-0 w-full z-10 bg-body", isScrolled && "bg-white/50")}>
      <nav className="flex items-center justify-between p-2 mx-5">
        <div className="flex justify-center gap-3 items-center hover:scale-105">
          <Link href="/" className="text-xl font-bold italic md:flex gap-2">
            <span className="special-text">MASmotor&apos;s</span>
            <p className="hidden md:flex">| Ingenieria Automotriz</p>
          </Link>
        </div>
        <div className="justify-center gap-3 items-center hidden lg:flex text-gray-500">
          <ul className="flex gap-4 items-center">
            {LINKS.map((link) => (
              <li
                key={link.label}
                className={`${
                  pathname === link.href && "border-b-2  border-green-600"
                } text-xl hover:text-black`}
              >
                <Link href={`/${link.href}`}>{link.label}</Link>
              </li>
            ))}
            {/* <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary`}
            >
              <button
                onClick={() => {
                  changeAuth("register");
                  router.push('/auth')
                }}
              >
                Registrate
              </button>
            </li>
            <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary`}
            >
              <button
                onClick={() => {
                  changeAuth("login");
                  router.push('/auth')
                }}
              >
                Inicia sesión
              </button>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};
