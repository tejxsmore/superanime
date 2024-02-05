import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        <div>
          <p className="text-light text-lg">{`Copyright ${year} ©️ Super Anime`}</p>
        </div>
      </div>
      <div className="text-light m-4 flex flex-col justify-center items-center">
        <div>
          <Link
            target="_blank"
            href="https://github.com/tejxsmore/superanime"
            className="bg-purple px-6 py-2 m-2 rounded-md hover:bg-light hover:text-bg hover:delay-150"
          >
            Github
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/tejxsmore"
            className="bg-purple px-5 py-2 m-2 rounded-md hover:bg-light hover:text-bg hover:delay-150"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:tejasmore1104@gmail.com"
            className="bg-purple px-7 py-2 m-2 rounded-md hover:bg-light hover:text-bg hover:delay-150"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}
