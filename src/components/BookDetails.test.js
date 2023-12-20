import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookDetails from './BookDetails';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }), // Replace '1' with the desired book ID for testing
}));

jest.mock('../Data/all_books', () => [
  {
    id: 1,
    name: 'GOLANG',
    author: 'Sample Author',
    desc: 'Sample Description',
    price: '$19.99',
    availability: 10,
  },
]);

describe('BookDetails Component', () => {
  test('renders book details', () => {
    render(<Router>
      <Routes>
      <>
        <Route path="/" element={<BookDetails />} />
      </>
      </Routes>
    </Router>);

    // expect(screen.getByTestId('bookName')).not.toBeNull();

    expect(screen.getByAltText('')).toBeInTheDocument(); 
    expect(screen.getByText(/GOLANG/i)).toBeInTheDocument();
    // expect(screen.getByText(/BY - Herbert/i)).toBeInTheDocument();
    // expect(screen.getByText('4.2★')).toBeInTheDocument();
    // expect(screen.getByText(/Best book of JAVA till now/i)).toBeInTheDocument();
    // expect(screen.getByText('$1')).toBeInTheDocument();
    // expect(screen.getByText('Total Available Books - 10')).toBeInTheDocument();
    // expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    // expect(screen.getByText('Instant Buy')).toBeInTheDocument();
  });
});
