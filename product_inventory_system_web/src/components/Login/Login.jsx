import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                // Redirect to another page or update UI
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
