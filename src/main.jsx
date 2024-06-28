import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ErrorPage from './Error-page.jsx';
import App from './App.jsx';
import Shop from './Shop.jsx';
import logo from '/github.jpg';
import { Link } from 'react-router-dom';
import './main.css';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
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
    ]
  },
]);

function Header() {
  return (
    <div className='header'>
      Shopping Cart
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/shop' state={{categoryName: 'default'}}>Shop</Link>
      </div>
    </div>
  )
}

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
