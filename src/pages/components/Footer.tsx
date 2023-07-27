import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className={
        "min-h-full flex justify-between mx-auto mt-8 px-[8%] text-sm pt-4 pb-4 "
      }
    >
      <div>©2023 ThienLe. All rights reserved.</div>
      <div className={"flex gap-[10px] align-middle"}>
        <Image
          src="/1.png"
          width={20}
          height={15}
          className={"opacity-[.5] cursor-pointer"}
          alt="Thien Dev Facebook Account"
        />
        <Image
          src="/2.png"
          width={20}
          height={15}
          className={"opacity-[.5] cursor-pointer"}
          alt="Thien Dev"
        />
        <Image
          src="/3.png"
          width={20}
          height={15}
          className={"opacity-[.5] cursor-pointer"}
          alt="Thien Dev"
        />
        <Image
          src="/4.png"
          width={20}
          height={15}
          className={"opacity-[.5] cursor-pointer"}
          alt="Thien Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
