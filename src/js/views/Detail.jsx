import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [personDetail, setPersonDetail] = useState(null);
  const navigate = useNavigate()
  const url = "https://rickandmortyapi.com/api/character/";

  const { theid } = useParams(); //Version destructurada (theid)
  // const params = useParams(); // Version Friendly (params.theid)

  const getPersonDetail = async () => {
    try {
      const response = await fetch(`${url}${theid}`);
      const data = await response.json();
      setPersonDetail(data);
    } catch (error) {
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
            </div>
          </div>
        </div>
      </h3>
    </>
  );
};

export default Detail;


