import logo from '../img/GamingSea.jpg';

const NavBar = () => {
    return (
        <div className="navbarContainer"> 
            <img src={logo} alt="logo"/>
            <nav class="menu">
                <ul>
                    <li><a> Inicio </a></li>

                    <li><a> Pc Armada </a></li>    
                    
                    <li><a> Componentes </a></li>
        
                    <li><a> Contacto </a></li>    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;