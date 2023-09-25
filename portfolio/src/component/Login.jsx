import { useState } from "react";
import { useAuth } from "../UserAuth";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/login/osnac",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();
      if (data.token) {
        console.log(data.token);

        setIsLoggedIn(true);
        console.log(response);
        console.log(`isLogged in is ${isLoggedIn}`);
        console.log("Successfully logged in");
      } else {
        console.error("Failed to login:", data.error);
        setIsLoggedIn(false);
        console.log(isLoggedIn);
      }
    } catch (err) {
      console.error("Error while logging in:", err);
    }
  };

  return (
    <div className="p-4 mx-auto rounded lg:ml-6 -sm loginContainer sm:p-2">
      <div>
        <h1 className="text-xl text-center sm:text-2xl">
          Welcome, please log in
        </h1>
      </div>
      <div className="flex justify-center">
        <form
          className="flex flex-col w-3/4 gap-5 p-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 username sm:gap-2">
            <label
              htmlFor="username"
              className="text-lg sm:text-base"
            >
              Username:
            </label>
            <input
              className="p-2 rounded"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5 password sm:gap-2">
            <label
              htmlFor="password"
              className="text-lg sm:text-base"
            >
              Password:
            </label>
            <input
              className="p-2 rounded"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full p-2 mt-4 text-white border rounded bg-slate-500 hover:bg-blue-600 focus:outline-none focus:ring"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
