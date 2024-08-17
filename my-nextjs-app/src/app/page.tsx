"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push("./login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button
        onClick={handleClick}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go to Login
      </button>
    </main>
  );
}
