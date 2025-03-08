import React from "react";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";
import TaskDashboard from "./components/TaskDashboard";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
    return (
        <ThemeProviderWrapper>
            <TaskProvider>
                <ThemeToggle />
                <TaskDashboard />
            </TaskProvider>
        </ThemeProviderWrapper>
    );
};

export default App;
