import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Error-page.jsx';
import App from './App.jsx';
import Shop from './Shop.jsx';
import logo from '/github.jpg';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <div className='footer'>
        <div className='signature'>
          {`Copyright © Bengoro1 ${new Date().getFullYear()}`}
          <img
            src={logo}
            alt='Logo'
            className='git-logo'
            onClick={() => window.open('https://github.com/Bengoro1','_newtab')}
          />
        </div>
      </div>
  </React.StrictMode>,
);
