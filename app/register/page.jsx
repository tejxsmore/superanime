export default function Register() {
  return (
    <div className="flex h-screen justify-center items-center bg-bg">
      <div className="bg-bgpurp h-auto w-80 p-4 rounded-lg">
        <div className="p-4">
          <a href="/">
            <img src="/logo.png" alt="logo" className="h-14 object-contain" />
          </a>
        </div>
        <div className="flex flex-col my-5">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="p-2 bg-light rounded-lg text-bg placeholder:text-bgpurp focus:outline-none focus:ring focus:ring-light"
          />
        </div>
        <div className="flex flex-col my-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 bg-light rounded-lg text-bg placeholder:text-bgpurp focus:outline-none focus:ring focus:ring-light"
          />
        </div>
        <div className="flex flex-col my-5">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 bg-light rounded-lg text-bg placeholder:text-bgpurp focus:outline-none focus:ring focus:ring-light"
          />
        </div>
        <div className="flex flex-col my-5">
          <input
            type="password"
            name="Cpassword"
            id="Cpassword"
            placeholder="Confirm Password"
            className="p-2 bg-light rounded-lg text-bg placeholder:text-bgpurp focus:outline-none focus:ring focus:ring-light"
          />
        </div>
        <button className="py-2 my-5 text-xl w-full bg-button rounded-lg hover:bg-bg hover:text-light hover:delay-100">
          Register
        </button>
        <p className="text-center my-5 text-light">
          Already have an Account?{" "}
          <span className="text-bg ">
            <a href="/login">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
}
