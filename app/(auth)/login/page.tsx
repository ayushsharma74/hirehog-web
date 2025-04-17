'use client'
import LoginWithGoogle from "@/components/auth/LoginWithGoogle";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";

export default function Login() {
  const { user } = useAuthStore();

  if (user != null) {
    return redirect("/dashboard");
  }

  return (
    <div className="h-screen flex-col w-full gap-10 flex items-center justify-center">
      <h1 className="text-white text-6xl">Welcome to Hirehog</h1>
      <LoginWithGoogle />
    </div>
  );
}
