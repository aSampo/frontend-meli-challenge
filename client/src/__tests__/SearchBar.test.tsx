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

test('Renderiza el input correctamente', () => {
  const searchInput = screen.getByTestId('search-input');
  expect(searchInput).toBeInTheDocument();
});

test('Renderiza el buton correctamente', () => {
  const searchButton = screen.getByTestId('search-button');
  expect(searchButton).toBeInTheDocument();
});

test('Renderiza el logo del boton correctamente', () => {
  const searchLogo = screen.getByTestId('search-logo');
  expect(searchLogo).toBeInTheDocument();
});

// test('navigates to items when the search button is clicked', () => {
//   const searchBar = screen.getByTestId('search-input');
//   const searchValue = 'example search';

//   // Simula la entrada de texto en el campo de búsqueda
//   fireEvent.change(searchBar, { target: { value: searchValue } });
//   userEvent.click(screen.getByTestId('search-button'));

//   expect(mockNavigate).toHaveBeenNthCalledWith(1, 'items');
// });
