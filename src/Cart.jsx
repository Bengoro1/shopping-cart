import { useState } from "react";

function Cart({ cart, change }) {
  
  function CartItem({title, price, amount, id}) {
    const [_amount, setAmount] = useState(amount);

    function handleChange(value) {
      setAmount(value);
      change(value, id);
    }

    return (
      <div className="cart-item">
        <p>{title}</p>
        <p>{price}€</p>
        <div>
          <button onClick={() => handleChange(_amount - 1)}>-</button>
          <input type="text" value={_amount} onChange={(e) => handleChange(e.target.value)} />
          <button onClick={() => handleChange(_amount + 1)}>+</button>
        </div>
        <p>{price * _amount}€</p>
      </div>
    )
  }

  return (
    <>
      {cart.length > 0 && (
        <div className="cart">
        {cart.map((x) => {
          return <CartItem key={x.id} title={x.title} price={x.price} id={x.id} amount={x.amount} />
        })}
        <p>Total: {cart.reduce((a, b) => a + b.price * b.amount, 0)}€</p>
        </div>
      )}
    </>
  )
}

export default Cart;

// CartItem component with amount useState