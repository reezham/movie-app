import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState(''); // State for username input
    const [password, setPassword] = useState(''); // State for password input
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = () => {
        // Check if credentials are correct
        if (username === 'user' && password === '123') {
            alert("You Are Logged In"); // Alert on successful login
            navigate('/main'); // Navigate to main page
        } else {
            alert("Your Username/Password are wrong"); // Alert on failed login
        }
    };

    const handleGuestLogin = () => {
        alert("You are logged in as a guest"); // Alert for guest login
        navigate('/guest-main'); // Navigate to guest main page
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username} // Controlled input for username
                    onChange={(e) => setUsername(e.target.value)} // Update state on change
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password} // Controlled input for password
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
                <button onClick={handleLogin}>Login User</button> {/* Login button */}
                <br />
                <button onClick={handleGuestLogin}>Continue as Guest</button> {/* Guest login button */}
            </div>
        </div>
    );
};

export default Login;
