import "../styles/cart.css";
import CartItem from "./CartItem";

const Cart = ({ cartItems, setCartItems }) => {

    const handleRemoveFromCart = (idx) => {
        setCartItems(cartItems.filter((item, index) => index !== idx));
    };

    return (
        <div className="cart-container">
            <h2 className="text-center">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center align-self-center">No items in cart</p>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {cartItems.map((item, idx) => (
                        <CartItem key={idx} product={item} onRemove={() => handleRemoveFromCart(idx)} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
