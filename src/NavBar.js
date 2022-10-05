import React from "react";
import './NavBar.css';
import logo from './assets/img/logo.png';

function NavBar(){
    return(
      <nav>
        <div>
          <img  className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="navBarDesktopMenu">
        <ul>
          <li><a href="#">Lo que hemos hecho</a></li>
          <li><a href="#">Cómo lo hacemos</a></li>
          <li><a href="#">Qué hacemos</a></li>
          <li><a href="#">Quienes somos</a></li>
          <li><a href="#">Home</a></li>
        </ul>  
        </div>
      </nav>      
    )
}

export {NavBar};