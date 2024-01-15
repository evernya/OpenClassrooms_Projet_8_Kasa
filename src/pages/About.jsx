//LAYOUTS
import Header from "../layout/Header";
import Footer from "../layout/Footer";

//COMPONENTS
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

//ASSETS
import bannerHome from "../assets/Banner_About.png";

//CSS
import "../styles/style.css";



function About() {
  //affichage (render)
  return (
    <>
      <Header />
      <Banner image={bannerHome} />

      <div className="collapse">
        <div className="collapse-about-size">
          <Collapse
            title="Fiabilité"
            container="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className="collapse-about-size">
          <Collapse
            title="Respect"
            container="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="collapse-about-size">
          <Collapse
            title="Service"
            container="Sur les anciennes maquettes : « Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question. »"
          />
        </div>
        <div className="collapse-about-size">
          <Collapse
            title="Sécurité"
            container="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
