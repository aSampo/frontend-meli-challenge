import logo from '../assets/mercado-libre.svg';
import Head from '../components/Head';

const WelcomePage = () => {
  const title = '¡Bienvenido a Mercado Libre!';
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 text-center">
      <Head title={title} />
      <img src={logo} alt="Mercado Libre Logo" className="w-96" />
      <h1 className="text-4xl font-semibold mb-4 ">{title}</h1>
      <p className="text-gray-600 mb-8 ">Encuentra los mejores productos aquí.</p>
    </div>
  );
};

export default WelcomePage;
