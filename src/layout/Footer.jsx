//ASSETS
import logo from '../assets/LOGO.white.svg'

//CSS
import '../styles/style.css';



export default function Footer() {
    //affichage (render)
    return (
        <footer className='footer'>
            <img src={logo} alt="Kasa" className='logo-color'/>  
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}