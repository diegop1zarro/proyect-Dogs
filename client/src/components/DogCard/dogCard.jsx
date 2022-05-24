import React from "react";
import { NavLink } from "react-router-dom";
import '../../Style/DogCard.css'
// import {peso} from '../../Controllers/index.js'


export default function DogCard (props){
 return(

     <div className="container">
 {/* <button onClick={()=> props.deleteProduct(props.id)}>x</button> */}
<NavLink className="title" to={`/dogs/${props.id}`}>
<h3 >{props.name}</h3>
</NavLink>
<img className="img" src={props.image} alt={props.name} />
{/* <div className="info">  */}
<p className="info">Temperaments: {props.temperament}</p>
<p className="info">weight imperial: {props.weight}</p>  
{/* <p className="info">weight metric: {props.weight2}</p> */}
{/* </div> */}
     </div>
 )
}