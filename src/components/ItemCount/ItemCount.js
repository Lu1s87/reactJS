import "./ItemCount.css";


const ItemCount = ({setItem , items, stock}) => {

  const sumar = () => items < stock  ? setItem(items + 1) : alert("No hay mas stock disponible")
  const restar = () => items > 0 ? setItem(items - 1) : alert("No se aceptan valores negativos")


  return (
    <div className="counter">
      <div className="counter__container">
        <button className="counter__decrease fa-solid fa-circle-minus" onClick={restar}>-</button>
        <p className="counter__count">{items}</p>
        <button className="counter__increase fa-solid fa-circle-plus" onClick={sumar}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
