import React, { useState } from 'react';

interface GuestMovieCardProps {
    movie: any; // Replace with an appropriate Movie interface if available
}

const GuestMovieCard: React.FC<GuestMovieCardProps> = ({ movie }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to control whether the overview is expanded or not
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Prepending the base URL for the movie poster image

    const toggleOverview = () => {
        setIsExpanded(!isExpanded); // Toggle between "Read More" and "Read Less"
    };

    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>
                {isExpanded ? movie.overview : `${movie.overview.substring(0, 100)}...`}
                <span onClick={toggleOverview} style={{ cursor: 'pointer', color: 'blue' }}>
                    {isExpanded ? ' Read Less' : ' Read More'}
                </span>
            </p>
        </div>
    );
};

export default GuestMovieCard;
