import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import ErrorPage from './pages/ErrorPage';
import ItemDetailPage from './pages/ItemDetailPage';
import WelcomePage from './pages/WelcomePage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <WelcomePage />
      },
      {
        path: 'items',
        element: <ItemsPage />
      },
      {
        path: 'items/:itemId',
        element: <ItemDetailPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
