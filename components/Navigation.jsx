"use client";

import useScrollUp from "@/lib/useScrollUp";
import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrollUp = useScrollUp();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <nav
      className={`${isScrollUp ? "" : "-translate-y-full"} ${
        isOpen ? "bg-primary" : "bg-light"
      } fixed left-0 top-0 z-50 flex w-full flex-col justify-between px-3 py-2 transition-transform duration-500 md:flex-row md:items-center md:px-6 md:py-3 xl:px-16`}
    >
      <div className="z-50 flex items-center justify-between">
        <p className="font-nunito text-[32px] font-semibold">
          SKY{" "}
          <span
            className={`${isOpen ? "text-light" : "text-secondary"} transition-colors duration-500`}
          >
            PARK
          </span>
        </p>

        <div className="md:hidden">
          <BiMenu
            onClick={() => setIsOpen(true)}
            className={`${isOpen ? "hidden" : ""} text-[30px]`}
          />
          <BiX
            onClick={() => setIsOpen(false)}
            className={`${isOpen ? "" : "hidden"} text-[30px]`}
          ></BiX>
        </div>
      </div>

      <ul
        className={`${
          isOpen ? "" : "-translate-y-[101%] md:translate-y-0"
        } fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-24 bg-primary font-nunito text-4xl uppercase underline transition-transform duration-500 md:relative md:h-fit md:w-auto md:flex-row md:gap-4 md:bg-transparent md:text-base md:no-underline xl:gap-12`}
      >
        <li onClick={() => setIsOpen(false)}>
          <a href="#parks-section">parkai</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#events-section">šventės</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#testimonials-section">atsiliepimai</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#contact-us-section">kontaktai</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
