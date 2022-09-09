import data from "../mockData/mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.style.css'

const ItemListContainer = () => {
    const [productList, setProductList] = useState ([]);

    useEffect (() => {
        getProducts.then((response) => {
            setProductList(response);
        })
        .catch((error) => console.log(error))
    }, []);

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });

    return (
        <div className="style">          
            <ItemList lista={productList} />
        </div>
    );
};

export default ItemListContainer;