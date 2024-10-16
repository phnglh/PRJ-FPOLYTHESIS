// admin-routes.tsx
import { AdminLayout } from '@/layouts/admin-layout';
import { Navigate, useRoutes } from 'react-router-dom';

export function AdminRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Navigate replace to='/admin/dashboard' />,
        },
        {
          path: 'dashboard',
          element: <h1>dashboard</h1>,
        },
        {
          path: 'product-management',
          element: <h1>product-management</h1>,
        },
      ],
    },
  ]);
}
