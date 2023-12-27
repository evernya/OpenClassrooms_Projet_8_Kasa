//IMPORT
import { useState } from 'react'

//PAGES

//LAYOUTS

//COMPONENTS

//ASSETS
import arrow from '../assets/Arrow.svg'

//CSS
import '../styles/style.css';


export default function Collapse( {title, container}) {
    //state (état, données)
    const [collapseOpen, setCollapseOpen] = useState(false);

    //comportement
    const handleOpen = () => {
        setCollapseOpen(!collapseOpen);
    }

    //affichage (render)
    return (
            <div className='collapse-all'>
                <div onClick={ handleOpen } className='collapse-title-arrow'>
                    <h3>{title}</h3>
                    <img className={collapseOpen ? 'arrow arrow-down' : 'arrow arrow-up'} src={arrow} alt="open/close collapse"/>
                </div>

                <div className='collapse-container'>
                {collapseOpen && <p>{container}</p>}
                </div>

            </div>
        )
}