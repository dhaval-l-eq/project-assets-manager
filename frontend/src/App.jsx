import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DefaultLayout from './components/layouts/DefaultLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddProject from './pages/AddProject';
import ImpProject from './pages/ImpProject';
import { queryClient } from './utils/service';
import EditProject from './pages/EditProject';

const router = createBrowserRouter([
   {
      path: '/',
      element: <DefaultLayout />,
      children: [
         { path: '', element: <Dashboard /> },
         { path: '/add', element: <AddProject /> },
         { path: '/important', element: <ImpProject /> },
         { path: '/edit/:projectId', element: <EditProject /> },
      ],
   },
]);

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
      </QueryClientProvider>
   );
}

export default App;
