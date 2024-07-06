// src/Routers/Routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Single from '../component/Single';
import Multiple from '../component/Multiple';
import Main from '../layout/Main';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
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
