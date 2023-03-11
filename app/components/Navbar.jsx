import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between h-auto ">
      <a href="/">
        <img src="/logo.png" alt="logo" className="h-12" />
      </a>
      <div className="p-2">
        <button className="bg-bgpurp px-5 py-2 rounded-md  text-light text-md font-semibold hover:bg-light hover:text-bg hover:delay-75">
          SignIn
        </button>
      </div>
    </div>
  );
}
