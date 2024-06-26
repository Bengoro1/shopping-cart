import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Item from './Item';

function Shop() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState();
  const { state: { categoryName }} = useLocation();
  const [currentCategory, setCurrentCategory] = useState(categoryName);
  const [categories, setCategories] = useState();
  const [filteredItems, setFilteredItems] = useState();

  useEffect(() => {
    const _categories = [];
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json())
      .then((resp) => {
        setItems(resp);
        resp.map((x) => {
          if (!_categories.includes(x.category)) {
            _categories.push(x.category);           
          }
        });
        setCategories(_categories);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (items) {
      if (currentCategory == 'default') {
        setFilteredItems(items);
      } else {
        setFilteredItems(items.filter(item => currentCategory == item.category));
      }
    }
  }, [currentCategory, items]);

  function handleClick(el) {
    setCurrentCategory(el);
  }

  return (
    <>
      {filteredItems && (
        <>
          <div className='card-container'>
            <div className='category-navbar'>
            <div onClick={() => handleClick('default')}>All</div>
            {categories.map((el, index) => {
              return <div key={index} onClick={() => handleClick(el)}>
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </div>
            })}
            </div>
            {filteredItems.map((item) => {
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

// filter if currentCategory != 'default'
// cart icon on item with amount of items
// onClick on item position absolute detailed div
// in header cart icon with item.price * amount
// total = reduce a,b item.price * amount