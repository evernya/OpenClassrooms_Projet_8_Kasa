//IMPORT
import { Link } from "react-router-dom";

//LAYOUTS
import Header from '../layout/Header'
import Footer from '../layout/Footer'

//CSS
import '../styles/style.css';



function ErrorPage() {
  //affichage (render)
  return <>
    <Header />
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={'/'} className="error-return-home">Retourner sur la page d'accueil</Link>
    </div>
    <Footer />
  </>
}

export default ErrorPage