import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()


    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/auth/', {
                username,
                password
            });
            console.log("------",response.data);
            if (response.status === 200 && response.data.status === 'success') {
                console.log("Login Successful:", response.data);
                localStorage.setItem('username', username)
                console.log("----log,", localStorage.getItem('username'))
                navigate('/log/'); 
           } else {
                setError('Invalid login credentials.');  
           }
        } catch (error) {
            setError('An error occurred during login. Please try again.');
            console.log(error);
            
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