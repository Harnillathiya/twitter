import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginmark from "../image/loginmark.jpeg";
import './Signup.css'; 

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
    };

    return (
        <div className="signup-container">
            <div className="header">
            <img className="login-image2 w-5" src={loginmark} alt="loginmark" />
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Signup</button>
            </form>
            <p className="signin-link">
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>
    );
}

export default Signup;
