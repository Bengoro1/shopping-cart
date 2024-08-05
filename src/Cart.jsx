import { useState } from "react";

function Cart({ cart, change, remove }) {
  function CartItem({title, price, amount, id}) {
    const [_amount, setAmount] = useState(amount);

    function handleChange(value) {
      if (value === 0) {
        if (confirm(`Do you want to remove "${title}" from the cart?`)) {
          remove(id);
        }
      } else {
        setAmount(value);
        change(value, id);
      }
    }

    return (
      <div className="cart-item">
        <p>{title}</p>
        <p>{price.toFixed(2)}€</p>
        <div>
          <button onClick={() => handleChange(_amount - 1)}>-</button>
          <input
            
            type="number"
            min={0}
            value={_amount}
            onChange={(e) => handleChange(+e.target.value)}
            onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
          />
          {/* ////////////////////// */}
          {console.log(cart)}
          <button onClick={() => handleChange(_amount + 1)}>+</button>
        </div>
        <p>{(price * _amount).toFixed(2)}€</p>
        <button onClick={() => remove(id)}>Remove</button>
      </div>
    )
  }

  return (
    <>
      {cart.length > 0 && (
        <div className="cart" key='cart'>
          {cart.map((x) => {
            return <CartItem key={x.id} title={x.title} price={x.price} id={x.id} amount={x.amount} />
          })}
          <p>Total: {cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2)}€</p>
        </div>
      )}
    </>
  )
}

export default Cart;

