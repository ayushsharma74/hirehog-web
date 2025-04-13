'use client';
import { useEffect, useState } from "react";
import axios from "axios";
export default function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("http://localhost:3000/api/user/get-user", {
          withCredentials: true,
        });
        // @ts-expect-error Server Component
        if (res.ok) {
          setUser(res.data);
          console.log(user);
          
        }
      } catch (err) {
        console.error("User fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, loading };
}
