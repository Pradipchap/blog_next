"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
  
  
  const [isLoggedin, setfirst] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
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
        isLoggedin && <Link href="/create">Create</Link>
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
