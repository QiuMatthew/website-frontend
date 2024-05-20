// ThemeContext.js
import React from 'react'
import { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { blue } from '@mui/material/colors'

// Create a context to hold the theme mode and a function to toggle the mode
const ThemeContext = createContext();

// Use children prop to provide the theme context to its children
export const ThemeContextProvider = ({ children }) => {
    // Initialize the theme mode state
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('themeMode')
        return savedMode ? savedMode : 'light'
    });

    // Save the theme mode to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('themeMode', mode)
    }, [mode])

    // Create a MUI theme object based on the current mode
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: {
                main: blue[700],
                ...(mode === 'dark' && {
                    main: blue[200],
                })
            },
        },
    }), [mode]);

    // The function to toggle theme mode between 'light' and 'dark'
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        // Provide the theme context (written in value) to children components
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Use custom hook in case we need to change the way of using context
export const useThemeContext = () => useContext(ThemeContext);

