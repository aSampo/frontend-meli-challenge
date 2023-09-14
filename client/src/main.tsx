import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import ErrorPage from './pages/ErrorPage';
import ItemDetailPage from './pages/ItemDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
