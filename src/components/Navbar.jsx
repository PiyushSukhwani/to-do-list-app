import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Button } from "@mantine/core";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-800 text-white font-bold p-4 flex justify-between shadow-2xl">
      <div className="space-x-3 md:space-x-10 md:ml-36">
        <Link to="/">Home</Link>
        <Link to="/tasks"> Add Tasks</Link>
      </div>
      {isAuthenticated ? (
        <Button
          variant={"subtle"}
          onClick={() => dispatch(logout())}
          className="text-red-400 mr-10 md:mr-24 cursor-pointer"
        >
          {" "}
          Logout
        </Button>
      ) : (
        <Link
          to="/login"
          className="text-green-400 mr-10 md:mr-24 cursor-pointer"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
