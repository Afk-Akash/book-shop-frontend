import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookDetails from './BookDetails';

describe('BookDetails Component', () => {
  test('renders book details correctly', () => {
    render(<BookDetails />);

    expect(screen.getByAltText('')).toBeInTheDocument(); 
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
