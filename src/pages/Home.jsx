//LAYOUTS
import Header from '../layout/Header'
import Footer from '../layout/Footer'

//COMPONENTS
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

//ASSETS
import bannerHome from '../assets/Banner_Home.png'

//CSS
import '../styles/style.css';



function Home() {
    //affichage (render)
    return <>
        <Header />
        <Banner image={bannerHome} texte="Chez vous, partout et ailleurs" />
        <Gallery />
        <Footer />
    </>
}

export default Home