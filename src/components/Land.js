import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const Land = ({id, slug, image, name, description}) => {

  const handleClick = () => {
    switch (id) {
      case "1":
        return '/lands/star-wars'
      case "2":
        return '/lands/fantasyland'
      default:
        return '/all-attractions'
    }
  }

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="park-card-image"
            className="card-img-top"
            src={image}
            alt={name}
            />
          <div className="card-body">
            <h5 className="card-title">
              <Link to={handleClick()}>{name}</Link>
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    );

};

export default Land;