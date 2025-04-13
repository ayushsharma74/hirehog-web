"use client";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
export default function Dashboard() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState();
  const {user} = useAuth()
  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <>
          <Image src={user.image} alt="image" width={100} height={100} />
          <h1>{user?.name}</h1>
        </>
      )}
    </div>
  );
}
