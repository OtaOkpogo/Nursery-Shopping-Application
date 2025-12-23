import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;

