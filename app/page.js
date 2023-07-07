import { getServerSession } from "next-auth";
// import { Image } from "next/image";
import { Options } from "./api/auth/[...nextauth]/route";
import SigninCard from "@/components/SigninCard";

export default async function Home() {
  

  //for client side session
  // first import useSession hook
  //then
  // const {data:session}=useSession()

  return (
    <div>

Home
    </div>
  );
}
