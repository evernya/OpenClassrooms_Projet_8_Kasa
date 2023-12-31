//IMPORT
import { NavLink } from 'react-router-dom';

//ASSETS
import logo from '../assets/LOGO.color.svg'

//CSS
import '../styles/style.css';



export default function Header() {
    //affichage (render)
    return (
        <header className='header'>
            <img src={logo} alt="Kasa" />
            
            <nav className='header-nav'>
                <NavLink to="/" className='header-link'>Accueil</NavLink>
                <NavLink to="/apropos" className='header-link'>A Propos</NavLink>
            </nav>
        </header>
    )
}