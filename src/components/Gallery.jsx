//IMPORT
import { Link } from "react-router-dom";
import dataLogement from '../datas/logement.json'
//PAGES

//LAYOUTS

//COMPONENTS
import Card from './Card'
//ASSETS

//CSS
import '../styles/style.css';


export default function Gallery() {
    //state (état, données)

    //comportement

    //affichage (render)
    return (
        <div className="gallery">
            {dataLogement.map((logement) => {
                return (
                    <Link to={'/logement/:id}'} >
                            <Card cover={logement.cover} title={logement.title} />
                    </Link>
                )
            }
            )}
        </div >
    )
}