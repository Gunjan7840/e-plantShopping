import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Total: ₹{item.price * item.quantity}</p>

              <div>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, amount: -1 }))
                  }
                >
                  -
                </button>

                <span style={{ margin: "0 10px" }}>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, amount: 1 }))
                  }
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginTop: "10px" }}
              >
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h2>Total Cart Amount: ₹{totalAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default CartItem;
