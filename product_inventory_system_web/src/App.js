import './App.css'; // Import CSS for App component (optional)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <Router>
            <div className="App">
                <main>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path='/log/' element={<Menu />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}



export default App;
