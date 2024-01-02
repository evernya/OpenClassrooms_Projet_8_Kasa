//IMPORT
import { useState } from 'react'

//ASSETS
import sideArrow from '../assets/Arrow_side.svg'

//CSS
import '../styles/style.css';



export default function Carrousel({ slide }) {
  //state (état, données)
  const [index, setIndex] = useState(0);

  //comportement
  const handleNextSlide = () => {
    setIndex(index === slide.length - 1 ? 0 : index + 1);
  }

  const handlePrevSlide = () => {
    setIndex(index === 0 ? slide.length - 1 : index - 1);
  }

  //affichage (render)
  return (
    <section className='carrousel'>
      <img className='slide-pictures' src={slide[index]} alt="logement" />

      <div className='slide-arrow'>
        <img className='slide-arrow-left' src={sideArrow} alt="flèche gauche" onClick={handlePrevSlide} />
        <img src={sideArrow} alt="flèche droite" onClick={handleNextSlide} />
      </div>

      {slide.length > 1 && <p className='counter'>{index + 1} / {slide.length}</p>}
    </section>
  )
}

