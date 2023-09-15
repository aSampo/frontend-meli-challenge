import logo from '../assets/mercado-libre.svg';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 text-center">
      <img src={logo} alt="MercadoLibre Logo" className="w-96" />
      <h1 className="text-4xl font-semibold mb-4 ">¡Bienvenido a MercadoLibre!</h1>
      <p className="text-gray-600 mb-8 ">Encuentra los mejores productos aquí.</p>
    </div>
  );
};

export default WelcomePage;
