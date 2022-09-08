import React, { useEffect, useState } from 'react'
import data from "../mockData/mockData";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState ([]);

    useEffect (() => {
        getProduct.then((response) => {
            setProductDetail(response);
        })
        .catch((error) => console.log(error))
    }, []);

    const getProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data[2]);
            }, 2000);
        });

    return (
        <>          
            <ItemDetail detail={productDetail} />
        </> 
    );
};

export default ItemDetailContainer;

