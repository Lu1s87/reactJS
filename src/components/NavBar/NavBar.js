import logo from '../../img/GamingSea.jpg';
import './NavBar.styles.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbarContainer"> 
            <img className="logo" src={logo} alt="logo"/>
            <nav className="menu">
                <ul>
                    <li> <Link to= {'/'}> Componentes </Link> </li>

                    <li><a> Pc Armada </a></li>    
                    
                    <li><a> Contacto </a></li>

                    <li> <CartWidget/> </li>    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;