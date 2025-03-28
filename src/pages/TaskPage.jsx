import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const TaskPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Your Tasks</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default TaskPage;
