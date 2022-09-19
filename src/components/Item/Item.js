import "./Item.css";

const Item = ({ id, img, title, price, }) => {
  return (
    <div className="product">
      <div className="product__header">
        <figure className="product__figure">
          <img src={img} alt={title} className="product__img" />
        </figure>
      </div>
      <div className="product__body">
        <p className="product__title">{title}</p>
        <p className="product__price">${price}</p>
      </div>
      <div className="product__footer">
        <button className="product__button">Detalles</button>
      </div>
    </div>
  );
};

export default Item;
