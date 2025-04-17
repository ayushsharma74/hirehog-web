"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner"


export default function Home() {
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      toast.loading("Redirecting...");
      window.location.href = "http://localhost:3000/api/auth";
      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="">
      <Button onClick={loginWithGoogle} variant={'outline'} size={"xl"}  className="flex items-center gap-2  cursor-pointer transition-colors   rounded-lg">
        <FaGoogle size={23} />
        <h1>Login with Google</h1>
        
      </Button>
    </div>
  );
}
