import './ItemDetail.style.css';

const ItemDetail = ({ detail }) => {
    return (
        <div className="producto">            
            <h2> {detail.title}</h2>
            <img className="imagenP" src={detail.image} alt="title"/>
            <h3> {detail.price} </h3>       
        </div>
    );
  };
  
  export default ItemDetail;