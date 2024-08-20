import './Item.css';

function Item(props) {
  return (
    <div
      key={props.id}
      className='item'
    >
      <p className='item-title' title={props.title}>{props.title}</p>
      <div className='item-image'>
        <img className="big" src={props.image} />
      </div>
      <p style={{overflowY: 'scroll', wordBreak: 'break-word'}}>{props.description}</p>
      <div style={{display: 'flex'}}>
        <p>{props.rating.rate}</p>
        <div className='star'>
          <div className='rating' style={{width: `${props.rating.rate * 20}%`}}>
            <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
          </div>
        </div>
        <p>{props.rating.count}</p>
      </div>
      <h2>{props.price.toFixed(2)}€</h2>
      <button onClick={props.onClick}>Add to cart</button>
    </div>
  )
}

export default Item;