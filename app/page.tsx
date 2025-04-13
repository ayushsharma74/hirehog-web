import Image from "next/image";
import logo from "../public/logo.png";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between px-4 sm:px-8 md:px-10">
        <div className="flex flex-row items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-white text-lg sm:text-xl font-semibold">Hirehog</h1>
        </div>
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <FaGithub
            color="white"
            size={22}
            className="hover:scale-110 transition-all cursor-pointer"
          />
          <button className="transition-all text-white bg-[#242429] text-sm hover:bg-zinc-700 py-2 px-3 sm:px-4 rounded">
            Login
          </button>
        </div>
      </nav>

      <div className="bg-[#101011] gap-8 sm:gap-10 h-[calc(100vh-4rem)] relative flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
            Job application tracking
          </h1>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
            Reimagined
          </h1>
          <p className="text-[#b2b9b2] text-center text-sm sm:text-base md:text-lg">
            Stay organized. Stay ahead.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-[#242429] transition-all font-semibold cursor-pointer text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
        >
          Get Started
        </Button>
      </div>
    </>
  );
}
