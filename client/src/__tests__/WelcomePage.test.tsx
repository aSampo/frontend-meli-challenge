import { render, screen } from '@testing-library/react';
import WelcomePage from '../pages/WelcomePage';
import { HelmetProvider } from 'react-helmet-async';

describe('WelcomePage', () => {
  it('renders welcome page with correct content', () => {
    render(
      <HelmetProvider>
        <WelcomePage />
      </HelmetProvider>
    );

    expect(screen.getByText('¡Bienvenido a Mercado Libre!')).toBeInTheDocument();

    const logoImage = screen.getByAltText('Mercado Libre Logo') as HTMLImageElement;
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.alt).toContain('Mercado Libre Logo');

    expect(screen.getByText('Encuentra los mejores productos aquí.')).toBeInTheDocument();
  });
});
