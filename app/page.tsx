import Image from "next/image";
import logo from "../public/logo.png";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <nav className=" w-full h-16 flex items-center justify-between px-10">
        <div className="flex flex-row items-center gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h1 className="text-white text-xl font-semibold">Hirehog</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaGithub color="white" size={25} className="hover:scale-115 transition-all cursor-pointer" />
          <button className="transition-all text-white bg-[#242429] text-sm hover:bg-zinc-700 py-2  cursor-pointer px-4 rounded">
            Login
          </button>
        </div>
      </nav>
      <div className="bg-[#101011] gap-10 h-[calc(100vh-4rem)] relative flex-col flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">

        <h1 className="text-white text-6xl font-bold px-20 text-center">
          Job application tracking 
        </h1>
        <h1 className="text-white text-6xl font-bold px-20 text-center">
          {" "}
          Reimagined
        </h1>
        <p className="text-white text-center">Stay organized. Stay ahead</p>
        </div>
        <Button size={"xl"} className="bg-[#242429]  transition-all font-semibold cursor-pointer">Get Started</Button>
      </div>
    </>
  );
}
