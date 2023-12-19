import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm.style';

const SignUpForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !validatePassword(formData.password) ||
            !validatePhoneNumber(formData.mobileNumber)
        ) {
            setFormData({ ...formData, error: 'Invalid data. Please check the fields.' });
            return;
        }
        // If validations pass, perform signup action
        console.log('Form submitted:', formData);
        // Reset form fields after successful signup
        setFormData({
            name: '',
            username: '',
            mobileNumber: '',
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
        return phoneNumber.length === 10 && !isNaN(phoneNumber);

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
                    onChange={handleChange}
                    style={styles.inputField}
                    required
                />
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
                    onChange={handleChange}
                    style={styles.inputField}
                    required
                />
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
                <button type="submit" style={styles.submitButton}>Submit</button>
                {formData.error && <p style={styles.errorText}>{formData.error}</p>}
            </form>
            <Link to="/login" />

        </div>
    );
};

export default SignUpForm;



