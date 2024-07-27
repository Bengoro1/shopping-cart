import './Item.css';

function Item(props) {
  return (
    <div
      key={props.id}
      className='item'
    >
      <p>{props.title}</p>
      <img className="big" src={props.image} />
      <p>{props.price.toFixed(2)}€</p>
      <p style={{overflow: scroll}}>{props.description}</p>
      <p>{props.rating.rate} {props.rating.count}</p>
      <button onClick={props.onClick}>Add to cart</button>
    </div>
  )
}

export default Item;