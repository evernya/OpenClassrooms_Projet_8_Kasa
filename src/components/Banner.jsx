//CSS
import '../styles/style.css';


export default function Banner({ image, texte }) {
  //state (état, données)

  //comportement

  //affichage (render)
  return (
    <div className='banner'>
      <img src={image} alt="Bannière" />
      <div className="banner-darken"></div>
      <p>{texte}</p>
    </div>
  )
}
