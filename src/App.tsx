import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Profile from './components/Profile';
import GuestMain from './components/GuestMain';

const App: React.FC = () => {
    // State to manage favorite movies
    const [favorites, setFavorites] = useState<string[]>([]);
    
    // Hook to programmatically navigate between routes
    const navigate = useNavigate();

    // Function to add a movie to the favorites list, if not already present
    const addToFavorites = (movieTitle: string) => {
        setFavorites((prevFavorites) => 
            prevFavorites.includes(movieTitle) ? prevFavorites : [...prevFavorites, movieTitle]
        );
    };

    // Function to remove a movie from the favorites list
    const removeFromFavorites = (movieTitle: string) => {
        setFavorites((prevFavorites) => 
            prevFavorites.filter((title) => title !== movieTitle)
        );
    };

    // Function to navigate back to the main page
    const handleBackToMain = () => {
        navigate('/main'); // Navigate to the main page
    };

    return (
        // Define application routes
        <Routes>
            {/* Route for login page */}
            <Route path="/" element={<Login />} />

            {/* Route for main page, pass addToFavorites function as prop */}
            <Route path="/main" element={<Main onAddToFavorites={addToFavorites} />} />

            {/* Route for profile page, pass favorites, removeFromFavorites, and navigation function as props */}
            <Route path="/profile" element={<Profile favorites={favorites} onRemoveFromFavorites={removeFromFavorites} onBackToMain={handleBackToMain} />} />

            {/* Route for guest main page */}
            <Route path="/guest-main" element={<GuestMain />} />
        </Routes>
    );
};

export default App;
