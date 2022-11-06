import React from "react";
import { NavLink } from "react-router-dom";
import "../../Style/DogCard.css";
// import {peso} from '../../Controllers/index.js'

export default function DogCard(props) {
  return (
    <div className="container">
      <NavLink className="title" to={`/dogs/${props.id}`}>
        <h3 className="title">{props.name}</h3>
      </NavLink>
      <div className="container_img">
      <NavLink className="title" to={`/dogs/${props.id}`}>
        <img className="img" src={props.image} alt={props.name} />
      </NavLink>
      </div>
      <div className="container_info">
        <div className="infoCard">
          <h4>Temperaments: </h4>
          <p>{props.temperament}</p>
        </div>
        <div className="infosCard">
          <h4>weight imperial: </h4>
          <p>{props.weight}</p>
        </div>
        <div className="infosCard">
          <h4>Dog :</h4>
          <p>{props.CreadoPorDiego}</p>
        </div>
      </div>
    </div>
  );
}
