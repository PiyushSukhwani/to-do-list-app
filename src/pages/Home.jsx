import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-blue-400">
        Welcome to the To-Do App
      </h1>
      <p className="text-gray-600 mt-4">
        Manage your tasks efficiently and stay organized.
      </p>
      <Link to="/tasks">
        <Button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded cursor-pointer">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Home;
