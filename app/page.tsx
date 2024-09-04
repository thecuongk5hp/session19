"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  const { isSignedIn, signOut } = useAuth();

  return (
    <div className="container mx-auto p-4">
      {isSignedIn ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-600 text-white px-4 py-2 rounded"
        >
          Đăng xuất
        </button>
      ) : (
        <Link
          href="/sign-in"
          className="bg-slate-600 text-white px-4 py-2 rounded"
        >
          Đăng nhập
        </Link>
      )}
    </div>
  );
}