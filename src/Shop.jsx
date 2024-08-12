import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import Item from './Item';
import './Shop.css';

function Shop( {change} ) {
  const [cart, setCart] = useOutletContext();
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
      if (currentCategory == 'default' || typeof currentCategory != 'string') {
        setFilteredItems(items);
      } else {
        setFilteredItems(items.filter(item => currentCategory == item.category));
      }
    }
  }, [currentCategory, items]);

  function handleCategoryClick(el) {
    setCurrentCategory(el);
  }

  function handleAddToCart(e) {
    if (cart.some(cartItem => cartItem.id == e.id)) {
      if (confirm(`${e.title} already in cart. Do you want to add the same item again?`)) {
        change('increment', e.id);
      }
    } else {
      setCart([...cart, {title: e.title, price: e.price, id: e.id, amount: 1}]);
    }
  }

  return (
    <>
      {filteredItems ? (
        <>
          <div className='card-container'>
            <div className='category-navbar'>
            <div onClick={() => handleCategoryClick('default')}>All</div>
            {categories.map((el, index) => {
              return <div key={index} onClick={() => handleCategoryClick(el)}>
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
                onClick={() => handleAddToCart(item)}
              />
            })}
          </div>
        </>
      ) : (<div></div>)}
    </>
  );
}

export default Shop;

