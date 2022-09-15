import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from "../../data/mockData";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProduct
      .then((response) => {
        setProduct(response.find((item) => item.id === id));
      })
      .catch((error) => console.log(error));
  });

  const getProduct = new Promise((resolve, reject) => {
    resolve(data);
  });

  return <div className="details">{product && <ItemDetail item={product} />}</div>;
};

export default ItemDetailContainer;
