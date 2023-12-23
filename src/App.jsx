import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import Error404 from './pages/Error404';
import StartPage from './pages/StartPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import './App.css';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout/>,
    errorElement: <Error404 />, 
    children: [
      { path: '/', element: <StartPage /> },
      { path: '/page1', element: <Page1 /> },
      { path: '/page2', element: <Page2 /> },
    ]},
]);

function App() {
  return (
    <main>
       <RouterProvider router = { router } />
    </main>
  );
}

export default App;