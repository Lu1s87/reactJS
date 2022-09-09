import React, { useEffect, useState } from 'react'
import data from "../mockData/mockData";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();

    const [product, setProduct] = useState ([]);
    
    const getProduct = () => {
        const dataFiltrada = data.filter((product) => product.id === id);
        setProduct(...dataFiltrada)
        
    }
        

    useEffect (() => {
        console.log(id)
        getProduct()}, [id]);

    return (
        <div>
           <ItemDetail product={product}/>
        </div>               
    );
};

export default ItemDetailContainer;

