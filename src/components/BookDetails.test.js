import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookDetails from './BookDetails';
import { BrowserRouter as Router, Route,Routes,MemoryRouter } from 'react-router-dom';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useParams: jest.fn().mockReturnValue({ id: '1' }), // Replace '1' with the desired book ID for testing
// }));

describe('BookDetails Component', () => {
  beforeEach(() => {
    // Mock the useParams hook
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({ id: '123' }),
    }));
  });

  test('renders book details',async () => {
    const mockBook = {
      bookName: 'Sample Book',
      author: 'John Doe',
      rating: 4.2,
      description: 'This is a sample book description.',
      price: '$19.99',
      numberOfAvailableBooks: 10,
      largeImageUrl: 'sample-image.jpg',
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ books: mockBook }),
      })
    );

    render(<MemoryRouter initialEntries={['/book/123']}>
      <Routes>
      <>
        <Route path="/book/:id" element={<BookDetails />} />
      </>
      </Routes>
    </MemoryRouter>);


await waitFor(() => {
  // expect(screen.getByTestId('bookName')).toHaveTextContent(mockBook.bookName);
  expect(screen.getByText(`BY - ${mockBook.author}`)).toBeInTheDocument();
  expect(screen.getByText('4.2★')).toBeInTheDocument();
  expect(screen.getByText(mockBook.description)).toBeInTheDocument();
  expect(screen.getByText(mockBook.price)).toBeInTheDocument();
  expect(screen.getByText(`Total Available Books - ${mockBook.numberOfAvailableBooks}`)).toBeInTheDocument();
});


  });
});
