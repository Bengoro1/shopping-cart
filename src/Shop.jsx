import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

function Shop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json())
      .then((resp) => setCart(resp))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {cart && (
        <>
          <div className='header'>
            Shopping Cart
            <div className='links'>
              <Link to='/'>Home</Link>
              <Link to='shop'>Shop</Link>
            </div>
          </div>
          <div className='card-container'>
            {cart.map((item) => {
              {console.log(item.category)}
              return <Item
                key={item.id} 
                title={item.title} 
                image={item.image} 
                price={item.price} 
                description={item.description}
                rating={item.rating}
              />
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Shop;

// create Categories
// onClick category show Category items
// cart icon on item with amount of items
// onClick on item position absolute detailed div
// in header cart icon with item.price * amount
// total = reduce a,b item.price * amount