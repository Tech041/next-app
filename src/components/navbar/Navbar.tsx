"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import path from "path";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSportsMartialArts } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const styles = "text-white";

  const links = [
    { id: 1, name: "Home", path: "#" },
    { id: 2, name: "Membership", path: "#" },
    { id: 3, name: "About Us", path: "#" },
    { id: 4, name: "Newsletter", path: "#" },
    { id: 5, name: "Deals", path: "#" },
  ];
  return (
    <header className="bg-black h-[100px] w-full flex items-center fixed">
      <div className=" container flex justify-between items-center">
        <div>
          <Image
            width={100}
            height={50}
            src="/images/nel.png"
            alt="logo-image"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? (
            <IoMdClose size={30} className="text-white" />
          ) : (
            <RxHamburgerMenu size={30} className="text-white" />
          )}
        </div>
        <nav
          className={`${
            open ? "right-0" : "right-[-100%]"
          } w-[40%] md:w-auto  bg-black  pt-[100px] h-screen 
          md:h-auto px-5 md:pt-0 absolute 
          md:static top-0 duration-500 ease-in `}
        >
          <ul className="flex md:flex-row flex-col  gap-7">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-white text-[12px] hover:text-red-300 hover:underline"
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
