import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const urlBase = "https://rickandmortyapi.com/api";

const RickAndMorty = () => {
  const [character, setCharacter] = useState([]);

  const getAllCharacter = async () => {
    try {
      const response = await fetch(`${urlBase}/character`); 
      const data = await response.json();

      setCharacter(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCharacter();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Rick and morty</h1>

          {character.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    // Destino de el Link?.. Dinamico
                    to={`/rick-and-morty/${item.id}`}
                    className="btn btn-primary"
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RickAndMorty;
