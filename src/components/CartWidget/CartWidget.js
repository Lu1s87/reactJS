import "./CartWidget.css";
import cartLogo from "../../assets/images/cartLogo.png";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const {cart } = useContext(CartContext);
  return (
    <div className="cart">
      <img src={cartLogo} className="cart__img" alt="Cartlogo" />
      <div className="cart__counter">
        <p className="cart__count">{cart.length}</p>
      </div>
    </div>
  );
};

export default CartWidget;
