import { getServerSession } from "next-auth";
// import { Image } from "next/image";
import { Options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(Options);

  //for client side session
  // first import useSession hook
  //then
  // const {data:session}=useSession()

  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
