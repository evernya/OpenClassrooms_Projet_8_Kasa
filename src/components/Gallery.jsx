//IMPORT
import { Link } from "react-router-dom";
import dataLogement from '../datas/logement.json'

//COMPONENTS
import Card from './Card'

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
                    <figure key={logement.id}>
                        <Link to={`/logement/${logement.id}`} >
                            <Card cover={logement.cover} title={logement.title} />
                        </Link>
                    </figure>
                )
            }
            )}
        </div >
    )
}