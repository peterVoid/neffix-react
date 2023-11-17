import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
      alert("Logout successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <div className="flex items-center justify-between z-[100] w-full absolute p-4">
        <Link to="/">
          <h1 className="text-red-600 text-5xl font-bold cursor-pointer uppercase">
            Neffix
          </h1>
        </Link>
        <div>
          {user?.email && (
            <div>
              <Link to="/account">
                <button className="text-white pr-4 ">Account</button>
              </Link>
              <button
                className="bg-red-600 px-6 py-4 rounded cursor-pointer text-whit"
                onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          {!user?.email && (
            <>
              <Link to="/signin">
                <button className="text-white pr-4 ">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-600 px-6 py-4 rounded cursor-pointer text-white">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
