//ASSETS
import fullStar from '../assets/Star_full.svg'
import emptyStar from '../assets/Star_empty.svg'

//CSS
import '../styles/style.css';



export default function Rating( {rating} ) {
    //state (état, données)
    const nombreStars =[1, 2, 3, 4, 5];

    //comportement

    //affichage (render)
    return (
        <div className='rating'>
           {nombreStars.map((star) => 
                rating >= star ? (<img key={star} src={fullStar} alt="" />) : (<img key={star} src={emptyStar} alt="" />) 
            )}
        </div>
    )
}

