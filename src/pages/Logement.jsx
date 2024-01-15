//IMPORT
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataLogement from "../datas/logement.json";

//LAYOUTS
import Header from "../layout/Header";
import Footer from "../layout/Footer";

//COMPONENTS
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

//CSS
import "../styles/style.css";



function Logement() {
  //state (état, données)
  const { logementId } = useParams();
  const navigate = useNavigate();

  //comportement
  const [logement, setLogement] = useState(
    {
      pictures: [],
      description: '',
      host: { name: "", picture: "" },
      rating: 0,
      location: '',
      equipments: [],
      tags: [],
      title: '',
    }
  );

  useEffect(() => {
    const ficheLogement = dataLogement.find((logement) => logement.id === logementId);

    if (ficheLogement) {
      setLogement(ficheLogement)
    } else {
      return navigate('/*');
    }

  }, [navigate, logementId]);

  //Tags
  const tags = logement.tags.map((tag, i) => {
    return (
      <button key={i} className="tag-button">{tag}</button>
    );
  });

  //Equipements
  const equipements = logement.equipments.map((equipement, index) => {
    return <li key={index}>{equipement}</li>;
  });


  //affichage (render)
  return (
    <>
      <Header />

      <Carrousel slide={logement.pictures} />

      <section className="information-name-tag-host-rating">
        <div className="name-tag">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tag">
            {tags}
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <div className="host-avatar">
              <img
                className="host-avatar-img"
                src={logement.host.picture}
                alt="avatar"
              />
            </div>
          </div>

          <Rating rating={logement.rating} />
        </div>
      </section>

      <section className="collapse-logement">
        <div className="collapse-logement-size">
          <Collapse title="Description" container={logement.description} />
        </div>
        <div className="collapse-logement-size">
          <Collapse title="Équipements" container={equipements} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Logement;
