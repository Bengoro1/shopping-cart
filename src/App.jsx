import { Link } from 'react-router-dom';
import logo from '/github.jpg';
import './App.css';
import menClothing from './assets/shackets-data.jpg';
import jewelery from './assets/depositphotos_45960861-stock-photo-gold-jewelry.jpg';
import electronics from './assets/images.jpg';
import womenClothing from './assets/Tom-James-Spring-2024-Women-1.jpg';

function App() {
  const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis, enim sed iaculis venenatis, tellus nulla ornare magna, ut porttitor eros diam nec enim. Aenean molestie facilisis tellus ac venenatis. Aliquam scelerisque cursus velit sit amet accumsan. Sed vehicula gravida nunc, in suscipit elit facilisis ac. Nulla eget dui et sem lobortis lobortis.'
  return (
    <>
      <div className='header'>
        Shopping Cart
        <Link to='/'>Home</Link>
        <Link to='shop'>Shop</Link>
      </div>
      <div className='container'>
        <div>
          <img src={menClothing} alt="Men's clothing" />
          <p>{randomText}</p>
        </div>
        <div>
          <img src={jewelery} alt="Jewelery" />
          <p>{randomText}</p>
        </div>
        <div>
          <img src={electronics} alt="Electronics" />
          <p>{randomText}</p>
        </div>
        <div>
          <img src={womenClothing} alt="Women's clothing" />
          <p>{randomText}</p>
        </div>    
      </div>
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
    </>
  )
};

export default App;
