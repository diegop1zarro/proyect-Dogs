import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Landing.css'
export default function Landing (){
    return(
        <div>
            <h1 className='bienvenido'>welcome to my page of Dogs</h1>
            <Link to='/home'>
            <button className='botom'> Get in </button>
            </Link>
        </div>
    )
}

