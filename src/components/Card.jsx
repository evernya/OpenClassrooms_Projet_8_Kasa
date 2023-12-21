//CSS
import '../styles/style.css';


export default function Card({ cover, title }) {
  //state (état, données)

  //comportement

  //affichage (render)
  return (
      <figure className="card">
        <img src={cover} alt={title} />
        <div className='card-overlay'></div>
        <h2 className='card-title'>{title}</h2>
      </figure>
  )
}