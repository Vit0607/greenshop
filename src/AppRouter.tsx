import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error as ErrorPage } from './pages/Error/Error.tsx';
import { Header } from './layout/Header/Header.tsx';
import { PlantCare } from './pages/PlantCare/PlantCare.tsx';
import { Shop } from './pages/Shop/Shop.tsx';
import { Blogs } from './pages/Blogs/Blogs.tsx';
import { Product } from './pages/Product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';
import Loader from './components/Loader/Loader.tsx';

const Home = lazy(() => import('./pages/Home/Home.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
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
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          await new Promise<void>(resolve => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
          const { data } = await axios.get(`${PREFIX}/plants/${params.id}`);
          return data;
        }
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
