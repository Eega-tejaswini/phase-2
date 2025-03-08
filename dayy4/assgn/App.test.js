import { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const TaskContext = createContext();

const socket = io("http://localhost:5000");

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        socket.on("loadTasks", (loadedTasks) => setTasks(loadedTasks));
        socket.on("taskUpdated", (updatedTasks) => setTasks(updatedTasks));

        return () => socket.disconnect();
    }, []);

    const addTask = (task) => socket.emit("addTask", task);
    const deleteTask = (taskId) => socket.emit("deleteTask", taskId);

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
