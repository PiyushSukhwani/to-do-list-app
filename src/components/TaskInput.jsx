import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { Button } from "@mantine/core";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ text: task, priority: priority }));
      setTask("");
    }
  };

  return (
    <div className="p-4 flex">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded-l-lg w-full"
      />
      <select
        className="p-1 border"
        onChange={(e) => setPriority(e.target.value)}
        defaultChecked={"Low"}
      >
        <option value={"Low"}>Low</option>
        <option value={"Medium"}>Medium</option>
        <option value={"High"}>High</option>
      </select>
      <Button
        className="px-6 bg-blue-500 text-white font-bold rounded-r-md text-[15px] cursor-pointer"
        onClick={handleAddTask}
      >
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
