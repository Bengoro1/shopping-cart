import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Item from './Item';

function Shop() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState();
  const { state: { categoryName }} = useLocation();
  const [currentCategory, setCurrentCategory] = useState(categoryName);
  //map items.category if !include category [...categories, category] 

  console.log(currentCategory);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json())
      .then((resp) => setItems(resp))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {items && (
        <>
          <div className='header'>
            Shopping Cart
            <div className='links'>
              <Link to='/'>Home</Link>
              <Link to='/shop' state={{categoryName: 'default'}}>Shop</Link>
            </div>
          </div>
          <div className='card-container'>
            {items.map((item) => {
              {console.log(item)}
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