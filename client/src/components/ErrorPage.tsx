import React from 'react';

interface ErrorPageProps {
  customMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ customMessage }) => {
  const defaultMessage = 'Lo sentimos, pero ocurrió un error. Por favor, intente nuevamente más tarde.';
  const messageToDisplay = customMessage || defaultMessage;

  return (
    <div id="error-page" className="flex justify-center items-center p-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">¡Ups! :(</h1>
        <p className="text-2xl">{messageToDisplay}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
