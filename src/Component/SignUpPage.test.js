/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';

jest.mock('./SignUpForm', () => () => <div data-testid="signup-form">SignUpForm Mock</div>);

describe('SignUpPage Component', () => {
    it('renders Sign Up heading', () => {
        const { getByText } = render(<SignUpPage />);
        const headingElement = getByText('Sign Up');
        expect(headingElement).toBeInTheDocument();
    });

    it('renders SignUpForm component', () => {
        const { getByTestId } = render(<SignUpPage />);
        const signUpFormElement = getByTestId('signup-form');
        expect(signUpFormElement).toBeInTheDocument();
    });

    it('does not render incorrect content', () => {
        const { queryByText } = render(<SignUpPage />);
        const incorrectElement = queryByText('Incorrect Content');
        expect(incorrectElement).toBeNull();
    });
});
