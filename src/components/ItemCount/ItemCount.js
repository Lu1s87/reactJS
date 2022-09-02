import {useState} from "react";
import './itemCount.style.css';

const ItemCount = () => {
        const stock = 10
        const [items, setItems] = useState(0)

        const agregarCarrito = () => items < [stock] ? setItems(items + 1) : alert ("No hay más Stock disponible")

        const sacarCarrito = () => items > 0 ? setItems(items-1) : alert ("No posees más items")

    return (
    <div className="card">
        <div>Stock {stock}</div>
        <div>Carrito {items} </div>
        <div className="botonera">
            <button className="rest" onClick={sacarCarrito}>-</button>
            <button className="add" onClick={agregarCarrito}>+</button>
        </div>
        
    </div>
  )
}

export default ItemCount