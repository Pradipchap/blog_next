// "use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { Options } from "@/app/api/auth/[...nextauth]/route";

const Navbar =  ({session}) => {
  // const session = await getServerSession(Options);
  const isAdmin = true;
  return (
    <nav className="flex bg-black w-max justify-center py-3 rounded-full m-auto px-5 gap-5 text-white">
      <Link href="/">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={28}
          priority
        />
      </Link>

      <Link href="/blogs">Blogs</Link>

      {
        //if user is authenticated
        session && <Link href="/blogs/create">Create</Link>
      }
      {
        //if user is authenticated
        isAdmin && <Link href="/admin">Admin</Link>
      }
      <Link href="#contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
