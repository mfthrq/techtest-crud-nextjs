"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("@isLoggedIn");

    if (isLoggedIn !== "true") {
      router.push("/login");  // Jika tidak login, arahkan ke halaman login
    }
  }, [router]);

  return <>{children}</>;
}
