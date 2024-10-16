// admin-layout.tsx
import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Admin Footer</p>
      </footer>
    </div>
  );
}
