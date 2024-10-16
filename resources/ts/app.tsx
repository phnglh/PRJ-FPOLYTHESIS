import { AdminRoutes } from '@/routes/admin-routes';
import { AppRoutes } from '@/routes/app-routes';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path='/*' element={<AppRoutes />} />
      <Route path='/admin/*' element={<AdminRoutes />} />
    </Routes>
  );
}
