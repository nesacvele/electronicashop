import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// pages
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import FavoritePage from './pages/FavoritePage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  // mainRouter
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <ProductPage/>
      },
      {
        path:'/login',
        element: <LoginPage />
      },
      {
        path: '/favorite',
        element: <FavoritePage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ],
    errorElement: <ErrorPage/>,
  }

  // dasboard example
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

