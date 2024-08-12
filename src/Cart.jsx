import { useState } from "react";

function Cart({ cart, change, remove, openCart }) {

  return (
    <>
      {cart.length > 0 && (
        <div className="cart"
        style={{
          display: openCart
            ? 'block'
            : 'none'
        }}>
          <div className="cart-item-container">
            {cart.map((x) => {
              return <CartItem key={x.id} item={x} change={change} remove={remove} />
            })}
          </div>
          <p>Total: {cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2)}€</p>
        </div>
      )}
    </>
  )
}

function CartItem({ item, change, remove }) {
  const [_amount, setAmount] = useState(item.amount);

  function handleChange(value) {
    console.log(value);
    if (value === 0) {
      if (confirm(`Do you want to remove "${item.title}" from the cart?`)) {
        remove(item.id);
      }
    } else if (value >= 0) {
      setAmount(+value);
      change(+value, item.id);
    }
  }

  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p>{item.price.toFixed(2)}€</p>
      <div>
        <button onClick={() => handleChange(_amount - 1)}>-</button>
        <input
          type="number"
          min={0}
          value={_amount}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
        />
        <button onClick={() => handleChange(_amount + 1)}>+</button>
      </div>
      <p>{(item.price * _amount).toFixed(2)}€</p>
      <button onClick={() => remove(item.id)}>Remove</button>
    </div>
  )
}

export default Cart;