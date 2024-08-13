import { useEffect, useState } from "react";

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

  useEffect(() => {
    let timeout;

    if (_amount === 0) {
      timeout = setTimeout(() => {
        if (confirm(`Do you want to remove "${item.title}" from the cart?`)) {
          remove(item.id);
        } else {
          setAmount(0);
          change(0, item.id);
        }
      }, 3000);
    } else clearTimeout(timeout);

    return () => {
      clearTimeout(timeout);
    }
  }, [_amount]);

  function handleChange(value) {
    if (value >= 0) {
      setAmount(value);
      change(value, item.id);
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
          value={_amount.toString()}
          onChange={(e) => handleChange(+e.target.value)}
          onKeyDown={(e) => ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault()}
        />
        <button onClick={() => handleChange(_amount + 1)}>+</button>
      </div>
      <p>{(item.price * _amount).toFixed(2)}€</p>
      <button onClick={() => remove(item.id)}>Remove</button>
    </div>
  )
}

export default Cart;