'use client'
import Image from "next/image";
import logo from "../public/logo.png";
import { FaGithub } from "react-icons/fa";
import { useAuthStore } from "@/stores/useAuthStore";
import Link from "next/link";

export default function Navbar() {
  const { user } = useAuthStore();

  return (
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
          {user == null ? <Link href="/login">Login</Link> : <Link href={"/dashboard"}>Dashboard</Link>}
        </button>
      </div>
    </nav>
  );
}
