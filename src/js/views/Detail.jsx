import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [personDetail, setPersonDetail] = useState(null);
  const navigate = useNavigate()
  // API Base URL
  const url = "https://rickandmortyapi.com/api/character/";

  // Le damos uso al useParams para traer el id dinamico por visualmente
  const { theid } = useParams(); //Version destructurada (theid)
  // const params = useParams(); // Version Friendly (params.theid)

  //Ahora hacemos el fetch para sacar datos del link url y de los id para llegar a
  // los character/Id y sacar esos datos
  const getPersonDetail = async () => {
    try {
      // Ves como usamos el theid
      const response = await fetch(`${url}${theid}`);
      const data = await response.json();
      setPersonDetail(data);
    } catch (error) {
      // Ya sabes que si quieres una accion ante una respuesta 404, aqui no va el error
      // por que 404 es una respuesta, asi que A los comerciales, que diga a los condicionales
      console.log("Se intento consultar la data, pero no hubo respuesta");
    }
  };

  // Boton para hacer un GO BACK
  const goBack = () => {
    navigate(-1)
  }


  useEffect(() => {
    getPersonDetail();
  }, []);

  return (
    <>
      <h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-7">
              <div className="card w-50 m-auto">
                <img
                  src={personDetail?.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{personDetail?.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary"  onClick={goBack}>
                    Go Back
                  </button>
                  
                </div>
              </div>
              {/* {personDetail?.name} */}
            </div>
          </div>
        </div>
      </h3>
    </>
  );
};

export default Detail;

// Anotes Importantes

// {
/* Debido a que React por origen pasa primero por el return y despues ejecuta useEffect 
        // Person detail es null la primera vez, luego se vuelve a renderizar con useEffect y por eso 
        // esta logica tan rara   */
// }
// Aqui estan los detalles del personaje {/*// Version 1   */}
// {/* {personDetail ? personDetail.name : null}  */}
// {/*// Version 2  */}
// {/* {personDetail == null ? "" : personDetail.name}  */}
// {/* Version 3 Exclusivo de React */}
// {personDetail?.name}
// {/* Esto ultimo quiere decir solo dame personDetail.name y en cualquier otro caso que sea undefined
// y que no me crashee mi codigo  */}
