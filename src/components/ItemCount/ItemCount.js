import "./ItemCount.css";


const ItemCount = ({setCount , count, stock}) => {

  const sumar = () => count < stock  ? setCount(count + 1) : alert("No hay mas stock disponible")
  const restar = () => count > 1 ? setCount(count - 1) : alert("tienes que comprar por lo menos un producto")


  return (
    <div className="counter">
      <div className="counter__container">
        <button className="counter__decrease fa-solid fa-circle-minus" onClick={restar}>-</button>
        <p className="counter__count">{count}</p>
        <button className="counter__increase fa-solid fa-circle-plus" onClick={sumar}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
