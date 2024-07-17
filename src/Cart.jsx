import { useState } from "react";

function Cart({ cart }) {
  const [amount, setAmount] = useState(1);

  function handleDecrement() {
    setAmount(amount - 1);
  }

  function handleIncrement() {
    setAmount(amount + 1);
  }

  return (
    <>
      {cart.length > 0 && (
        <div className="cart">
        {cart.map((x) => {
          return <div className="cart-item" key={x.id}>
            <p>{x.title}</p>
            <p>{x.price + '€'}</p>
            <div>
              <button onClick={handleDecrement}>-</button>
              <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />
              <button onClick={handleIncrement}>+</button>
            </div>
            <p>{x.amount}</p>
          </div>
        })}
        <>
          <p>Total</p>
          <p>{cart.reduce((a, b) => a + b.price, 0)}</p>
        </>
        </div>
      )}
    </>
  )
}

export default Cart;

// CartItem component with amount useState
// when item already in cart message 'Item already in cart. Do you want to add the same item again?'

