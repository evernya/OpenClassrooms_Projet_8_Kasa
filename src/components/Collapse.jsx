//IMPORT
import { useState } from 'react'

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
            <div onClick={ handleOpen } className='collapse-all'>
                <div className='collapse-title-arrow'>
                    <h3 className='collapse-title'>{title}</h3>
                    <img className={collapseOpen ? 'arrow arrow-down' : 'arrow arrow-up'} src={arrow} alt="open/close collapse"/>
                </div>

                <div className='collapse-container'>
                    {collapseOpen && <p className='collapse-p'>{container}</p>}
                </div>
            </div>
        )
}