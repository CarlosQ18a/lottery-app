// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.css';

// Define tu tema personalizado
const theme = createTheme({
    palette: {
        primary: {
            main: '#1c1c1c', // Color principal para botones
        },
        secondary: {
            main: '#ffffff', // Color secundario para botones
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
