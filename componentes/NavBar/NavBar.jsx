import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <h1>AO Studio</h1>
        <nav>
            <ul>
                <li>Instrumentos</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar