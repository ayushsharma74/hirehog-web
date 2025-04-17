import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading, fetchUser } = useAuthStore();
    const router = useRouter();
  
    useEffect(() => {
      fetchUser(); // optional if user is persisted
    }, []);
  
    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading]);
  
    if (loading) return <p>Loading...</p>;
  
    return <>{children}</>;
}