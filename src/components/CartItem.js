import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <section className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p className="item-p">{price} $</p>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          remove
        </button>
      </div>
      <div className="btns-container">
        <button onClick={() => dispatch(increase(id))} className="amount-btn">
          <ChevronUp />
        </button>
        <span className="amount">{amount}</span>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
