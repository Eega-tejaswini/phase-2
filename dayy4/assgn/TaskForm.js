import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        addTask({ id: Date.now(), title });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task"
                className="border p-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
