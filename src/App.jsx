import { Link } from 'react-router-dom';
import './App.css';
import menClothing from './assets/shackets-data.jpg';
import jewelery from './assets/depositphotos_45960861-stock-photo-gold-jewelry.jpg';
import electronics from './assets/images.jpg';
import womenClothing from './assets/Tom-James-Spring-2024-Women-1.jpg';

function App() {
  const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis, enim sed iaculis venenatis, tellus nulla ornare magna, ut porttitor eros diam nec enim. Aenean molestie facilisis tellus ac venenatis. Aliquam scelerisque cursus velit sit amet accumsan. Sed vehicula gravida nunc, in suscipit elit facilisis ac. Nulla eget dui et sem lobortis lobortis.'
  
  const categories = [{ url: menClothing, name: 'men\'s clothing'}, { url: jewelery , name: 'jewelery'}, { url: electronics, name: 'electronics'}, { url: womenClothing, name: 'women\'s clothing'}];

  function Category({category}) {
    return (
      <Link to='shop' state={{categoryName: category.name}} className='card'>
        <img src={category.url} alt={category.name.charAt(0).toUpperCase() + category.name.slice(1)} />
        <h2>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h2>
        <p>{randomText}</p>        
      </Link>  
    );
  };
  
  return (
      <div className='container'>
        <h1 id='welcome'>Welcome</h1>
        {categories.map((el, index) => <Category key={index} category={el} />)}
      </div>    
  );
};

export default App;