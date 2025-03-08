import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
