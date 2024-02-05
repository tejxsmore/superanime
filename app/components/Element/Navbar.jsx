import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex justify-between h-auto ">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="h-12" />
      </Link>
      <div className="p-2">
        <button
        // className="bg-purple px-5 py-2 rounded-md  text-light text-md font-semibold hover:bg-light hover:text-bg hover:delay-75"
        >
          <UserButton afterSignOutUrl="/" />
        </button>
      </div>
    </div>
  );
}
