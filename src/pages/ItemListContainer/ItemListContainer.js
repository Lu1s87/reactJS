import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import data from "../../data/mockData";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts
      .then((response) => {
        category ? setProductList(response.filter((item) => item.category === category)) : setProductList(response);
      })
      .catch((error) => console.log(error));
  }, [category]);

  const getProducts = new Promise((resolve, reject) => {
    resolve(data);
  });

  return (
    <div className="products">
      <ItemList list={productList} />
    </div>
  );
};

export default ItemListContainer;
