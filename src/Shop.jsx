import { useEffect, useState } from 'react';
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
        <div className='card'>
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
      )}
    </>
  );
}

export default Shop;