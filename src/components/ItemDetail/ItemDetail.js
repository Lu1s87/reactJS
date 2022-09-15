import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
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
        <ItemCount initial={1} stock={item.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
