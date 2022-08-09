import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Landing.css'
export default function Landing (){
    return(
        <div>
            <h1 className='bienvenido'>Bienvenido a mi página de Dogs</h1>
            <Link to='/home'>
            <button className='botom'> Ingresar </button>
            </Link>
        </div>
    )
}

