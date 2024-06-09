import { Link } from 'react-router-dom';
import './App.css';
import menClothing from './assets/shackets-data.jpg';
import jewelery from './assets/depositphotos_45960861-stock-photo-gold-jewelry.jpg';
import electronics from './assets/images.jpg';
import womenClothing from './assets/Tom-James-Spring-2024-Women-1.jpg';

function App() {
  const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis, enim sed iaculis venenatis, tellus nulla ornare magna, ut porttitor eros diam nec enim. Aenean molestie facilisis tellus ac venenatis. Aliquam scelerisque cursus velit sit amet accumsan. Sed vehicula gravida nunc, in suscipit elit facilisis ac. Nulla eget dui et sem lobortis lobortis.'
  
  function Category() {
    // div category with ellipsis onMouseEnter expand onMouseLeave downscale
    // onClick access Shop with clicked category
  }
  
  return (
    <>
      <div className='header'>
        Shopping Cart
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='shop'>Shop</Link>
        </div>
      </div>
      <div className='container'>
        <h1 id='welcome'>Welcome</h1>
        <div >
          <img src={menClothing} alt="Men's clothing" />
          <h2>Men's clothing</h2>
          <p>{randomText}</p>
        </div>
        <div>
          <img src={jewelery} alt="Jewelery" />
          <h2>Jewelery</h2>
          <p>{randomText}</p>
        </div>
        <div>
          <img src={electronics} alt="Electronics" />
          <h2>Electronics</h2>
          <p>{randomText}</p>
        </div>
        <div>
          <img src={womenClothing} alt="Women's clothing" />
          <h2>Women's clothing</h2>
          <p>{randomText}</p>
        </div>    
      </div>
    </>
  )
};

export default App;
