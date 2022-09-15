import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock }) => {
  const [items, setItem] = useState(initial);

  const decrease = () => {
    if (!items <= 0) setItem(items - 1);
  };

  const increase = () => {
    if (items < stock) setItem(items + 1);
  };

  const onAdd = () => {
    if (items === 1) alert(`You added ${items} product!`);
    if (items > 1) alert(`You added ${items} products!`);
  };

  return (
    <div className="counter">
      <div className="counter__container">
        <i className="counter__decrease fa-solid fa-circle-minus" onClick={decrease}>-</i>
        <p className="counter__count">{items}</p>
        <i className="counter__increase fa-solid fa-circle-plus" onClick={increase}>+</i>
      </div>
      <button className="product__button" onClick={onAdd}>
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
