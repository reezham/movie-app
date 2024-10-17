import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { fetchNowPlayingMovies, fetchPopularMovies } from '../api';
import './Main.css';

const Main: React.FC<{ onAddToFavorites: (movieTitle: string) => void }> = ({ onAddToFavorites }) => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]); // State for now playing movies
    const [popularMovies, setPopularMovies] = useState<any[]>([]); // State for popular movies
    const [visiblePopular, setVisiblePopular] = useState(6); // Number of visible popular movies
    const totalPopularMovies = 30; // Total limit for popular movies
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

    useEffect(() => {
        const getMovies = async () => {
            const nowPlaying = await fetchNowPlayingMovies(); // Fetch now playing movies
            const popular = await fetchPopularMovies(); // Fetch popular movies
            setNowPlayingMovies(nowPlaying); // Set state for now playing movies
            setPopularMovies(popular); // Set state for popular movies
        };
        getMovies();
    }, []); // Empty dependency array to run once on mount

    const loadMorePopular = () => {
        // Load more popular movies or reset to 6
        if (visiblePopular < totalPopularMovies) {
            setVisiblePopular((prev) => Math.min(prev + 6, totalPopularMovies)); // Increase visible count
        } else {
            setVisiblePopular(6); // Reset to 6 when all are shown
        }
    };

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev); // Toggle dark mode
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev); // Toggle dropdown menu
    };

    return (
        <div className={`main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="navbar">
                <button className="theme-button" onClick={toggleTheme}>
                    Change Theme
                </button>
                <div className="dropdown" onClick={toggleDropdown}>
                    <button className="dropbtn">☰</button>
                    {isDropdownOpen && ( // Conditional rendering of dropdown content
                        <div className="dropdown-content">
                            <Link to="/profile">Profile</Link>
                            <Link to="/">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
            <h1 className="welcome-text">Welcome To My Movie</h1>

            <h2 className="section-title">Now Playing</h2>
            <div className="now-playing-container">
                <div className="movie-list">
                    {nowPlayingMovies.slice(0, 6).map(movie => ( // Display first 6 now playing movies
                        <MovieCard key={movie.id} movie={movie} onAddToFavorites={onAddToFavorites} />
                    ))}
                </div>
            </div>

            <h2 className="section-title">Popular Movies</h2>
            <div className="movie-list">
                {popularMovies.slice(0, visiblePopular).map(movie => ( // Display visible popular movies
                    <MovieCard key={movie.id} movie={movie} onAddToFavorites={onAddToFavorites} />
                ))}
            </div>
            <button className="load-more" onClick={loadMorePopular}>
                {visiblePopular < totalPopularMovies ? "Load More" : "Show Less"} {/* Button text based on visibility */}
            </button>
        </div>
    );
};

export default Main;
