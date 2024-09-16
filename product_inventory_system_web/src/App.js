import './App.css'; // Import CSS for App component (optional)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';

function App() {
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="log/*" element={ localStorage.getItem('username') ? <Menu /> : <Login />}  />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
