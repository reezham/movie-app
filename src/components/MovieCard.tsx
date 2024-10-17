import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard: React.FC<{ movie: any; onAddToFavorites?: (movieTitle: string) => void }> = ({ movie, onAddToFavorites }) => {
    const [isFavorited, setIsFavorited] = useState(false); // State for favorite status
    const [isOverviewExpanded, setIsOverviewExpanded] = useState(false); // State for overview expansion

    const handleAddToFavorites = () => {
        if (onAddToFavorites) {
            onAddToFavorites(movie.title); // Call the passed function to add to favorites
        }
        setIsFavorited(true); // Update favorite status
    };

    const toggleOverview = () => {
        setIsOverviewExpanded((prev) => !prev); // Toggle the overview display
    };

    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{isOverviewExpanded ? movie.overview : `${movie.overview.substring(0, 100)}...`}</p>
            <span onClick={toggleOverview}>
                {isOverviewExpanded ? 'Read Less' : 'Read More'} {/* Toggle text for overview */}
            </span>
            <button 
                onClick={handleAddToFavorites} 
                className={`favorite-button ${isFavorited ? 'favorited' : ''}`} // Apply 'favorited' class if true
                disabled={isFavorited} // Disable button if already favorited
            >
                {isFavorited ? 'Added to Favorites' : 'Add to Favorites'} {/* Button text based on favorite status */}
            </button>
        </div>
    );
};

export default MovieCard;
