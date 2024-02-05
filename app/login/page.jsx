import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center bg-bg">
      <div className="bg-purple h-auto w-80 p-4 rounded-md">
        <div className="p-4">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="h-14 object-contain" />
          </Link>
        </div>
        <form action="">
          <input
            type="email"
            placeholder="E mail"
            className="p-2 w-full my-5 bg-light rounded-md text-bg placeholder:text-purple focus:outline-none focus:ring focus:ring-light"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 w-full mb-5 bg-light rounded-md text-bg placeholder:text-purple focus:outline-none focus:ring focus:ring-light"
          />
        </form>
        <Link
          href="/"
          type="submit"
          className="py-2 my-5 text-xl w-full bg-button text-bg font-semibold rounded-md hover:bg-bg hover:text-light hover:delay-100 text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
