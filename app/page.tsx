"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      push("/auth/sign-in");
    }
  }, [session]);

  if (session.status === "loading") {
    return (
      <div className="mt-[95px] ml-[500px]">
        <div className="load"></div>
      </div>
    );
  }

  return <main></main>;
}
