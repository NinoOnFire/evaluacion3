import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='title'>Bienvenido</h1>
      <nav>
        <ul className='link-list'>
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/Nosotros">Nosotros</Link>
          </li>
          <li>
            <Link className='link' to="/Contactenos">Contáctenos</Link>
          </li>
          <li>
            <Link className='link' to="/Comentarios">Comentarios</Link>
          </li>
          <li>
            <Link className='link' to="/PokemonTypes">pokedex</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}



export default Header;
