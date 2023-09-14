import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

beforeEach(() => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
});

test('Renders input correctly', () => {
  const searchInput = screen.getByTestId('search-input');
  expect(searchInput).toBeInTheDocument();
});

test('Renders button correctly', () => {
  const searchButton = screen.getByTestId('search-button');
  expect(searchButton).toBeInTheDocument();
});

test('Renders button logo correctly', () => {
  const searchLogo = screen.getByTestId('search-logo');
  expect(searchLogo).toBeInTheDocument();
});
