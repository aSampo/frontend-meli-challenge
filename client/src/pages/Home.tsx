import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import logo from '../assets/mercado-libre.svg';

const Home = () => {
  return (
    <body className="font-proxima bg-meli-grey h-screen">
      <header>
        <nav className="flex items-center justify-center h-16 bg-meli-yellow ">
          <section className="max-w-screen-lg flex w-full gap-4 p-2">
            <img src={logo} alt="MercadoLibre Logo" className="w-36" />
            <SearchBar />
          </section>
        </nav>
      </header>
      <section className="max-w-screen-lg m-auto p-4">
        <Outlet />
      </section>
    </body>
  );
};

export default Home;
