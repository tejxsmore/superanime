import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { IoMdHeart } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex justify-between h-auto ">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-12" />
      </Link>
      <div className="p-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
