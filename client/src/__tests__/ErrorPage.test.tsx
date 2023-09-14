import { render, screen } from '@testing-library/react';
import ErrorPage from '../pages/ErrorPage';

describe('ErrorPage', () => {
  it('renders with default error message when custom message is not provided', () => {
    render(<ErrorPage />);
    const defaultMessage = 'Lo sentimos, pero ocurrió un error. Por favor, intente nuevamente más tarde.';
    expect(screen.getByText('¡Ups! :(')).toBeInTheDocument();
    expect(screen.getByText(defaultMessage)).toBeInTheDocument();
  });

  it('renders with custom error message when provided', () => {
    const customMessage = 'Este es un mensaje de error personalizado.';
    render(<ErrorPage customMessage={customMessage} />);
    expect(screen.getByText('¡Ups! :(')).toBeInTheDocument();
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    render(<ErrorPage />);
  });
});
