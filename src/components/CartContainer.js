import CartItem from "./CartItem";
import { useSelector,useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);

const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <header>
          <h2>your cart</h2>
        </header>
        <h4>is empty</h4>
      </div>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total cost
            <span className="total-price">{total} $</span>
          </h4>
        </div>
        <button className="btn clear-btn"
        onClick={()=> dispatch(openModal())}
        >clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
