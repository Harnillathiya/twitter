import { Container } from '@mui/material';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import loginmark from "../image/loginmark.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { BASE_URL } from "../config";

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials(prev => ({ ...prev, [id]: value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message);

            navigate('/');
        } catch (error) {
            
            alert(error.message);
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
                        <span className='heading'>Happening now. Join today.</span>
                        <form onSubmit={handleClick} className="login-form">
                            <div className="input-field">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    required
                                    className="login-input"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type='password'
                                    id="password"
                                    placeholder="Password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                    className="login-input"
                                />
                                {/* Add functionality to show password */}
                            </div>
                            <button type="submit" className="login-button">
                                Log in
                            </button>
                        </form>
                        <p className="signup-link">
                            Don't have an account? <Link to="/signup">Sign up now</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
