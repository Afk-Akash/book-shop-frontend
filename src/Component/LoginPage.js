import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (

        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div >
    );
};

export default LoginPage;
