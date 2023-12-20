//IMPORT


//PAGES

//LAYOUTS

//COMPONENTS

//ASSETS
import logo from '../assets/LOGO.white.svg'

//CSS
import '../styles/style.css';

function Footer() {
    //state (état, données)

    //comportement

    //affichage (render)
    return (
        <footer className='footer'>
            <img src={logo} alt="Kasa" className='logo-color'/>  
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer