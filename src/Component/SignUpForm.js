import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm.style';

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        mobilenumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
    });

    const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
    const [isEmailAvailable, setIsEmailAvailable] = useState(true);

    const checkUsernameAvailability = async (username) => {
        try {
            const response = await fetch(`http://localhost:8080/users/${username}`);
            const data = await response.json();
            setIsUsernameAvailable(!data);
        } catch (error) {
            console.error('Error checking username:', error);
        }
    };

    const checkEmailAvailability = async (email) => {
        try {
            const response = await fetch(`http://localhost:8080/users/${email}`);
            const data = await response.json();
            setIsEmailAvailable(!data);
        } catch (error) {
            console.error('Error checking email:', error);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, error: '' });
        if(name === 'username'){
            setIsUsernameAvailable(true);
        }
        if(name==='email')
        setIsEmailAvailable(true)

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !validatePhoneNumber(formData.mobilenumber)
        ) {
            setFormData({ ...formData, error: 'please enter a valid phone number' });
            return;
        } else if (!validatePassword(formData.password)) {

            setFormData({ ...formData, error: 'Invalid password' });
            return;
        }
        // If validations pass, perform signup action
        console.log('Form submitted:', formData);
        // Reset form fields after successful signup
        setFormData({
            name: '',
            username: '',
            mobilenumber: '',
            email: '',
            password: '',

            error: '',
        });
        window.location.href = '/login';



    };


    const handleTogglePassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return passwordRegex.test(password);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);

    };


    return (
        <div style={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    style={styles.inputField}
                    required
                />
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="username"
                    onChange={(e) => {
                        handleChange(e);

                    }}
                    onBlur={(e) => checkUsernameAvailability(e.target.value)}

                    style={styles.inputField}
                    required
                />
                {!isUsernameAvailable && (
                    <p style={styles.errorText}>Username is already registered</p>
                )}
                <input
                    type="number"
                    name="mobilenumber"
                    value={formData.mobilenumber}
                    placeholder="mobilenumber"
                    onChange={handleChange}
                    style={styles.inputField}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={(e) => {
                        handleChange(e);

                    }}
                    onBlur={(e) => checkEmailAvailability(e.target.value)}
                    style={styles.inputField}
                    required
                />
                {!isEmailAvailable && (<p style={styles.errorText}>Email already Exists</p>)}
                <div style={styles.passwordContainer}>
                    <input
                        type={formData.showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onChange={handleChange}
                        style={styles.inputField}
                        required
                    />

                    <button type="button" onClick={handleTogglePassword} style={styles.passwordButton}>
                        {formData.showPassword ? 'Hide' : 'Show'} Password
                    </button>
                </div>
                <button type="submit" style={styles.submitButton} disabled={!isUsernameAvailable || !isEmailAvailable}>Submit</button>
                {formData.error && <p style={styles.errorText}>{formData.error}</p>}
            </form>
            <Link to="/login" />

        </div>
    );
};

export default SignUpForm;
