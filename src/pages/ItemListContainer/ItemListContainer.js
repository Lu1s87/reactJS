import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({}) => {
    const {category} = useParams();
    console.log(category);
    const [productList, setProductList] = useState([]);
    useEffect (() => {
        getProducts();          
    },[category])

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, "items");
        const querySnapshot = category ? query(queryBase, where ('category', '==', category)) : queryBase

        getDocs(querySnapshot).then((response) => {
            console.log(response.docs);
            const data = response.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            setProductList(data);
        });      
    };

  return (
    <div className="products">
      <ItemList list={productList} />
    </div>
  );
};

export default ItemListContainer;
