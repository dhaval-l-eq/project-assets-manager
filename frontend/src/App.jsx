import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DefaultLayout from './components/layouts/DefaultLayout';

const router = createBrowserRouter([
   { path: '/', element: <DefaultLayout />, children: [{ path: '/', element: <Dashboard /> }] },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
