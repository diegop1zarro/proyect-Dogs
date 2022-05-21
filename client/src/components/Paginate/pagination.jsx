import React from "react";
import '../../Style/paginate.css'

function Paginate (props){
    const nroDePagina = []
    for(let i = 0; i <= Math.ceil( props.dogs/props.dogsPorPage); i++){
        nroDePagina.push(i + 1)
    }
 return (
<nav>
    <ul className='ul'>
        {nroDePagina && nroDePagina.map(numero=>(
            <li key={numero}>
                <button className="paginationBttns"  onClick={() => props.paginado(numero)}>{numero}</button>
            </li>
        ))}
    </ul>
</nav>
 )
}


export default Paginate;   