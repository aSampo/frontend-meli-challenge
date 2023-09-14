import { render, waitFor, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchItemsBySearch } from '../api'; // Asume que has importado fetchItemsBySearch correctamente
import Items from '../pages/ItemsPage';

jest.mock('../api', () => ({
  fetchItemsBySearch: jest.fn().mockResolvedValue({
    items: [
      {
        id: '1',
        picture: 'camiseta.jpg',
        title: 'Camiseta',
        price: { amount: 100, currency: 'ARS' },
        city: 'Buenos Aires'
      },
      {
        id: '2',
        picture: 'pelota.jpg',
        title: 'Pelota',
        price: { amount: 500, currency: 'ARS' },
        city: 'Cordoba'
      },
      {
        id: '3',
        picture: 'botines.jpg',
        title: 'Botines',
        price: { amount: 1500, currency: 'ARS' },
        city: 'Santa Fe'
      }
    ],
    categories: ['Categoria 1', 'Categoria 2']
  })
}));

describe('Items Component', () => {
  it('should render items correctly', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/items?search=futbol']}>
          <Items />
        </MemoryRouter>
      );
    });

    await waitFor(() => {});

    await waitFor(() => {
      expect(fetchItemsBySearch).toHaveBeenCalledWith('futbol');
    });

    const item1Title = screen.getByText('Camiseta');
    const item1Price = screen.getByText('$ 100,00');
    const item1City = screen.getByText('Buenos Aires', { exact: false });

    expect(item1Title).toBeInTheDocument();
    expect(item1Price).toBeInTheDocument();
    expect(item1City).toBeInTheDocument();
  });
});
