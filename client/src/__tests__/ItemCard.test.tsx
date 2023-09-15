import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { Item } from '../models/Item';

const mockItem: Item = {
  id: '123',
  title: 'Sample Item',
  price: {
    amount: 1000,
    currency: 'ARS',
    decimals: 0
  },
  picture: 'sample.jpg',
  city: 'sample City',
  condition: 'Nuevo',
  free_shipping: true
};

describe('ItemCard', () => {
  it('renders item card with correct content and link', () => {
    render(
      <MemoryRouter>
        <ItemCard item={mockItem} />
      </MemoryRouter>
    );
    expect(screen.getByText('$ 1.000,00')).toBeInTheDocument();
    expect(screen.getByText('Sample Item')).toBeInTheDocument();
    expect(screen.getByText('sample city')).toBeInTheDocument();

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/items/123');
  });
});
