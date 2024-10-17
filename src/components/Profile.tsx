import React from 'react';
import './Profile.css';

interface ProfileProps {
    favorites: string[]; // List of favorite movies
    onRemoveFromFavorites: (movieTitle: string) => void; // Function to remove a movie from favorites
    onBackToMain: () => void; // Function to navigate back to the main page
}

const Profile: React.FC<ProfileProps> = ({ favorites, onRemoveFromFavorites, onBackToMain }) => {
    return (
        <div className="profile-container">
            <h1>Your Favorite Movies</h1>
            {favorites.length > 0 ? ( // Check if there are favorite movies
                <ul className="movie-list">
                    {favorites.map((movieTitle, index) => ( // Map through the favorites
                        <li key={index} className="movie-item">
                            <h3 className="movie-title">{movieTitle}</h3>
                            <button className="remove-button" onClick={() => onRemoveFromFavorites(movieTitle)}>
                                Remove {/* Button to remove movie from favorites */}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-favorites-message">No favorite movies added yet.</p> // Message if no favorites
            )}
            <button className="back-button" onClick={onBackToMain}>Back to Main</button> {/* Button to go back to main */}
        </div>
    );
};

export default Profile;
