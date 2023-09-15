import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

beforeEach(() => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
});

test('Renders the search bar correctly', () => {
  const searchBarElement = screen.getByTestId('search-bar');
  expect(searchBarElement).toBeInTheDocument();
});

test('Renders the Mercado Libre logo correctly', () => {
  const logoElement = screen.getByTestId('meli-logo') as HTMLImageElement;
  expect(logoElement).toBeInTheDocument();
  expect(logoElement.alt).toContain('Mercado Libre Logo');
});
