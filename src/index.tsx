import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create the root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Render the App component inside BrowserRouter to enable routing functionality
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
