import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import logo from '../assets/mercado-libre.svg';

const HomePage = () => {
  return (
    <main className="font-proxima bg-meli-grey min-h-screen">
      <header>
        <nav className="flex items-center justify-center h-16 bg-meli-yellow ">
          <section className="max-w-screen-lg flex w-full gap-4 p-2">
            <Link to="/" aria-label="Volver al inicio" className="flex items-center justify-center">
              <img data-testid="meli-logo" src={logo} alt="MercadoLibre Logo" className="w-36" />
            </Link>
            <SearchBar />
          </section>
        </nav>
      </header>
      <section className="max-w-screen-lg m-auto p-4">
        <Outlet />
      </section>
    </main>
  );
};

export default HomePage;
