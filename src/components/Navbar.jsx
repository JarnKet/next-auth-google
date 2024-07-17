"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between w-full px-8 py-4">
      <h3>Next + Google Auth Login</h3>
      {!session ? (
        <button type="button" onClick={() => signIn("google")} className="p-4 text-black bg-white">
          Login with Google
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <Image src={session.user.image} alt={session.user.name} width={40} height={40} className="rounded-full " />
          <Link href={"/about"}>Profile Page</Link>
          <button type="button" className="p-4 text-black bg-white" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      )}
    </nav>
  );
}
