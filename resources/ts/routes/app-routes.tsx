import { AboutPage } from '@/app/about';
import { CollectionPage } from '@/app/collection';
import { HomePage } from '@/app/home';
import { AppLayout } from '@/layouts/app-layout';
import { Navigate, useRoutes } from 'react-router-dom';

export function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Navigate replace to='/home' />,
        },
        {
          path: 'home',
          element: <HomePage />,
        },
        {
          path: 'collection',
          element: <CollectionPage />,
        },
        {
          path: 'contact',
          element: (
            <div>
              <p>Contact page content</p>
            </div>
          ),
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
      ],
    },
  ]);
}
