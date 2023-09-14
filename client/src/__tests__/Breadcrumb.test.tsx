import { render, screen } from '@testing-library/react';
import Breadcrumb from '../components/Breadcrumb';

describe('Breadcrumb', () => {
  it('renders breadcrumbs correctly with multiple categories', () => {
    const categories = ['Electronics', 'Smartphones', 'Samsung'];
    render(<Breadcrumb categories={categories} />);

    const breadcrumbList = screen.getByLabelText('Breadcrumb');
    const breadcrumbItems = screen.getAllByRole('listitem');

    expect(breadcrumbList).toBeInTheDocument();
    expect(breadcrumbItems).toHaveLength(categories.length);

    categories.forEach((category, index) => {
      if (index !== 0) {
        const separator = screen.getByTestId(`separator-${category}`);
        expect(separator).toBeInTheDocument();
      }

      const link = screen.getByText(category);
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(category);
    });
  });

  it('renders breadcrumbs correctly with a single category', () => {
    const categories = ['Electronics'];
    render(<Breadcrumb categories={categories} />);

    const breadcrumbList = screen.getByLabelText('Breadcrumb');
    const breadcrumbItems = screen.getAllByRole('listitem');

    expect(breadcrumbList).toBeInTheDocument();
    expect(breadcrumbItems).toHaveLength(categories.length);

    const link = screen.getByText('Electronics');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Electronics');
  });

  it('renders without crashing when no categories are provided', () => {
    render(<Breadcrumb categories={[]} />);
  });
});
