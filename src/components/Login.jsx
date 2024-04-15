import { Container } from '@mui/material';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import loginmark from "../image/loginmark.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import App from '../App';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'user@example.com' && password === 'password') {
            setIsLoggedIn(true);

        }
    };

    return (
        <div className="login-container">
            <Container>
                <Row>
                    <Col span={12}>
                        <img className="login-image" src={loginmark} alt="loginmark" />
                    </Col>
                    <Col span={12} className="login-form-container">
                        <span className='heading'>Happening now
                            Join today.</span>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="input-field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="login-input"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="login-input"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="show-password-button"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <button type="submit" className="login-button"
                                onClick={() => navigate("/")}>
                                Log in
                            </button>
                        </form>
                        <p className="signup-link">
                            Don't have an account? <Link to="/signup">Sign up now</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
            {isLoggedIn && <App />}
        </div>
    );
}

export default Login;
