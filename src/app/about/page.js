// importing necessary functions
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function About() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/");
  }

  // rendering components for not logged in users
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="relative mb-4 w-44 h-44">
        <Image src={session.user?.image} fill alt="" className="object-cover rounded-full" />
      </div>
      <p className="mb-2 text-2xl">
        Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As
      </p>
      <p className="mb-4 font-bold">{session.user?.email}</p>
    </div>
  );
}
