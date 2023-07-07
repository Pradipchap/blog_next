"use client"
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
const Topbar = () => {

  const {data:session,status,update}=useSession()

  useEffect(() => {
update()
  }, [])
  
  return (
    <div className="flex justify-between px-4 bg-blue-600 py-2 mb-5 text-white">
      <Link href="/">Take a look at our github</Link>
      <Link href="/">{session&&session.user.name+session.expires}</Link>
     {/* {session&& <Image ref={session.user.image} width={30} height={30} alt="photo of the user"/>} */}
     {/* <pre>{JSON.stringify(session.expires)}</pre> */}
     {/* <img href={session.user.image} alt="photo of user" width={37} height={37}/> */}
    </div>
  );
};

export default Topbar;
