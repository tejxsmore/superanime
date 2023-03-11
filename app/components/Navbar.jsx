import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between h-auto ">
      <a href="/">
        <img src="/logo.png" alt="logo" className="h-12" />
      </a>
      <div className="p-2">
        <button className="bg-button px-5 py-2 rounded-md  text-bg text-md font-semibold hover:bg-light hover:text-dark">
          SignIn
        </button>
      </div>
    </div>
  );
}
