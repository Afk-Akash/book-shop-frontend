import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookDetails from './BookDetails';

describe('BookDetails Component', () => {
  test('renders book details correctly', () => {
    // Render the component with the mock book data
    render(<BookDetails />);

    // Check if the component renders the book details
    expect(screen.getByAltText('')).toBeInTheDocument(); // Replace '' with alt text for the image if available
    expect(screen.getByText(/GOLANG/i)).toBeInTheDocument();
    expect(screen.getByText(/BY - Herbert/i)).toBeInTheDocument();
    expect(screen.getByText('4.2★')).toBeInTheDocument();
    expect(screen.getByText(/Best book of JAVA till now/i)).toBeInTheDocument();
    expect(screen.getByText('$1')).toBeInTheDocument();
    expect(screen.getByText('Total Available Books - 10')).toBeInTheDocument();
    expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    expect(screen.getByText('Instant Buy')).toBeInTheDocument();
  });
});
