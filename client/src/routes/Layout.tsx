import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Layout = () => {
  return (
    <div className="font-proxima bg-grey h-screen">
      <header className="flex items-center justify-center h-16 bg-yellow ">
        <section className="max-w-screen-lg flex w-full gap-4 p-2">
          <img src="src\assets\mercado-libre.svg" alt="MercadoLibre Logo" className="w-36" />
          <SearchBar />
        </section>
      </header>
      <section className="max-w-screen-lg m-auto p-4">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
