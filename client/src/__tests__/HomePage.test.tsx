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

test('Renderiza la barra de búsqueda correctamente', () => {
  const searchBarElement = screen.getByTestId('search-bar');
  expect(searchBarElement).toBeInTheDocument();
});

test('Renderiza el logo de MercadoLibre correctamente', () => {
  const logoElement = screen.getByTestId('meli-logo') as HTMLImageElement;
  expect(logoElement).toBeInTheDocument();
  expect(logoElement.alt).toContain('MercadoLibre Logo');
});
