import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GuestMovieCard from './GuestMovieCard';
import { fetchNowPlayingMovies, fetchPopularMovies } from '../api';
import './GuestMain.css';

const GuestMain: React.FC = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
    const [popularMovies, setPopularMovies] = useState<any[]>([]);
    const totalPopularMovies = 30; // Total limit for popular movies
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            const nowPlaying = await fetchNowPlayingMovies();
            const popular = await fetchPopularMovies();
            setNowPlayingMovies(nowPlaying);
            setPopularMovies(popular);
        };
        getMovies();
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div className={`main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="navbar">
                <button className="theme-button" onClick={toggleTheme}>Change Theme</button>
                <Link to="/" className="logout-button">Back</Link>
            </div>
            <h1 className="welcome-text">Welcome To My Movie (Guest)</h1>

            <h2 className="section-title">Now Playing</h2>
            <div className="now-playing-container">
                <div className="movie-list">
                    {nowPlayingMovies.slice(0, 6).map(movie => (
                        <GuestMovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

            <h2 className="section-title">Popular Movies</h2>
            <div className="movie-list">
                {popularMovies.slice(0, 6).map(movie => (
                    <GuestMovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <button className="load-more" disabled>
                Login to load more
            </button>
        </div>
    );
};

export default GuestMain;
