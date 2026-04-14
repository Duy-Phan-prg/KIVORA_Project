import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      // Auth routes will be added here
    ],
  },
]);