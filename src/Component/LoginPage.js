import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.style';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleLogin = () => {
        const { username, password } = formData;

        if (username === 'mockUser' && password === 'Token@123') {
            const token = 'example_token_from_server';
            localStorage.setItem('accessToken', token);
            window.location.href = '/home';
        } else {
            setError('Invalid username or password');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        if (!code) {
            return;
        }

        const data = {
            code: code,
            grant_type: 'authorization_code',
            scope: 'openid user',
            redirect_uri: 'http://localhost:3000',
            client_id: 'bookshop',
        };

        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }

        formBody = formBody.join('&');
        fetch('http://localhost:8090/default/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                origin: 'http://localhost:3000',
            },
            body: formBody,
        })
            .then((response) => {
                return response.json();
            })
    }, []);

    return (
        <div style={styles.loginContainer}>
            <h3>Login</h3>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    style={styles.inputField}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    style={styles.inputField}
                />
                <button type="submit" style={styles.loginButton}>
                    Login
                </button>
            </form>
            <p style={styles.signupLink}>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default LoginPage;
