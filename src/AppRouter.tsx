import { lazy, Suspense } from 'react';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error as ErrorPage } from './pages/Error/Error.tsx';
import { Header } from './components/shared/Header/Header.tsx';
import { PlantCare } from './pages/PlantCare/PlantCare.tsx';
import { Shop } from './pages/Shop/Shop.tsx';
import { Blogs } from './pages/Blogs/Blogs.tsx';
import { Product } from './pages/Product/Product.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';
import Loader from './components/ui/Loader/Loader.tsx';

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
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}/plants/${params.id}`)
                  .then(data => resolve(data))
                  .catch(e => reject(e));
              }, 2000);
            })
          });
          //   return defer({
          //     data: axios.get(`${PREFIX}/plants/${params.id}`).then(data => data)
          //   });

          //   await new Promise<void>(resolve => {
          //     setTimeout(() => {
          //       resolve();
          //     }, 2000);
          //   });
          //   const { data } = await axios.get(`${PREFIX}/plants/${params.id}`);
          //   return data;
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
