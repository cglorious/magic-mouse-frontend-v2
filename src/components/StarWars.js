import React from 'react';
import StarWarsAttraction from './StarWarsAttraction';
import "../styles/style.css";

const StarWars = ({attractions}) => {

  const listStarWarsAttractions = () => {
      return attractions.map(attraction =>
        <StarWarsAttraction
          key={attraction.id}
          image={attraction.image_url}
          name={attraction.name}
          closure={attraction.closure}
          />
      )
    }

  return (
    <div>
        <div className="page-container">
          <h3 className="header">Star Wars</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listStarWarsAttractions()}
          </div>
        </div>
    </div>
  );
};

export default StarWars;
