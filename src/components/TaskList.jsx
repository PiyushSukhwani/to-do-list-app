import { useSelector, useDispatch } from "react-redux";
import { removeTask, fetchWeather } from "../redux/taskSlice";
import { useEffect } from "react";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const { weather, loading, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Kolkata")); // Fetch weather for default city
  }, [dispatch]);

  return (
    <div className="p-4">
      <div className="mb-4 p-3 bg-blue-100 rounded">
        {loading && <p className="text-gray-600">Fetching weather...</p>}
        {error && <p className="text-red-500">Error: {String(error)}</p>}
        {weather && (
          <p className="text-lg font-semibold">
            🌤️ Weather in {weather.city}: {weather.temp}°C, {weather.condition}
          </p>
        )}
      </div>

      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-100 p-3 mt-2 rounded shadow"
          >
            <span className="font-medium">
              {task.text} -{" "}
              <span className="text-blue-500">{task.priority}</span>
            </span>
            <button
              onClick={() => dispatch(removeTask(index))}
              className="text-red-500 font-bold hover:text-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks added yet.</p>
      )}
    </div>
  );
};

export default TaskList;
