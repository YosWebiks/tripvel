import { RouterProvider } from 'react-router-dom';
import { routes } from './pages/routes';
import Navbar from './pages/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
    </>
  );
}
