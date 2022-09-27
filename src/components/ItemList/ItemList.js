import { NavLink } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ list }) => {
  return (
    <div className="products__container">
      {list.map((product) => (
        <NavLink to={"/details/" + product.id} key={product.id} style={{ textDecoration: "none" }}>
          <Item
            img={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default ItemList;
