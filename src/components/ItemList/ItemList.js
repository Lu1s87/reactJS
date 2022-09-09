import Item from '../Item/Item';
import {Link} from 'react-router-dom';
import './ItemList.css' 

const ItemList = ({lista}) => {
    
    return(
        <div className='lista'>
            {lista.map((product) => (
                <Link keys={product.id} to={'/detail/' + product.id} style={{ textDecoration:'none'}}>
                    <Item 
                        title={product.title} 
                        price={product.price} 
                        image={product.image}
                    />
                </Link>
            ))}
            
        </div>
    )
};

export default ItemList;