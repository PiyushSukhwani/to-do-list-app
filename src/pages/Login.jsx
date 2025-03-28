import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/tasks" />;
  }

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>
        <p className="text-gray-600 text-center">
          Click below to log in
        </p>
        <button
          onClick={() => dispatch(login())}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
