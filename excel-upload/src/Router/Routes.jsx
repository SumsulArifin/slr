// src/Routers/Routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Single from '../component/Single';
import Multiple from '../component/Multiple';
import Main from '../layout/Main';
import Home from '../component/Home';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>

      }
      ,
      {
        path: 'single',
        element: <Single></Single>,
      },
      {
        path: 'multiple',
        element: <Multiple />,
      },
    ],
  },
]);
