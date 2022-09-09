import './ItemDetail.style.css';

const ItemDetail = ({ product }) => {
    return (
        <div className="producto">  
            <img className="imagenP" src={product.image} alt="title"/>          
            <h2> {product.title}</h2>
            <div>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p> 
            </div>
                 
        </div>
    );
  };
  
  export default ItemDetail;