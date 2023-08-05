"use client";

import Link from "next/link";
import React, { useContext } from "react";
import LogginButton from "./Login/LoginButton";
import { Modal } from "antd";
import FormLogin from "./Login/FormLogin";
import { AppContext } from "@/config/AppContext";

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
    title: <LogginButton href={""} content={"Login"}></LogginButton>,
    url: "",
  },
];

const Navbar = () => {
  //   const session = useSession();
  const { state, dispatch } = useContext(AppContext);
  const { showModalLogin } = state;

  console.log("state:: ", state);
  return (
    <div className="mx-auto px-[8%] flex justify-between pt-8 pb-8">
      <Link href="/" className="font-bold text-xl">
        Thien Le
      </Link>
      <div className="items-center gap-8 flex">
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={"text-[#EDEDED"}>
            {link.title}
          </Link>
        ))}
      </div>

      <Modal
        open={showModalLogin}
        onCancel={() => dispatch({ type: "SHOW_MODAL_LOGIN", payload: false })}
        footer={false}
      >
        <FormLogin />
      </Modal>
    </div>
  );
};

export default Navbar;
