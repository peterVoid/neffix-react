import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const signIn = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/e68c761f-b58d-4e0f-bf3e-36fc005bf081/ID-id-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="fixed top-0 left-0 bg-black/60 w-full h-screen"></div>
      <div className="absolute top-0 left-0 w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-sm">
          <div className="w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error && <p className="p-3 bg-red-400 my-2">{error}</p>}
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 bg-gray-700 my-2 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 bg-gray-700 my-2 rounded"
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">Havent registered yet?</span>{" "}
                <Link to="/signUp">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signIn;
