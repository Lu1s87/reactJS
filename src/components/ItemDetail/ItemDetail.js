import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

  const [objeto , setObjeto] = useState(0);
    const cantidad = () => {
        console.log(objeto);
    }


  return (
    <div className="detail">
      <div className="detail__header">
        <figure className="detail__figure">
          <img src={item.img} alt={item.title} className="detail__img" />
        </figure>
      </div>
      <div className="detail__body">
        <p className="detail__title">{item.title}</p>
        <p className="detail__description">{item.description}</p>
        <p className="detail__price">${item.price}</p>
      </div>
      <div className="detail__footer">
        <ItemCount stock = {item.stock} setItem = {setObjeto} items = {objeto}/>          
        <Link to={"/cart"}>
          <button className="boton" onClick={cantidad}>Agregar al carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
