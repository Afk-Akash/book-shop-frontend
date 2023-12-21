import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.style';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });


    const [tokens, setTokens] = useState({});
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUserLogin = () => {
        window.location.href = "http://localhost:8090/default/authorize?client_id=debugger&scope=openid+user&response_type=code&response_mode=query&state=1234&nonce=5678&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
    };

    useEffect(() => {
        // Check if there's an authorization code in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            fetchTokens(code);
        }
    }, []);

    const fetchTokens = async (code) => {
        try {
            const requestBody = new URLSearchParams();
            requestBody.append('code', code);
            requestBody.append('grant_type', 'authorization_code');
            requestBody.append('scope', 'openid user');
            requestBody.append('redirect_uri', 'http://localhost:3000');
            requestBody.append('client_id', 'bookshop');

            const response = await fetch('http://localhost:8090/default/token', {
                method: 'POST',
                headers: {
                    'Authorization': 'Base64String', // Replace with your client ID and secret
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'origin': 'http://localhost:3000',
                },
                body: requestBody.toString(),
                // body: `grant_type=password&username=${formData.username}&password=${formData.password}`,
                //body: `code=${code}&grant_type=authorization_code&scope=openid+user&redirect_uri=http://localhost:3000&client_id=bookshop`,
            });


            if (!response.ok) {
                throw new Error('Token generation failed');
            }

            const data = await response.json();
            setTokens(data);

            // window.location.href = '/dashboard'; 
        }
        catch (err) {
            setError(err.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleUserLogin()
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {

            setTokens({ accessToken: 'example_access_token', refreshToken: 'example_refresh_token' });
        }
    }, []);

    return (
        <div style={styles.loginContainer}>
            <h3>Login</h3>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <form onSubmit={handleSubmit}>
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
            <div>
                {tokens.access_token && (
                    <div>
                        <p>Access Token: {tokens.access_token}</p>
                        <p>ID Token: {tokens.id_token}</p>
                        <p>Refresh Token: {tokens.refresh_token}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
