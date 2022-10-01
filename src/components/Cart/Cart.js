import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import './Cart.css'
import moment from 'moment';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const {cart, removeItem, cartTotal, clear } = useContext(CartContext); 
    console.log ('cart', cart );

    const createOrder = () => {
        const db = getFirestore();
        const order = {
            buyer:{
                name: '',
                phone: '',
                email: '',
            },
            items: cart,
            total: cartTotal(), 
            date: moment().format(),
        };
        const query = collection(db, 'orders');
        addDoc(query, order)
            .then(({ id }) => {
                console.log (id);
                alert('Gracias por comprar con nosotros, tu orden tiene el id: '+ id );
            })
            .catch(() => 
            alert('Tu compra no pudo finalizar correctamente, intentalo de nuevo mas tarde.') )
    };

    return (
    <div className="tarjeta">
        <h1 className="title">Tu carrito:</h1>
            {cart.length === 0 ? (
                <>
                    <h2>No hay productos en tu carrito</h2>
                    <Link to={'/'}><button > Volver a comprar </button></Link>
                </>
                ) : ( 
                <>
                {cart.map((item) => (
                <div key ={item.id} className="producto"> 
                    <h2 className="productoTitle" >Producto: {item.title}</h2>
                    <img src={item.image} alt={item.title} className="img" />
                    <p className="productoPrice" > Precio por unidad: ${item.price}</p>
                    <p className="productoQuantity" > Cantidad: {item.quantity }</p>
                    <p className="productoTotal" > Total: ${item.price * item.quantity }</p>
                    <button onClick={() => removeItem (item.id) } > Eliminar producto</button>
                    
                </div>
                    
                ))}
                    <span>Total a pagar : ${cartTotal()}</span>
                    <Link to={'/'} className="seguirLink"><button className="seguir"> Seguir comprando </button></Link>
                    <button className="productoBoton" onClick={createOrder}>Terminar compra</button>
                    <button className="vaciarBoton" onClick={() => clear()}>Vaciar carrito</button>
                </>
                
            )}
        
    </div>
    )
}

export default Cart