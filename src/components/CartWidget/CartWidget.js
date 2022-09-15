import "./CartWidget.css";
import cart from "../../assets/images/cart.png";

const CartWidget = () => {
  return (
    <div className="cart">
      <img src={cart} className="cart__img" alt="Pizza Cart" />
      <div className="cart__counter">
        <p className="cart__count">0</p>
      </div>
    </div>
  );
};

export default CartWidget;
