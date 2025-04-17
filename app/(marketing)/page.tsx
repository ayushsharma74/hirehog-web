
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  

  return (
    <>
      

      <div className="bg-[#101011] gap-8 sm:gap-10 h-[calc(100vh-4rem)] relative flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center ">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
            Job application tracking
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
            Reimagined
          </h1>
          <p className="text-[#b2b9b2] text-center text-sm sm:text-base md:text-lg">
            Stay organized. Stay ahead.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-[#242429] text-white hover:text-[#242429]  transition-all font-semibold cursor-pointer text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3"
        >
          <Link href="/login">
          Get Started
          </Link>
        </Button>
      </div>
    </>
  );
}
