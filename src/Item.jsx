import './Item.css';

function Item(props) {
  return (
    <div
      key={props.id}
    >
      <p>{props.title}</p>
      <img className="big" src={props.image} />
      <p>{props.price}€</p>
      <p>{props.description}</p>
      <p>{props.rating.rate} {props.rating.count}</p>
    </div>
  )
}

export default Item;