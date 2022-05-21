import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Style/NavBar.css';
import Logo from '../../logoHenry.png'
import Dogimg from '../../dog.png'
// import Search from '../Search/search.jsx';


export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                <img id="logoHenry" src={Dogimg} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <NavLink className='h1' to='/home'>
            <h1 className='h1'>HENRY DOGS</h1>
            </NavLink>
              {/* < Search/> */}
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink className="list-item" to="/home" >Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
            
    )
}