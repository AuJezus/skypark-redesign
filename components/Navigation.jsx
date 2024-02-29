"use client";

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        isOpen ? "h-screen bg-primary" : ""
      } absolute left-0 top-0 flex w-full flex-col`}
    >
      <div className="flex items-center justify-between px-3 py-2">
        <p className="font-nunito text-[32px] font-semibold">
          SKY{" "}
          <span className={`${isOpen ? "text-light" : "text-secondary"}`}>
            PARK
          </span>
        </p>

        <div>
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
          isOpen ? "" : "hidden"
        } flex h-full w-full flex-col items-center justify-center gap-24 font-nunito text-4xl uppercase underline`}
      >
        <li>parkai</li>
        <li>šventės</li>
        <li>atsiliepimai</li>
        <li>kontaktai</li>
      </ul>
    </nav>
  );
}

export default Navigation;
