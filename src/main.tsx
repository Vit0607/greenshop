import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home.tsx';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Header } from './layout/Header/Header.tsx';
import { PlantCare } from './pages/PlantCare/PlantCare.tsx';
import { Shop } from './pages/Shop/Shop.tsx';
import { Blogs } from './pages/Blogs/Blogs.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/care',
                element: <PlantCare />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
