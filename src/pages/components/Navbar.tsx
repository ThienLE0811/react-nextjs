"use client";

import Link from "next/link";
import React from "react";

// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 3,
    title: "TestData",
    url: "/testData",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  //   const session = useSession();

  return (
    <div className="mx-auto px-[8%] flex justify-between pt-8 pb-8">
      <Link href="/" className="font-bold text-xl">
        Thien
      </Link>
      <div className="items-center gap-5 flex">
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={"text-[#EDEDED"}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
