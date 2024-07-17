import { createBrowserRouter, Outlet, RouterProvider, Link } from 'react-router-dom';
import ErrorPage from './Error-page.jsx';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import logo from '/github.jpg';
import Cart from './Cart.jsx';
import './main.css';
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([]);
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Header />
          <Outlet context={[cart, setCart]} />
          <Footer />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
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
    const [openCart, setOpenCart] = useState(false);

    return (
      <div className='header'>
        Shopping Cart
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/shop' state={{categoryName: 'default'}}>Shop</Link>
          <img className='cart-icon' onClick={() => setOpenCart(!openCart)} src='/1413908.png' />
          {openCart && (
            <Cart cart={cart}/>
          )}
        </div>
      </div>
    )
  }
  
  function Footer() {
    const date = new Date().getFullYear();
    return (
      <div className='footer'>
        <div className='signature'>
          {`Copyright © Bengoro1 ${date}`}
          <img
            src={logo}
            alt='Logo'
            className='git-logo'
            onClick={() => window.open('https://github.com/Bengoro1','_newtab')}
            />
        </div>
      </div>
    )
  }

  return (
    <RouterProvider router={router}/>
  );
};

export default App;

// if cart.length > 0 red dot with cart.length on cart-icon
// setOpenCart(true) if (mouse hover cart || cart-icon) else setOpenCart(false)
// cart-icon onClick setOpenCart(!openCart)