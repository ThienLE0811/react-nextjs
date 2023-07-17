import Navbar from "@/pages/components/Navbar";
import Image from "next/image";
import Link from "next/link";
// import Hot from "public/altumcode-g7UfI6Xsi7o-unsplash.jpg";
import Hot from "public/igor-starkov-Hea3QOjilSs-unsplash.jpg";

export default function Home() {
  return (
    <div className={"min-h-screen flex justify-between mx-auto px-[8%]"}>
      <div className={"flex flex-col"}>
        <h1
          className={
            "font-bold text-[72px] bg-gradient-to-b from-green-800 via-green-600 to-blue-500 bg-clip-text text-transparent"
          }
        >
          Better design for your digital products.
        </h1>
        <p className={""}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="#" className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full">
            Get
          </button>
        </Link>
      </div>
      <div className={""}>
        <Image src={Hot} alt="" className={""} width={600} height={500} />
      </div>
    </div>
  );
}
