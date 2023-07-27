import Button from "@/pages/components/CustomButton";
import Navbar from "@/pages/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import Hot from "public/raamin.jpg";
// import Hot from "public/igor-starkov-Hea3QOjilSs-unsplash.jpg";

export default function Home() {
  return (
    <div className={"min-h-full flex justify-between mx-auto px-[8%] mt-8 "}>
      <div className={"flex flex-col h-[100%] gap-[50px]"}>
        <h1
          className={
            "font-bold text-[72px] bg-gradient-to-b from-green-800 via-green-600 to-blue-500 bg-clip-text text-transparent"
          }
        >
          Better design for your digital products.
        </h1>
        <p className={"text-[24px] font-light"}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        {/* <Link href="#" className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full"
            onClick={() => router.push("/dashboard")}
          >
            Get
          </button>
        </Link> */}
        <Button href="/dashboard" />
      </div>
      <div className={"h-[100%]"}>
        <Image
          src={Hot}
          alt=""
          className={"rounded-md"}
          width={600}
          height={500}
        />
      </div>
    </div>
  );
}
