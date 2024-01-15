//CSS
import '../styles/style.css';


export default function Banner({ image, texte }) {
//affichage (render)
  return (
    <div className='banner'>
      <img src={image} alt="Bannière" />
      <div className="banner-darken"></div>
      <p>{texte}</p>
    </div>
  )
}
