import carrito from '../../img/carrito.png';

const CartWidget = () => {
    return (
        <div> 
            <img className='carrito' src={carrito} alt="carrito"/>          
        </div>
    )
}

export default CartWidget;