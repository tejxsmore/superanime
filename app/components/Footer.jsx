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
          <a
            href="https://github.com/tejxsmore/superanime"
            className="bg-bgpurp px-6 py-2 m-2 rounded-md"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/tejxsmore"
            className="bg-bgpurp px-5 py-2 m-2 rounded-md"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
