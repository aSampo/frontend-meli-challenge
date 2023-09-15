import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { fetchItemDetail } from '../api';
import ItemDetailPage from '../pages/ItemDetailPage';
import { HelmetProvider } from 'react-helmet-async';

jest.mock('../api', () => ({
  fetchItemDetail: jest.fn().mockResolvedValue({
    item: {
      id: '123',
      title: 'Sample Item',
      condition: 'Nuevo',
      sold_quantity: 10,
      price: {
        amount: 1000,
        currency: 'ARS'
      },
      picture: 'sample.jpg',
      description: 'Sample description'
    },
    categories: ['Category 1', 'Category 2']
  })
}));

it('renders item detail page with loading state and then displays item details', async () => {
  const route = '/items/123';
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/items/:itemId" element={<ItemDetailPage />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );

  await waitFor(() => {
    expect(fetchItemDetail).toHaveBeenCalledWith('123');
  });

  expect(screen.queryByTestId('loading-element')).toBeNull();
  expect(screen.getByText('Sample Item')).toBeInTheDocument();
  expect(screen.getByText('Nuevo - 10 vendidos')).toBeInTheDocument();
  expect(screen.getByText('$ 1.000,00')).toBeInTheDocument();
  expect(screen.getByText('Sample description')).toBeInTheDocument();
});
