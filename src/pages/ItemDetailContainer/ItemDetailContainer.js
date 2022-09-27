import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  
  const getProduct = () => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", id);
    getDoc(queryDoc).then((res) =>{
        setProduct({id: res.id, ...res.data()});
    }).catch((error) => console.log(error));
  }  
  
  useEffect (() => {
    getProduct();
  });
    
  return (
    <div className="details">
      <ItemDetail item={product} />
    </div>
  )
};

export default ItemDetailContainer;
