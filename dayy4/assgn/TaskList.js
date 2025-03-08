import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks, deleteTask } = useContext(TaskContext);

    return (
        <ul className="mt-4">
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between p-2 border-b">
                    {task.title}
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-500 text-white p-1"
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
